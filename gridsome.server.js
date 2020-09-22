// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type Code {
        id: ID!
        code: String
      }

      type Home implements Node {
        id: ID!
        title: String
        heroImage: Image
        heroText: Code
        section1: Code
        section2: Code
        section3: Code
        section4: Code
        section5: Code
        section6: Code
      }

      type Blog implements Node {
        id: ID!
        title: String
        heroImage: Image
        body: String
      }

      type Post implements Node {
        id: ID!
        title: String
        slug: String
        date: Date
        featuredImage: Image
        body: String
      }

      type Pages implements Node {
        id: ID!
        title: String
        parent: String
        slug: String
        heroImage: Image
        body: String
      }

      type SubPages implements Node {
        id: ID!
        title: String
        parent: String
        slug: String
        heroImage: Image
        body: String
      }
    `)
  })
}
