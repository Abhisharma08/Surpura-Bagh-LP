import Image from "next/image";
import {
  MapPinned,
  Building2,
  PackageOpen,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Subtitles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Innovative Branding Ideas | AD Vantage Integrated Marketing",
  description:
    "AD Vantage helping businesses to connect with customers in a meaningful way by being technology-enabled, data-driven, and creative marketing techniques.",
};

const LOGO_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778668639/advlogo_qq9f92.png";

const HERO_BG_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778674606/hero_qkgfwb.webp";

const DEFAULT_PLACEHOLDER =
  "https://picsum.photos/seed/placeholder/800/600";

export default function LandingPage() {
  const studentImg = PlaceHolderImages.find(
    (img) => img.id === "student-work"
  );

  const brandingImg = PlaceHolderImages.find(
    (img) => img.id === "branding-mockup"
  );

  const deferredSectionStyle = {
    contentVisibility: "auto",
    containIntrinsicSize: "900px",
  } as const;

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2" aria-label="AD Vantage Logo">
            <Image
              src={LOGO_URL}
              alt="AD Vantage Logo"
              width={200}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              quality={60}
            />
          </div>

          <div className="flex items-center gap-4">
            <ScrollToLeadButton className="bg-secondary px-6 font-bold text-white hover:bg-secondary/90">
             Get Free Plan
            </ScrollToLeadButton>
          </div>
        </div>
      </nav>

      <main className="w-full pb-24 pt-20 lg:pb-0">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-primary py-20 lg:py-20">
          <div className="absolute inset-0">
            <Image
              src={HERO_BG_URL}
              alt="Retail Branding"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />

          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="w-full space-y-6 text-white">
                <h1 className="font-headline text-3xl leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-3xl">
                  Bangalore Sees Your Brand. Not Just Your Ad.
                </h1>

                <p className="max-w-xl text-xl text-white">
                On-ground brand activations across Koramangala, Whitefield, HSR, Indiranagar and Hebbal. <br />
                1,200+ direct consumer contacts. Every campaign. Every time.
                </p>

                {/* <div className="flex max-w-2xl flex-wrap gap-2">
                  {[
                    "Retail Branding Specialist",
                    "Store & Franchise Outlet Branding",
                    "Trusted by 100+ brands",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                    >
                      <Star className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div> */}

                {/* <div className="flex max-w-2xl flex-wrap gap-3">
                  {[
                    "Retail Experience Design",
                    "Visual Merchandising",
                    "Materials & Fabrications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(219,52,54,0.35)]"
                    >
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div> */}

              {/* TRUST BADGES */}
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-primary/90 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">500+</span>
                    <span className="text-sm font-medium text-secondary">
                      Activations
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">80+</span>
                    <span className="text-sm font-medium text-secondary">
                      Brands
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">48 Hr</span>
                    <span className="text-sm font-medium text-secondary">
                      Plan Turnaround
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">Zero</span>
                    <span className="text-sm font-medium text-secondary">
                      Subcontracting
                    </span>
                  </div>

                  {/* <p className="col-span-full mt-4 text-xs text-white/70 text-center">
                    AD Vantage Integrated Marketing · advanintegrated.in · Landing Page — Final Copy · Prepared by Contentify Tech ·
                    <br />
                    contentify.co.in
                  </p> */}
                </div>
              </div>               
              </div>

              <div id="lead-form-top">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

          {/* CLIENTS */}
          <section
            className="w-full overflow-hidden bg-muted py-14"
            style={deferredSectionStyle}
          >
            <div className="container mx-auto max-w-7xl px-4 text-center">
              
              <h2 className="mb-3 text-3xl font-bold text-primary">
                BRANDS ACTIVATED ACROSS BANGALORE
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
                500+ on-ground activations. 80+ brands. FMCG · D2C · Real Estate · Retail · EdTech
              </p>

              {/* LOGO MARQUEE */}
              <div className="relative overflow-hidden">
                
                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

                <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16">
                  
                  {[
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839836/wipro_c4vtlh.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839845/raymond_uqgbc9.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839849/jbl-logo_ytljd0.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839851/hul_upiizw.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839854/hewlet_v97taj.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839856/ariseNshine_fwmfxw.webp",


                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839836/wipro_c4vtlh.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839845/raymond_uqgbc9.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839849/jbl-logo_ytljd0.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839851/hul_upiizw.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839854/hewlet_v97taj.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839856/ariseNshine_fwmfxw.webp",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="flex h-24 w-44 items-center justify-center rounded-2xl border border-muted bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Image
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        width={140}
                        height={70}
                        className="h-auto max-h-12 w-auto object-contain transition duration-300 hover:scale-105"            />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Join 80+ brands that chose on-ground over online
                </p>
              </div>
            </div>
          </section>

{/* ABOUT */}
<section
  className="w-full bg-white py-20"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* IMAGE */}
      <div className="order-2 relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:order-1">
        <Image
          src={studentImg?.imageUrl || DEFAULT_PLACEHOLDER}
          alt="Retail Branding"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* CONTENT */}
      <div className="order-1 space-y-6 lg:order-2">
        <SectionHeader
          title="Your Ad Got the Click. Did They Actually Buy?"
          subtitle={
            <>
          Digital ads build awareness. On-ground activations build buyers.
           We put your brand — physically — in the hands of your exact consumer. Mall floors. Society gates. Campus grounds. Tech park corridors.
            </>
          }
          centered={false}
        />
        <p className="mt-2 text-lg leading-relaxed text-primary">
          Executed on-ground. Measured every day. Reported after every campaign.
        </p>

        <ul className="space-y-4">
          {[
            "Bangalore's own on-ground activation team — no freelancers, no subcontracting",
            "1,200+ direct consumer contacts delivered per campaign (not reach, not impressions)",
            "Every campaign tracked, photographed, and reported — zero ambiguity",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 font-medium text-primary"
            >
              <ShieldCheck className="h-6 w-6 text-secondary" />
              {item}
            </li>
          ))}
        </ul>

        {/* <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">
          We don’t just run campaigns, we create experiences consumers remember.
        </p> */}
      </div>

    </div>
  </div>
