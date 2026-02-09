import React from 'react'
import StateGov from './StateGov'

const IndianGov = () => {
    const money = 100;
  return (
    <div>
      <h1>IndianGov</h1>
      <StateGov m={money} />
    </div>
  )
}

export default IndianGov
