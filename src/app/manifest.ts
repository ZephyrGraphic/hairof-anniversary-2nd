import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kai & Rofi - 2nd Anniversary',
    short_name: 'Kai & Rofi',
    description: 'Happy 2nd Anniversary, Sayang!',
    start_url: '/',
    display: 'standalone',
    background_color: '#221015',
    theme_color: '#ee2b5b',
    icons: [
      {
        src: '/images/couple.jpg?v=2',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/images/couple.jpg?v=2',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
