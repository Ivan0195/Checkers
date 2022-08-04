import React from 'react';
import s from './Cell.module.css'
import {Checkers} from "../store/store";
import {observer} from "mobx-react-lite";

export type cellPropsType = {
    x: number
    y: number
}

const Cell = observer((props: cellPropsType) => {

        const whiteChecker = 'https://pngimage.net/wp-content/uploads/2018/06/%D1%88%D0%B0%D1%88%D0%BA%D0%B0-png-6.png'
        const blackChecker = 'https://pngimage.net/wp-content/uploads/2018/06/%D1%88%D0%B0%D1%88%D0%BA%D0%B0-png-5.png'

        const check = new Checkers().checkers.map((c) => {
            if (c.positionX === props.x) {
                if (c.positionY === props.y) {
                    return c.color === 'white' ? <img src={whiteChecker} className={s.image}/> :
                        <img src={blackChecker} className={s.image}/>
                }
            } else return ''
        })

        const color = () => {
            if (props.y % 2 !== 0) {
                return props.x % 2 !== 0 ? 'black' : 'white'
            } else {
                return props.x % 2 !== 0 ? 'white' : 'black'
            }
        }

        return (
            <div className={color() === 'white' ? s.white : s.black}>
                {check}
            </div>
        );
    })
;

export default Cell;