</section>

{/* BRAND IMPACT */}
<section
  className="w-full bg-muted py-20"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* CONTENT */}
      <div className="order-1 space-y-6 lg:order-1">
        <SectionHeader
          title={
          <>
         They're Outside. Are You?
          </>
          }
          subtitle=""
          centered={false}
        />

      <div className="space-y-4">

      <p className="text-lg leading-relaxed text-muted-foreground">
        While your competitor runs digital ads, your consumer is walking through Forum Mall, past an RWA
gate in HSR, or through a tech park in Whitefield. On-ground activations meet buyers where they
already are — in the moment before they decide.
      </p>

      <ul className="space-y-4">
        {[
          "3× higher first-trial conversion vs. digital-only campaigns [industry estimate]",
          "Real conversations — not a 6-second pre-roll they skip",
          "Brand recall that lasts weeks, not scroll-seconds",
          "Community trust that no retargeting pixel can replicate",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-medium text-primary"
          >
            <ShieldCheck className="h-6 w-6 text-secondary" />
            {item}
          </li>
        ))}
      </ul>
            <div className="space-y-4">

      <p className="text-lg leading-relaxed text-muted-foreground">
        The right activation doesn't just build a brand. It builds the consumer who chooses your brand first
      </p>
      </div>

    </div>
      </div>

      {/* IMAGE */}
      <div className="order-2 relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:order-2">
        <Image
          src="https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778844599/WhatsApp_Image_2026-05-15_at_4.48.21_PM_zp8l0l.jpg"
          alt="Retail branding showcase"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </div>
  </div>
