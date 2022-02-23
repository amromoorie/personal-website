import Line from '../micros/Line'
import ContactMe from '../micros/ContactMe'
import FlexCenter from '../micros/FlexCenter'
import AppHeading from '../micros/typography/AppHeading'
import Link from 'next/link'
import GoSocials from '../micros/GoSocials'
import Amrologo from '../micros/Amrologo'

export default function MobileLandingViewHero() {
  return (
    <main>
      <FlexCenter>
        <section className='shrink-0 space-y-3'>
          <Amrologo w={200} h={200} />
        </section>
      </FlexCenter>

      <section>
        <Line />
        <article className=' mt-5'>
          <h2 className='italic py-5 pr-1 text-4xl text-secondary opacity-50 text-right'>
            Nice to meet you!
          </h2>

          <p className='pl-5 pt-4 text-lg'>
            Hey, I am{' '}
            <strong className='text-important opacity-80'>
              Amr Abdelkamel
            </strong>
            . I&apos;m passionate about web development.
          </p>

          <h3 className='p-4 pt-5 text-lg'>
            Currently I&apos;m seeking opportunities as an entry position web
            developer{' '}
          </h3>
        </article>

        <article>
          <h2 className='pl-2 pt-5 text-3xl text-primary'>more about me?</h2>
          <Link href='/about'>
            <a>
              <h2 className='pt-2 pl-4 text-2xl text-important opacity-70 underline hover:text-cool'>
                take me to about page
              </h2>
            </a>
          </Link>
        </article>

        <article className='pt-7'>
          <AppHeading size='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='font-mono pl-5 pt-5 text-3xl italic text-gray-500'>
            reach me out on:
          </h3>
        </article>
      </section>

      <FlexCenter>
        <GoSocials />
      </FlexCenter>

      <Line />

      <section className='pt-5'>

        <article>
          {/* <h2 className='pl-2 text-4xl text-primary'>reach me on</h2> */}
          <div className='pl-4 pt-5'>
            <ContactMe />
          </div>
        </article>
      </section>

      <Line />
    </main>
  )
}