import React from 'react'
import { Link } from 'gatsby'
import { ArticleRule } from '../components/ArticleRule'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <ArticleRule />
  </Layout>
)

export default SecondPage
