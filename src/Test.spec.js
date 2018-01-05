import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Test from './Test'

configure({adapter: new Adapter()})

test('test', () => {
  const component = shallow(<Test />)
	expect(component).toMatchSnapshot()
})
