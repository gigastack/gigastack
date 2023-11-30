import Hero from '@/components/About/Hero'
import Peculiar from '@/components/About/Peculiar'
import Projects from '@/components/About/Projects'
import Vision from '@/components/About/Vision'
import PageWrapper from '@/components/PageWrapper'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <PageWrapper>
      <Hero />
      <Projects />
      <Vision />
      <Peculiar />
    </PageWrapper>
  )
}

export default About