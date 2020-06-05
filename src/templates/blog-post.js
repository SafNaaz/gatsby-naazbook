import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Link to="/blog">Go Back</Link>
      <br />
      <br />
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.keywords}</p>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Link to="/blog">Go Back</Link>
      <br />
      <br />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        keywords
        description
        date
      }
    }
  }
`
