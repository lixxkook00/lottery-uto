import React from 'react'
import './TicketWin.scss'

export default function TicketWin({list}) {
  return (
    <div className="ticket-win">
        <div className="vebodtg win draw">
            <div className="numbers">
                {
                list.map((ball,index) => {
                    return (
                        <div 
                            key={index} 
                            className={
                                `ball 
                                ${ball.active === true ? "active" : ""}
                                ${index === 5 ? "jackpot-ball" : ""}
                                `}>
                            <div className="num">{ball.value}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div> 
  )
}
