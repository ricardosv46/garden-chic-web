const ConfigSeo = {
  title: 'Next SEO',
  titleTemplate: '%s - Next SEO',
  description: 'Next SEO',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://next-seo.com',
    site_name: 'Next SEO',
    images: [
      {
        url: 'https://next-seo.com/static/images/next-seo-logo.png',
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
    site: 'https://next-seo.com',
  },
  microsoft: {
    handle: '123456789',
    site: 'https://next-seo.com',
  },

}
export default ConfigSeo;