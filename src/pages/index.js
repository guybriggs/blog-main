import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const aboutData = data.aboutData;
  
  return (
    <Layout location={location} title={siteTitle}>
      <About data={aboutData} />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    aboutData: markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
        mainColour
        secondaryColour
        textColour
        intro {
          title
          body
        }
      }
    }
  }
`;