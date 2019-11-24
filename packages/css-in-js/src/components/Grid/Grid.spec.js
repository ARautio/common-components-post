import React from 'react'
import renderer from 'react-test-renderer'

import * as Grid from './index'

describe('Grid', () => {
  describe('Container', () => {
    it('Base component works correctly', () => {
      expect(
        renderer.create(<Grid.Container>Container</Grid.Container>).toJSON()
      ).toMatchSnapshot()
    })
  })

  describe('Column', () => {
    it('Base component works correctly', () => {
      expect(
        renderer.create(<Grid.Column>Column</Grid.Column>).toJSON()
      ).toMatchSnapshot()
    })

    it('Grids are working', () => {
      expect(
        renderer
          .create(<Grid.Column grid={6}>6 Grid Column</Grid.Column>)
          .toJSON()
      ).toMatchSnapshot()
    })
  })
})
