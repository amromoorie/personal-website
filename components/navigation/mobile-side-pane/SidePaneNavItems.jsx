import Link from 'next/link'
import { useRouter } from 'next/router'
import { links } from '../Nav.links.js'

export default function SidePaneNavItems() {
  const router = useRouter()
  return (
    <>
      <nav className='pt-[10rem] text-accent flex flex-col items-center text-2xl'>
        <ul className='space-y-10'>
          {links.map((item) => (
            <li
              key={item.key}
              className={`hover:underline ${router.pathname === item.link ? 'underline decoration-cool' : ''}`}
            >
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
