import React from 'react';
import s from './Cell.module.css'
import {Checkers} from "../store/store";
import {observer} from "mobx-react";


export type cellPropsType = {
    x: number
    y: number
}

const Cell = observer((props: cellPropsType) => {

        const checkers = new Checkers()
        const onClickForChecker = (id: string) => {
            checkers.setCheckerForStepId(id)
        }
        const onClickForCell = () => {
            checkers.moveChecker()
        }

        const check = checkers.checkers.map((c) => {
            if (c.positionX === props.x) {
                if (c.positionY === props.y) {
                    return c.color === 'white' ? <div className={s.checkerWhite} onClick={(event) => {
                            event.stopPropagation()
                            onClickForChecker(c.id)
                        }}/> :
                        <div className={s.checkerBlack} onClick={(event) => {
                            event.stopPropagation()
                            onClickForChecker(c.id)
                        }}/>
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
            <div className={color() === 'white' ? s.white : s.black} onClick={onClickForCell}>
                {check}
            </div>
        );
    })
;

export default Cell;