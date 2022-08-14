import React from 'react';
import s from './Cell.module.css'
import {Checkers} from "../store/store";
import {observer} from "mobx-react-lite";

export type cellPropsType = {
    x: number
    y: number
}

const Cell = observer((props: cellPropsType) => {

    const checkers = new Checkers()



        const check = checkers.checkers.map((c) => {
            if (c.positionX === props.x) {
                if (c.positionY === props.y) {
                    return c.color === 'white' ? <div className={s.checkerWhite}/> :
                        <div className={s.checkerBlack}/>
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
            <div className={color() === 'white' ? s.white : s.black} onClick={()=>checkers.moveChecker(props.x, props.y)}>
                {check}
            </div>
        );
    })
;

export default Cell;