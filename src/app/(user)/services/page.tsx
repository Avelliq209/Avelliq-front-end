import ServicesIndex from '@/modules/services'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: "Services - Avelliq",
  description: "One trusted place to find the support your household needs today and as life changes.",
}

const Home: NextPage = () => {

  return (
    <>
      <ServicesIndex />
    </>
  )
}

export default Home