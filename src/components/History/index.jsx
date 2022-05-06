import React from 'react'
import './History.scss'

import TicketWin from '../TicketWin'
import Ticket from '../Ticket'

const listBall = [
    [
        {
            value: "1",
            active : true
        },
        {
            value:"8",
            active : true
        },
        {
            value: "0",
            active : true
        },
        {
            value: "8",
            active : true
        },
        {
            value: "8",
            active : true
        },
        {
            value: "8",
            active : true
        },
    ],
]

export default function History() {
  return (
    <div className="history">
        {/* control */}
        <div className="v1tetjd0 gameno-check">
            <div className="">
                <div className="game-no white-text">Game ID</div>
            </div>
            <button className="fairness">
                <i className="fa-solid fa-timeline white-text"></i>
            </button>
        </div>

        {/* Win Ticket */}
        <div className="win-ticket">
            <TicketWin list={listBall[0]}/>
        </div>

        {/* table */}
        <div className="history-wrap">
            {/* table top */}
            <div className="top">
                <div className="sub-tit">Winners List</div>
                <div className="sub-txt">Total tickets sold this round <span className='white-text'>47147</span></div>
            </div>

            {/* table content */}
            <table className="ui-table">
                <thead>
                    <tr>
                        <th>Winner Name</th>
                        <th className="hnums">Numbers</th>
                        <th>Matches</th>
                        <th>Prize</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="u1ethaid user-info" href="/user/profile/3012817">
                                <img className="avatar" src="/assets/img/head2_s.png" alt="" />
                                <div className="name white-text">Staxwell84</div>
                            </div>
                        </td>
                        <td>
                            <div className="nums-wrap">
                            <div className="nums-inner">
                                <Ticket list={listBall[0]}/>
                                <p className="quantity">x 1</p>
                            </div>
                            </div>
                        </td>
                        <td className="res">4</td>
                        <td className="el">
                            <span className="green-word green-text">
                                $ 20
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="u1ethaid user-info" href="/user/profile/3944032">
                             <img className="avatar" src="/assets/img/head3_s.png" alt="" />
                            <div className="name white-text">Btkafnblfwb</div>
                            </div>
                        </td>
                        <td>
                            <div className="nums-wrap">
                            <div className="nums-inner">
                                <Ticket list={listBall[0]}/>
                                <p className="quantity">x 1</p>
                            </div>
                            </div>
                        </td>
                        <td className="res">4</td>
                        <td className="el">
                            <span className="green-word green-text">
                                $ 20
                            </span>
                        </td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
            {/* more-button */}
            <div class="vovss2v mb-20">
                <button class="ui-button button-normal hide-show">
                    <div class="button-inner">more</div>
                </button>
            </div>
    </div>
  )
}
