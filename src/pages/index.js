import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import BlogDescription from '../components/atoms/blog-description/blog-description';

const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IndexPage = () => {
  return (
    <Layout>
      <RowLayout>
        <BlogDescription />
        {/* <div style={{ width: '500px' }}></div> */}
      </RowLayout>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
