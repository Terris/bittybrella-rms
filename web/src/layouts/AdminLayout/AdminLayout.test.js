import { render, cleanup } from '@testing-library/react'

import AdminLayout from './AdminLayout'

describe('AdminLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AdminLayout />)
    }).not.toThrow()
  })
})
