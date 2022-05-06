import React, {useEffect,useState} from 'react'

import './Lottery.scss'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CartPlay from '../../components/CartPlay'
import Rule from '../../components/Rule'
import MyTicket from '../../components/MyTicket'
import MyWinning from '../../components/MyWinning'
import History from '../../components/History'
import Footer from '../../components/Footer'

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
  const [idActive,setIdActive] = useState(0)

  return (
    <div className="container">
      <Header/>

      <Banner/>

      {/* Control */}
      <div className="tabs-scroll mt-40">
        <div className="tabs-navs">
            <button onClick={() => setIdActive(0)} className="tabs-nav">My Ticket (0)</button>
            <button onClick={() => setIdActive(1)} className="tabs-nav">My Winnings</button>
            <button onClick={() => setIdActive(2)} className="tabs-nav is-active">History</button>
          <div className="bg" style={{left: `${idActive * 33.333}%`, right:`${(3-idActive-1) * 33.333}%`}}></div>
        </div>
      </div>

      <div className="tabs-view mt-40">
        {idActive === 0 && <MyTicket/>}
        {idActive === 1 && <MyWinning/>}
        {idActive === 2 && <History/>}
      </div>

      {/* HOW TO PLAY */}
      <div className="title mt-40">
        HOW TO PLAY
      </div>
      <div className="row mb-40">
        {
          cartPlayList.map((cart,index) => {
            return (
              <CartPlay key={index} cart={cart}/> 
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

      {/* BCL */}
      <div className="tabs-view">
        <div className="row padding-14">
          {/* left */}
          <div className="col-xl-6">
            {/* title */}
              <div className="title">
                What Is
                <span className="green-text">
                  BCL
                </span>
                ?
              </div>
            {/* content */}

            <span className="op-text pl-10">
              BCL (BC Lottery) is a token created by BC.GAME for players who love the Lottery. 
              You can use BCL to redeem lottery tickets in the Lottery at any time, 1 BCL = 1 lottery ticket.
            </span>

            <a className="green-text pl-10">
              Detail
            </a>
          </div>

          {/* right */}
          <div className="col-xl-6">
            <div class="right-wrap">
              <div class="g18qg53k">
                  <div class="bcl-balance">
                    <div class="label">Your BCL Balance:</div>
                    <div class="balance">0</div>
                  </div>
                  <div class="btn swap">Get more BCL</div>
                  <div class="btn">
                    <img src="/assets/img/award.47749612.png" />
                    Send Gift</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}
