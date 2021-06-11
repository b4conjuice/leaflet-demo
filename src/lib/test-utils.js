import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'

export * from '@testing-library/react'

// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------

const mockRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
}

export function render(ui, { wrapper, router, ...options } = {}) {
  if (!wrapper) {
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    )
  }

  return defaultRender(ui, { wrapper, ...options })
}
