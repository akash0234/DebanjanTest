
import "./App.css"
import React from 'react'
import Banner from './component/Banner'
import Layout from "./component/Layout"
import Counter from "./component/Counter"
const App = () => {
  return (
    <div>
      <Layout>
        <Banner/>
        <Counter/>
      </Layout>
    </div>
  )
}

export default App