</section>
        {/* SERVICES */}
          <section
            className="w-full bg-white py-20"
            style={deferredSectionStyle}
          >
          <div className="container mx-auto max-w-7xl px-5">
            <SectionHeader
              title="Six Formats. One City. Your Consumer, Up Close."
              subtitle="From Phoenix Marketcity to Whitefield tech parks — we activate where Bangalore's buyers already move."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
              {
                icon: <Building2 />,
                title: "Mall Activations",
                Subtitles: "Where 1,200 Consumers Meet Your Brand in One Day",
                desc: "High-footfall consumer engagement campaigns inside malls and retail environments.",
              },
              {
                icon: <PackageOpen />,
                title: "Product Sampling",
                Subtitles: "Branded stalls with trained brand ambassadors engaging directly with consumers.",
                desc: "Wet & dry sampling campaigns that help consumers experience your product directly.",
              },
              {
                icon: <GraduationCap />,
                title: "School & College Activations",
                Subtitles: "Branded stalls with trained brand ambassadors engaging directly with consumers.",
                desc: "Youth-focused engagement campaigns designed to build early brand affinity.",
              },
              {
                icon: <MapPinned />,
                title: "Feet On Street Campaigns",
                Subtitles: "Branded stalls with trained brand ambassadors engaging directly with consumers.",
                desc: "Ground-level outreach campaigns that bring your brand directly to consumers.",
              },
              {
                icon: <Sparkles />,
                title: "Experiential Marketing",
                Subtitles: "Branded stalls with trained brand ambassadors engaging directly with consumers.",
                desc: "Immersive brand experiences designed to improve engagement and recall.",
              },
              {
                icon: <BriefcaseBusiness />,
                title: "Corporate Activations",
                Subtitles: "Branded stalls with trained brand ambassadors engaging directly with consumers.",
                desc: "Professional engagement campaigns for enterprise and workplace audiences.",
              },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-white/60 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-secondary/100 hover:bg-white"
                >
                  <div className="h-fit rounded-lg bg-primary/5 p-3 text-primary">
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-headline text-lg text-primary">
                      {item.title}
                    </h4>

                      <p className="text-sm font-semibold text-secondary">
                        {item.Subtitles}
                      </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* PACKAGES */}
