import { render, cleanup } from '@testing-library/react'

import AdminPage from './AdminPage'

describe('AdminPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AdminPage />)
    }).not.toThrow()
  })
})
