import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../style/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Rosiconi" />
    <Navbar />
    <main>{children}</main>
  </div>
)

export default TemplateWrapper
