import React from 'react'
import './Ticket.scss'

const listBall = [
    // [
    //     {
    //         value: "13",
    //         active : true
    //     },
    //     {
    //         value: "8",
    //         active : true
    //     },
    //     {
    //         value: "23",
    //         active : false
    //     },
    //     {
    //         value: "1",
    //         active : true
    //     },
    //     {
    //         value: "25",
    //         active : true
    //     },
    //     {
    //         value: "25",
    //         active : false
    //     },
    // ],
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
    {
        listBall.map((ballList,index) => {
            return (
                <div class="vebodtg draw">
                {
                    ballList.map((ball,index) => {
                        return (
                            <div class={`ball ${ball.active === true ? "active" : ""}`}>
                                <div>{ball.value}</div>
                            </div>
                        )
                    })
                }
                </div>
            )
        })
    }
    </div> 
    
  )
}
