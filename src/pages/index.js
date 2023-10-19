import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.aboutData.nodes
  const palette = data.paletteData.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article id={title}>
                <header>
                  <h2>{title}</h2>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.html,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>

      <ol style={{ listStyle: `none` }}>
        {palette.map(palette => {
          const main = palette.frontmatter.main
          const secondary = palette.frontmatter.secondary
          const text = palette.frontmatter.text
          const sectionStyle = {
            backgroundColor: main,
            borderColor: secondary,
            color: text
          }

          return (
            <li>  
              <div className="m-4 p-4 border-4" style={sectionStyle}>Test</div>
            </li>
          )
        })}
      </ol>

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
    aboutData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/about/" } }
    ) {
      nodes {
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
        html
      }
    }
    paletteData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/palette/" } }
    ) {
      nodes {
        frontmatter {
          main
          secondary
          text
        }
      }
    }
  }
`;

