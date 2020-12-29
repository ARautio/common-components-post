import * as React from 'react'

const Accordion = ({ index, expanded, setExpanded, children }) => {
  const isOpen = index === expanded

  return (
    <React.Fragment>
      <div
        style={{
          padding: '12px',
          margin: '2px',
          cursor: 'pointer',
          backgroundColor: isOpen ? '#5BE6C3' : 'white',
          borderRadius: '6px',
        }}
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        {children}
      </div>
      {isOpen ? <div style={{ padding: '6px' }}>Expanded</div> : null}
    </React.Fragment>
  )
}

export default Accordion
