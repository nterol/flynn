import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
// import Image from '../components/image'
// import { MusicTimeline } from '../components/MusicTimeline'
import {ArticleRule} from '../components/ArticleRule';

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
        {/* <ArticleRule /> */}
     <ArticleRule />
      </div>
      
      {/* <MusicTimeline /> */}
    </RowLayout>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
