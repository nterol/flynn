import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <main className="w-screen h-screen bg-blue-800 flex items-center place-content-center flex-col space-y-8">
      <h1 className="text-9xl font-bold text-white">404</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default NotFoundPage
