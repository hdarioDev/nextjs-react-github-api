
import Image from 'next/image'
import AppLayout from '@components/Layout'
import Link from 'next/link'


export default function Home() {
  return (
    <AppLayout>
      <section>
        <h2>
          <Link href="/users">
            <a > Search Github username </a>
          </Link>
        </h2>
        <h2>
          <Link href="/projects">
            <a >Search Projects</a>
          </Link>
        </h2>
      </section>
    </AppLayout>
  )
}
