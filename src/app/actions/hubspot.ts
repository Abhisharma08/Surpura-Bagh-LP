'use server';

export type HubSpotLeadData = {
  step: 1 | 2;
  name: string;
  email: string;
  phone: string;
  weddingDate?: string;
  guestCount?: string;
};

/**
 * Server Action to submit lead data to HubSpot CRM.
 * Requires HUBSPOT_ACCESS_TOKEN environment variable.
 */
export async function submitToHubSpot(data: HubSpotLeadData) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!accessToken) {
    console.warn('HUBSPOT_ACCESS_TOKEN is not configured in environment variables.');
    return { success: true, warning: 'HUBSPOT_ACCESS_TOKEN missing' };
  }

  try {
    const [firstname, ...lastnameParts] = data.name.trim().split(/\s+/);
    const lastname = lastnameParts.join(' ');

    const properties: Record<string, string> = {
      email: data.email,
      firstname: firstname || '',
      lastname: lastname || '',
      phone: data.phone,
    };

    if (data.step === 2) {
      if (data.weddingDate) {
        properties.weddingdate = data.weddingDate;
        properties.wedding_date = data.weddingDate;
      }
      if (data.guestCount) {
        properties.guest_count = data.guestCount;
        properties.number_of_guests = data.guestCount;
      }
      properties.message = `Wedding Date: ${data.weddingDate || 'N/A'}, Guest Count: ${data.guestCount || 'N/A'}`;
    }

    // Try posting new contact
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (response.ok) {
      return { success: true };
    }

    const errorData = await response.json();

    // If contact exists (HTTP 409), update existing contact using email
    if (response.status === 409) {
      const updateRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (updateRes.ok) {
        return { success: true };
      }

      // If PATCH fails because of unrecognized custom property, retry with standard properties only
      const safeProperties: Record<string, string> = {
        email: data.email,
        firstname: firstname || '',
        lastname: lastname || '',
        phone: data.phone,
      };

      const safeUpdateRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ properties: safeProperties }),
        }
      );

      if (safeUpdateRes.ok) {
        return { success: true };
      }
    }

    // If initial POST failed due to unknown custom property (400), retry with safe properties
    if (response.status === 400) {
      const safeProperties: Record<string, string> = {
        email: data.email,
        firstname: firstname || '',
        lastname: lastname || '',
        phone: data.phone,
      };

      const retryRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ properties: safeProperties }),
      });

      if (retryRes.ok) {
        return { success: true };
      }
    }

    console.error('HubSpot API Error:', errorData);
    return { success: false, error: errorData.message || 'Failed to sync with CRM.' };
  } catch (error) {
    console.error('HubSpot Submission Exception:', error);
    return { success: false, error: 'Internal server error during CRM sync.' };
  }
}
