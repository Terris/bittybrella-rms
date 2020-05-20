import { render, cleanup } from '@testing-library/react'

import CoreLayout from './CoreLayout'

describe('CoreLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CoreLayout />)
    }).not.toThrow()
  })
})
