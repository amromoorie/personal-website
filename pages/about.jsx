import Head from 'next/head'
import Intro from '../components/about/Intro'
import Childhood from '../components/about/Childhood'
import Devstart from '../components/about/Devstart'
import Postgraduation from '../components/about/Postgraduation'
import CoreValues from '../components/about/CoreValues'
import Techstack from '../components/about/Techstack'
import Layout from '../components/layout/TheLayout'

export default function About() {
  return (
    <>
      <Head>
        <title>amromoorie| Let&apos;s connect!</title>
      </Head>

      <Head>
        <meta
          property='og:description'
          content="Here's a summary about me. Let's get connected!"
          key='description'
        />
      </Head>
      <Layout>
        <article className='sm:max-w-4xl prose text-gray-500 space-y-10 ... sm:text-lg'>
          <h2 className='p-4 pt-5 italic text-4xl text-secondary opacity-50 text-right sm:mr-[5rem] lg:mr-[-5rem] xl:mr-[-16rem]'>
            Nice to meet you!
          </h2>

          <Intro />
          <Childhood />
          <Devstart />
          <Postgraduation />
          <CoreValues />
          <Techstack />
        </article>
      </Layout>
    </>
  )
}