<section
  className="w-full bg-primary py-24 text-white"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <SectionHeader
      title="Pick Your Format. We Handle the Rest."
      subtitle={
        <>
          Four formats. Each built for one thing: {" "}
          <span className="font-semibold text-secondary">
          your consumer
          </span>
          ,{" "}
          <span className="font-semibold text-secondary">
          face to face with your brand
          </span>,{" "}
        </>
      }
      light
    />

    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4 xl:grid-cols-4f">

      {[
      {
        tag: "HIGHEST FOOTFALL",
        title: "Mall Floor Activations",
        desc: "",
        features: [
          "Forum · Phoenix · Nexus · Orion · Elements",
          "800–1,200 direct consumer contacts/day",
          "Demo counters, sampling, brand experience zones",
          "Permissions + manpower + setup — all handled",
          "Weekend premium + weekday budget slots",
        ],
        cta: "Plan My Mall Activation",
      },

      {
        tag: "HIGHEST TRIAL RATE",
        title: "Product Sampling",
        desc: "",
        features: [
          "RWAs · supermarkets · transit hubs · kirana clusters",
          "500–2,000 product trials per campaign day",
          "Consumer feedback captured post-trial",
          "SKU-targeted — right product, right profile",
          "Post-campaign trial + intent data report",
        ],
        cta: "Start My Sampling Campaign",
      },

      {
        tag: "HIGHEST ENGAGEMENT RATE",
        title: "Campus Activations",
        desc: "",
        features: [
          "Bangalore's top engineering, MBA, design colleges",
          "200–450 student touchpoints per campus day",
          "Brand ambassador conversion built in",
          "Ideal for D2C, EdTech, FMCG, fintech launches",
          "Social moment creation for organic amplification",
        ],
        cta: "Activate On Campus",
      },

      {
        tag: "MAXIMUM REACH",
        title: "Full Activation Programme",
        desc: "",
        features: [
          "Mall + Sampling + Campus — one programme",
          "Multi-zone Bangalore coverage in one plan",
          "Single POC from brief to post-campaign report",
          "Weekly updates + live execution photos",
          "Project or retainer — your choice",
        ],
        cta: "Get My Full Strategy",
      },
      ].map((item) => (
        <div
          key={item.title}
          className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15"
        >

          {/* TOP */}
          <div className="p-6">
            <div className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
              {item.tag}
            </div>

            <h3 className="mb-4 text-2xl font-bold leading-tight text-white group-hover:text-secondary">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-white/70">
              {item.desc}
            </p>
          </div>

          {/* FEATURES */}
          <div className="flex-1 space-y-4 px-6 pb-6">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 border-b border-white/10 pb-4"
              >
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                  ✓
                </div>

                <p className="text-sm leading-relaxed text-white/80">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto p-6 pt-0">
            <ScrollToLeadButton className="h-12 w-full rounded-xl bg-secondary text-sm font-bold text-white transition-all hover:bg-secondary/90">
              {item.cta} →
            </ScrollToLeadButton>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* MARKET SECTION */}
    <section
      className="w-full bg-muted py-20"
      style={deferredSectionStyle}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="order-2 relative h-96 overflow-hidden rounded-2xl shadow-2xl lg:order-1">
            <Image
              src="https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778844598/WhatsApp_Image_2026-05-15_at_4.48.34_PM_fwdsic.jpg"
              alt="Retail Growth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 space-y-6 lg:order-2">
            <SectionHeader
              title="Clients Don't Measure Impressions. They Measure These."
              subtitle=""
              centered={false}
            />
                          {/* TRUST BADGES
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-primary/90 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">1200+</span>
                    <span className="text-sm font-medium text-secondary">
                      Face-to-face consumer contacts per mall day
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">38%</span>
                    <span className="text-sm font-medium text-secondary">
                      Avg brand recall uplift post-activation
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">450</span>
                    <span className="text-sm font-medium text-secondary">
                      Student touchpoints per campus day
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
                    <span className="text-xl font-bold text-white">100%</span>
                    <span className="text-sm font-medium text-secondary">
                      Campaigns tracked & reported on time
                    </span>
                  </div>
                </div>
              </div> */}

            <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground marker:text-secondary">
              <li>
                <span className="text-slate-600">
                  <span className="font-semibold text-secondary">1,200+ </span>direct face-to-face consumer contacts per mall activation day — documented contacts, not estimated reach
                </span>
              </li>

              <li>
                <span className="text-slate-600">
                  <span className="font-semibold text-secondary">38% </span>average rise in unaided brand recall vs. pre-campaign consumer survey, across tracked Bangalore activations
                </span>
              </li>

              <li>
                <span className="text-slate-600">
                  <span className="font-semibold text-secondary"> 200-400 </span>direct student touchpoints per campus activation day — every interaction logged, not estimated
                </span>
              </li>
              <li>
                <span className="text-slate-600">
                  <span className="font-semibold text-secondary">100% </span>of campaigns delivered with a location-specific, date-stamped report — every consumer contact documented
                </span>
              </li>
            </ul>
          </div>

            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section
          className="relative w-full overflow-hidden bg-white py-24"
          style={deferredSectionStyle}
        >
          <div className="container relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center">
            <h2 className="font-headline text-4xl text-primary md:text-3xl">
              3 Q3 Slots Left. First Brief Gets the Best Locations.
            </h2>

            <p>
              We cap new campaign onboarding each quarter to protect execution quality. 
              3 of 5 Q3 2026Bangalore slots are confirmed. 
              Share your brief — we respond with slot availability and a custom strategy in 24 hours.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 w-full border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Learn More
              </ScrollToLeadButton> */}

              <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
              Check My Slot →
              </ScrollToLeadButton>

              {/* <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Enquire Now
              </ScrollToLeadButton> */}
            </div>
              <p className="text-xs text-muted-foreground">
              WhatsApp or form — takes 90 seconds. We respond the same day.
              </p>
            {/* <p className="text-sm text-muted-foreground">
              Don&apos;t wait to turn your brand&apos;s potential into
              performance.
            </p> */}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="lead-form"
          className="w-full bg-muted py-10"
          style={deferredSectionStyle}
        >
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-3xl text-primary">
                    Your Consumer Is Outside. Is Your Brand?
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    Share your brief. Get a free activation plan — 
                    format, Bangalore locations, reach estimate, and budget guide. 
                    <br /> <span className="font-bold text-secondary">In 24 hours. At zero cost.</span>
                  </p>
                                <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
              Get My Free Activation Plan →
              </ScrollToLeadButton>
                </div>

              <LeadForm
              title="Free Plan. 24 Hours."
              subtitle="Share your brief and get a custom activation strategy within 24 hours."
              buttonText="Send Brief — Get My Plan →"
              bottomText={ <>
                Free plan delivered in 24 working hours — no delays, no excuses
                <br /> Your details are used only to build your plan — never shared
                <br /> No sales pitch. Just your plan, built for your brand and budget.
              </> }
            /> 
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
          <p>©2026 AD Vantage Integrated Marketing All Rights Reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex w-screen gap-2 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-2 px-4">
          <ScrollToLeadButton className="h-12 flex-1 bg-secondary font-bold text-white">
            BOOK A FREE CONSULTATION
          </ScrollToLeadButton>
          
        </div>
      </div>
    </div>
  );
}