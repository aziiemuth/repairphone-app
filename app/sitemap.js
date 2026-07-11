export default function sitemap() {
  const baseUrl = 'https://repair.aziiemuth.my.id';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          'id-ID': baseUrl,
        },
      },
    },
  ];
}
