import * as React from 'react'

import Accordion from '../src/Accordion/Accordion'

export default { title: 'Accordion' }

export const AccordionDown = () => {
  return ['First', 'Second', 'Third'].map((item, index) => (
    <Accordion key={index} index={index} expanded={false}>
      <div>{item}</div>
    </Accordion>
  ))
}

export const AccordionSelectected = () => {
  return ['First', 'Second', 'Third'].map((item, index) => (
    <Accordion key={index} index={index} expanded={1}>
      <div>{item}</div>
    </Accordion>
  ))
}

const AccordionControlled = () => {
  const [selected, setSelected] = React.useState(0)
  return ['First', 'Second', 'Third'].map((item, index) => (
    <Accordion
      key={index}
      index={index}
      expanded={selected}
      setExpanded={setSelected}
    >
      <div>{item}</div>
    </Accordion>
  ))
}

export const AccordionDynamic = () => {
  return <AccordionControlled />
}
