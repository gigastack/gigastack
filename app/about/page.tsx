import Hero from '@/components/About/Hero'
import Peculiar from '@/components/About/Peculiar'
import Projects from '@/components/About/Projects'
import Vision from '@/components/About/Vision'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <Hero />
      <Projects />
      <Vision />
      <Peculiar />
    </>
  )
}

export default About