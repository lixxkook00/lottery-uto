import React from 'react'
import './Rule.scss'

import Ticket from '../Ticket'

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
            active : true
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
            active : true
        },
    ],
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
            active : true
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
        {
            value: "",
            active : false
        },
    ],
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
            active : true
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : false
        },
    ],
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
            active : false
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : false
        },
    ],
    [
        {
            value: "",
            active : true
        },
        {
            value:"",
            active : false
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : false
        },
        {
            value: "",
            active : false
        },
    ],
]

export default function Rule() {
  return (
    <div className="rule mb-40">
        {/* table */}
        <table className="ui-table">
            <thead>
                <tr>
                    <th>Matches</th>
                    <th>Numbers</th>
                    <th>Prize</th>
                </tr>
            </thead>
            <tbody>
                <tr className="big-prize">
                    <td className="matches">
                        <span className="green-text">
                            5 NUMBERS
                            <br />
                            JACKPOT BALL
                        </span>
                    </td>
                    <td>
                        <Ticket list={listBall[0]}/>
                    </td>

                    <td className="prize">
                        <span className="green-text">
                            $ 100,000
                            <div className="star-img"></div>
                        </span>
                    </td>
                </tr>
                <tr className="normal-prize">
                    <td className="matches white-text">5 numbers</td>
                    <td>
                        <Ticket list={listBall[1]}/>
                    </td>
                    <td className="prize">$ 3,000</td>
                </tr>
                <tr className="normal-prize">
                    <td className="matches white-text">4 numbers</td>
                    <td>
                        <Ticket list={listBall[2]}/>
                    </td>
                    <td className="prize">$ 20</td>
                </tr>
                <tr className="normal-prize">
                    <td className="matches white-text">3 numbers</td>
                    <td>
                        <Ticket list={listBall[3]}/>
                    </td>
                    <td className="prize">$ 1</td>
                </tr>
                <tr className="normal-prize">
                    <td className="matches white-text">2 numbers</td>
                    <td>
                        <Ticket list={listBall[4]}/>
                    </td>
                    <td className="prize">
                        <img className="bonus" src="/assets/img/bonus.4dbbf756.png" alt="" />
                        <span className="op-text">
                            +1 ticket
                        </span>
                    </td>
                </tr>
               <tr className="normal-prize">
                    <td className="matches">1 numbers</td>
                    <td>
                        <Ticket list={listBall[5]}/>
                    </td>
                    <td className="prize">
                        <img className="bonus" src="/assets/img/bonus.4dbbf756.png" alt="" />
                        <span className="op-text">
                            +1 ticket
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

        {/* text */}

        <div className="sub-title mt-40">
            Lottery Instructions:
        </div>
        <div className="rule-text op-text">
            A provably fair algorithm is used to draw the lottery prizes. <br />
            Prizes are drawn at 15:00 UTC+0 everyday. <br />
            You can buy a ticket for $0.1. The sale of tickets stop at 14:55 UTC+0 everyday. <br />
            The player chooses six numbers for each ticket, the first five are from 1 to 36, and the last one is from 1 to 10. <br />
            You can choose numbers manually or automatically. <br />
            If you have BCL, you can use BCL to redeem Tickets. <br />
            Each draw produces six numbers. <br />
            The more numbers you match in the first five numbers, greater prize you will win. <br />
        </div>

        <div className="sub-title mt-40">
            Winning Prize Details:
        </div>
        <div className="rule-text op-text">
            All six numbers matched: $100,000 prize. In case you are not the only winner, you may need to share the prize equally with others. <br />
            Five numbers matched, and the sixth number is missed: Each ticket gets a $3,000 prize. <br />
            Four of the first 5 numbers matched: Each ticket gets a $20 prize. <br />
            Three of the first 5 numbers matched: Each ticket gets a $1 prize.  <br />
            If all six numbers are missed, the lottery will be reserved for free, and continue participating in the next day's draw. <br />
        </div>
    </div>
  )
}
