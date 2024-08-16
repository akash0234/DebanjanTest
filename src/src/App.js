
import "./App.css"
import React from 'react'
import Banner from './component/Banner'
import Layout from "./component/Layout"

const App = () => {
  return (
    <div>
      <Layout>
        <Banner/>
      </Layout>
    </div>
  )
}

export default App