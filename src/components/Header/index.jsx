import React from 'react'
import './Header.scss'
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
          <div className="header-left-logo">
            <img src="./assets/img/logo.b7a2c469.png" alt="" />
          </div>
          <div className="header-left-input">
            <input type="text" placeholder="Game name | Provider | Category Tag"/>
          </div>
      </div>
      <div className="header-right">
        {/* wallet */}
        <div className="header-right-wallet">
          <div className="header-right-wallet-content">
                BTC
                0.00000000
          </div>
          <div className="header-right-wallet-button">
              <span>
                <i className="fa-solid fa-wallet"></i>
                Wallet
              </span>
          </div>
        </div>

        {/* infor user */}
        <div className="header-right-user">
          <div className="header-right-user-avt">
            <img src="./assets/img/head2_s.png" alt="" />
          </div>
          <div className="header-right-user-button">
            <i className="fa-solid fa-circle-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
