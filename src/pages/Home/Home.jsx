import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

export default function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1/>

        {/* Home Section About Page */}
        <Section2/>

        {/* Home Section Menu Page */}
        <Section3/>

        {/* Home Section 4 Promotion */}
        <Section4/>

        {/* Home Section 5 Shop*/}
        <Section5/>

        {/* Home Section 6 */}
        <Section6/>

        {/* Home Section 7*/}
        <Section7/>

      </Layout>
    </>
    
  )
}
