export default function sitemap() {
  const baseUrl = 'https://kamranali-portfolio.netlify.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
