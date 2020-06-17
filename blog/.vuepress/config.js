module.exports = {
  title: 'mrsessions blog',
  description: 'This is a blog site built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
// codepen
// codesandbox
// facebook
// github
// gitlab
// instagram
// linkedin
// mail
// messenger
// music
// phone
// twitter
// video
// web
// youtube
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/mrsessionsit/',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/matt_sessions',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://www.privacypolicies.com/generic/'
          // link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2020-present mrsessions.com',
          link: '',
        },
      ],
    },
    comment: {
      service: 'disqus',
      shortname: 'blog-mrsessions-com',
    },
  },
  // plugins: {
  //   '@vssue/vuepress-plugin-vssue': {
  //     // set `platform` rather than `api`
  //     platform: 'github',

  //     // all other options of Vssue are allowed
  //     owner: 'mrsessions',
  //     repo: 'mrsessionsblog',
  //     clientId: '6bbd0914809cb31ffab3',
  //     clientSecret: '756a0d167583e7d6dbd03486287d800ec5bc6e32',
  //   },
  // },
}
