import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../components/App.context'
import DesktopLandingViewHero from '../components/HeroLanding/DesktopLandingViewHero'
import MobileLandingViewHero from '../components/HeroLanding/MobileLandingViewHero'
import Layout from '../components/TheLayout'

export default function Home() {
  // const [canonicalURL, setCanonicalURL] = useState( typeof window === 'undefined' ?
  // '' :
  // `${window.location.origin}/${window.location.pathname}`)
  const { pathname } = useRouter()
  const siteName = 'https://amromoorie.com'
  const canonicalURL = siteName + pathname

  const mobile = useContext(AppContext)

  return (
    <>
      <Head>
        <link rel='canonical' href={canonicalURL} />
      </Head>
      <Layout>
        {mobile ? <MobileLandingViewHero /> : <DesktopLandingViewHero />}
      </Layout>
    </>
  )
}
