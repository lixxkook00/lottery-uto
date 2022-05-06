import React from 'react'
import './MyTicket.scss'

export default function MyTicket() {
  return (
    <div className="my-ticket">
        <div className="tips white-text">You have no ticket!</div>
        <button className="ui-button s-conic4">
            <div className="button-inner">Buy ticket now</div>
        </button>
    </div>
  )
}
