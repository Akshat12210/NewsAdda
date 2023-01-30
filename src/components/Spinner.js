import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{marginTop:"100px"}}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner