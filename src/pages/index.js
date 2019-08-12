import React, { useState } from "react"

import Layout from "../components/layout"
import Video from "../components/Video"
import Hero from "../components/Hero"
import Content from "../components/Content"

const IndexPage = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  return (
    <Layout isHeaderFixed={isHeaderFixed}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}>
        <Video />
      </div>
      <main
        style={{
          position: 'relative'
        }}>
        <Hero />
        <Content setIsHeaderFixed={setIsHeaderFixed} />
      </main>
    </Layout>
  )
}

export default IndexPage
