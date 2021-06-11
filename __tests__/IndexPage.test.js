import { render } from '@/lib/test-utils'
import IndexPage from '@/pages/index'

it('renders index page', () => {
  const { getByText } = render(<IndexPage />)
  const title = getByText('leaflet demo')
  expect(title).toBeInTheDocument()
})
