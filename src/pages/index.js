import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const textcolour = post.frontmatter.textcolour
          const maincolour = post.frontmatter.maincolour

          const sectionStyle = {
            color: textcolour,
            backgroundColor: maincolour
          }

          return (
            <li key={post.fields.slug} style={sectionStyle}>
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
    allMarkdownRemark(sort: { frontmatter: { order: ASC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        html
        frontmatter {
          title
          textcolour
          maincolour
          secondarycolour
        }
      }
    }
  }
`
