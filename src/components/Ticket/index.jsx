import React from 'react'
import './Ticket.scss'

const listBall = [
    [
        {
            value: "",
            active : true
        },
        {
            value:"",
            active : true
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : true
        },
        {
            value: "",
            active : true
        },
        {
            value: "",
            active : false
        },
    ],
]

export default function Ticket({list}) {
  return (

    <div className="ticket">
    
        <div className="vebodtg draw">
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
                        <div>{ball.value}</div>
                    </div>
                )
            })
        }
        </div>
    </div> 
    
  )
}
