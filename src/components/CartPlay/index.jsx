import React from 'react'
import './CartPlay.scss'

export default function CartPlay({cart}) {
  return (
    <div className="col-xl-4">
        <div className="cart" style={{backgroundImage:cart.color}}>
            <div className="cart-img">
                <img src={`./assets/img/${cart.img}`} alt="" />
            </div>
            <div className="cart-tit">
                {cart.title}
            </div>
            <div className="cart-sub">
                {cart.decs}
            </div>
        </div>
    </div>
  )
}
