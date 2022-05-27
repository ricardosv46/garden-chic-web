const ConfigSeo = {
  title: 'Garden Chic - Inicio',
  titleTemplate: '%s - Next SEO',
  description: 'Somos expertos en el cuidado de tu jardin.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://garden-chic-web.vercel.app',
    site_name: 'Next SEO',
    images: [
      {
        url: 'https://garden-chic-web.vercel.app/imgs/banner/banner__item1.jpg',
        width: 1200,
        height: 1200,
        alt: 'Next SEO',
      },
    ],
    image_size: '1200x1200',
  },
  twitter: {
    handle: '@next_seo',
    site: '@next_seo',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '123456789',
    lang: 'en_IE',
    type: 'website',
  },
  google: {
    handle: '123456789',
    site: 'https://garden-chic-web.vercel.app',
  },
  microsoft: {
    handle: '123456789',
    site: 'https://garden-chic-web.vercel.app',
  },

}
export default ConfigSeo;