
import "./App.css"
import React from 'react'
import Banner from './component/Banner'
import Layout from "./component/Layout"
import Batch from "./component/Batch"
// import Cities2 from "./component/Cities2"



const App = () => {
  return (
    <div>
      <Layout>
        <Banner/>
        <Batch/>
      </Layout>
    </div>
  )
}

export default App