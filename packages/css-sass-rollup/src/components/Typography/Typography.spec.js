import React from 'react'
import renderer from 'react-test-renderer'

import { BodyText, Heading1 } from './index'

describe('Typography', () => {
  describe('BodyText', () => {
    it('Base component works correctly', () => {
      expect(
        renderer.create(<BodyText>Container</BodyText>).toJSON()
      ).toMatchSnapshot()
    })

    it('Text align works with left, center and right', () => {
      expect(
        renderer.create(<BodyText align="left">Left aligned</BodyText>).toJSON()
      ).toMatchSnapshot()
      expect(
        renderer
          .create(<BodyText align="center">Cener aligned</BodyText>)
          .toJSON()
      ).toMatchSnapshot()
      expect(
        renderer
          .create(<BodyText align="right">Right aligned</BodyText>)
          .toJSON()
      ).toMatchSnapshot()
    })
  })

  describe('Heading1', () => {
    it('Base component works correctly', () => {
      expect(
        renderer.create(<Heading1>Column</Heading1>).toJSON()
      ).toMatchSnapshot()
    })

    it('Text align works with left, center and right ', () => {
      expect(
        renderer.create(<Heading1 align="left">Left align</Heading1>).toJSON()
      ).toMatchSnapshot()
      expect(
        renderer
          .create(<Heading1 align="center">Center align</Heading1>)
          .toJSON()
      ).toMatchSnapshot()
      expect(
        renderer.create(<Heading1 align="right">Right align</Heading1>).toJSON()
      ).toMatchSnapshot()
    })
  })
})
