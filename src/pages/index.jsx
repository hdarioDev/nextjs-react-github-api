
import AppLayout from '@components/Layout'
import Dashboard from '@components/Dashboard'

export default function Home({ children }) {

  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>

  )
}
