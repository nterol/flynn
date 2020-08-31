import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
// import Image from '../components/image'
import { ArticleRule } from '../components/ArticleRule'

const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IndexPage = () => (
  <Layout>
    <RowLayout>
      <div style={{ width: '500px' }}>
        {/* <Image /> */}
        <ArticleRule />
      </div>
    </RowLayout>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
