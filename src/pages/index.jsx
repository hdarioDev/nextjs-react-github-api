
import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import AppLayout from '@components/Layout'
import Link from 'next/link'
import Dashboard from '@components/Dashboard'

export default function Home({ children }) {

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    console.log("event context isDark ", isDark);
    if (!isDark) {

      document.body.classList.add('white-content')
    } else {
      document.body.classList.remove('white-content');
    }


  }, [isDark])

  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>

  )
}
