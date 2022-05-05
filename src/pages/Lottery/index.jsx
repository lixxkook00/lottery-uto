import React from 'react'

import './Lottery.scss'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CartPlay from '../../components/CartPlay'
import Rule from '../../components/Rule'

const cartPlayList = [
  {
    img: "buyticket.95472b7d.png",
    title:"BUY TICKETS",
    decs:"Buy ticket with $0.1, and choose numbers for ticket.",
    color:"linear-gradient(146deg,#931792 -80%,#18191c 30%)"
  },
  {
    img: "draw.e92398c8.png",
    title:"WAIT FOR THE DRAW",
    decs:"Wait for the draw at 15:00 UTC+0 daily.",
    color:"linear-gradient(146deg,#0ae438 -80%,#18191c 30%)"
  },
  {
    img: "checkprizes.4d0b07fb.png",
    title:"CHECK FOR PRIZES",
    decs:"Once the draw is over, come back to this page and check your prize",
    color:"linear-gradient(146deg,#ff6060 -80%,#18191c 30%)"
  },
]

export default function Lottery() {
  return (
    <div className="container">
      <Header/>

      <Banner/>

      {/* HOW TO PLAY */}
      <div className="title mt-40">
        HOW TO PLAY
      </div>
      <div className="row mb-40">
        {
          cartPlayList.map((cart,index) => {
            return (
              <CartPlay cart={cart}/> 
            )
          })
        }
      </div>

      {/* RULE */}
      <div className="title">
        COCO LOTTERY RULE
      </div>
      <Rule />

      <div className="lottery">
      </div>
    </div>
  )
}
