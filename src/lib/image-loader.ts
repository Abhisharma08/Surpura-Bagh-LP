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

  // If it is a Cloudinary URL, inject responsive width, format, and eco compression
  if (src.includes('res.cloudinary.com')) {
    const uploadIndex = src.indexOf('/image/upload/');
    if (uploadIndex !== -1) {
      const prefix = src.slice(0, uploadIndex + 14); // "https://res.cloudinary.com/<cloud>/image/upload/"
      const remainder = src.slice(uploadIndex + 14);

      // Clean out any existing transformations before the version tag or public ID
      const versionMatch = remainder.match(/(?:^|\/)(v\d+\/.*|[^\/]+$)/);
      const cleanPath = versionMatch ? versionMatch[1] : remainder;
      const q = quality ? `q_${quality}` : 'q_auto:eco';

      return `${prefix}f_auto,${q},w_${width},c_limit/${cleanPath}`;
    }
  }

  // Fallback for non-Cloudinary images
  return src;
}
