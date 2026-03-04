import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // Gatsby's optimized image processing plugins
    `gatsby-plugin-image`, // Main plugin for modern image components
    `gatsby-plugin-sharp`, // Image processing (resize, crop, optimize)
    `gatsby-transformer-sharp`, // Creates ImageSharp nodes for processing
    {
      // Configure filesystem source for images
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // Points to the images folder
      },
    },
  ],
}

export default config
