import dynamic from 'next/dynamic'

import Page from '@/components/page'
import Main from '@/components/main'

const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
})

const Home = () => (
  <Page>
    <Main className="md:flex">
      <h1 className="absolute z-50 bottom-4 right-4">leaflet demo</h1>
      <Map />
    </Main>
  </Page>
)

export default Home
