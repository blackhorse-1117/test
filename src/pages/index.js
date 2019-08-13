import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ProductCard } from "../components/ProductCard";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery query={productsQuery}
      render={data => {
        return data.allMarkdownRemark.edges.map(product => (<ProductCard data={product} />))
      }} />
  </Layout>
)

export default IndexPage

const productsQuery = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            name
            image
            original_price
            discount_price
            orange_first
            orange_second
            delivery_time
            purchased
            available
            shipment
          }
        }
      }
    }
  }
`;
