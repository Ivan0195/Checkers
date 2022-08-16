import React from 'react';
import s from './Cell.module.css'
import {Checkers, CheckersState} from "../store/store";
import {observer} from "mobx-react";


export type cellPropsType = {
    x: number
    y: number
}

const Cell = observer((props: cellPropsType) => {

        const checkers = CheckersState
        const onClickForChecker = (id: string) => {
            checkers.setCheckerForStepId(id)
        }
        const onClickForCell = () => {
           if(color()==='black'){
               checkers.setStepCoordinates(props.x, props.y)
               checkers.moveChecker()
           }else{
               alert('choose only black cells')
           }
        }

        const check = checkers.checkers.map(c => {
            if (c.positionX === props.x) {
                if (c.positionY === props.y) {
                    return c.color === 'white' ? <div key={c.id} className={c.isRoyal ? s.checkerWhiteRoyal : s.checkerWhite} onClick={(event) => {
                            event.stopPropagation()
                            onClickForChecker(c.id)
                        }}/> :
                        <div key={c.id} className={c.isRoyal ? s.checkerBlackRoyal : s.checkerBlack} onClick={(event) => {
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