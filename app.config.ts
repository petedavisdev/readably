export default defineAppConfig({
  alpine: {
    title: 'Readably',
    description: 'A blog about code readability',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Readably' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://www.github.com/petedavisdev/readably',

        text: 'Readably'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'nuxtlabs',
      instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})