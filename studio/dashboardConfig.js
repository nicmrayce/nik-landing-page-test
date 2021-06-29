export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60db58a32574d62774c48a0a',
                  title: 'Sanity Studio',
                  name: 'nik-landing-page-test-studio',
                  apiId: 'ef15bbcd-e2dc-4866-b27b-9149fe7d653d'
                },
                {
                  buildHookId: '60db58a3bf463b22351a25a0',
                  title: 'Landing pages Website',
                  name: 'nik-landing-page-test',
                  apiId: '576717c7-cc4b-49df-9347-05c4337cc179'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicmrayce/nik-landing-page-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nik-landing-page-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
