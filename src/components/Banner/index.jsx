import React from 'react'
import './Banner.scss'

export default function Banner() {
  return (
    <div className="banner">
        <div className="banner-wrap">
            <div className="banner-wrap-content">
                <div className="countdown">
                    <span>Next Draw in</span>
                    <h2>00h:00m:00s</h2>
                </div>
                <div className="btn-buy">
                    <div className="btn-buy-wrap">
                        <div className="btn-buy-title">
                            Buy Ticket
                        </div>
                        <div className="btn-buy-sub">
                            1 ticket for $0.1
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-decs">
            {/* winner */}
            <div className="banner-decs-winner">
                <span className="white-text">
                    Hkjkgmyogwb 
                </span>
                Bought 
                <span className="green-text">
                    5
                </span>
                lottery tickets
            </div>

            {/* total ticket sold */}
            <div className="banner-decs-sold">
                Don't miss your chance! 
                <span className="green-text">
                    42486
                </span> 
                tickets have been sold today!
            </div>
        </div>
    </div>
  )
}
