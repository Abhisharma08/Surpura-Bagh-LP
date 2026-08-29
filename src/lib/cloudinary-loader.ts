'use client';

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.includes('res.cloudinary.com')) {
    const parts = src.split('/upload/');
    if (parts.length === 2) {
      // Remove any previous transformation parameter if present
      const cleanPath = parts[1].replace(/^(?:[a-z]_[^/]+,)*[a-z]_[^/]+\//, '');
      const q = quality ? `q_${quality}` : 'q_auto';
      return `${parts[0]}/upload/w_${width},f_auto,${q}/${cleanPath}`;
    }
  }
  return src;
}
