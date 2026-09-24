import HomeIndex from '@/modules/home'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: "Home - Avelliq",
  description: "Connect with verified professionals for childcare, senior care, housekeeping, pet care, concierge services, and more.",
}

const Home: NextPage = () => {

  return (
    <>
      <HomeIndex />
    </>
  )
}

export default Home