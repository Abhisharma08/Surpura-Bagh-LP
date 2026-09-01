export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!src) return '';

  // If it is a Cloudinary URL, inject responsive width and format optimizations
  if (src.includes('res.cloudinary.com')) {
    const uploadIndex = src.indexOf('/image/upload/');
    if (uploadIndex !== -1) {
      const prefix = src.slice(0, uploadIndex + 14); // "https://res.cloudinary.com/<cloud>/image/upload/"
      const remainder = src.slice(uploadIndex + 14);

      // Clean out any existing transformations before the version or asset ID
      const cleanPath = remainder.replace(/^(?:[a-zA-Z0-9_,-]+\/)*(v\d+\/.*|[^\/]+$)/, '$1');
      const q = quality ? `q_${quality}` : 'q_auto';

      return `${prefix}f_auto,${q},w_${width},c_limit/${cleanPath}`;
    }
  }

  // Fallback for non-Cloudinary images
  return src;
}
