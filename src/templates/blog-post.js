import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <script
          async
          src="https://demo.fewcents.co/static/js/paywall.js"
          id="fewcents_paywall"
          contentSelector={post.id}
        />
      </Helmet>
      <SEO title="BlogPost" />
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h6 style={{ color: "grey" }}>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h6>
      <div class={post.id} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
