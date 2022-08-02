import React from 'react';
import s from './Cell.module.css'
import {Checkers} from "../store/store";

export type cellPropsType = {
    x: number
    y: number
}

const Cell = (props: cellPropsType) => {

    const checker = new Checkers()

    const check = checker.checkers.map(c => {
        if (c.positionX === props.x) {
            return c.positionY === props.y ? c.id.replace(/[^a-z]/g, '') : ''
        } else return ''
    })


    const color = () => {
        if (props.y % 2 !== 0) {
            return props.x % 2 !== 0 ? 'black' : 'white'
        } else {
            return props.x % 2 !== 0 ? 'white' : 'black'
        }
    }

    const img = () => {
        if (check[0] === 'white') {
            return 'https://pngimage.net/wp-content/uploads/2018/06/%D1%88%D0%B0%D1%88%D0%BA%D0%B0-png-6.png'
        }else{
            if (check[0] === 'black') {
                return 'https://pngimage.net/wp-content/uploads/2018/06/%D1%88%D0%B0%D1%88%D0%BA%D0%B0-png-5.png'
            }else return ''
        }
    }

    return (
        <div className={color() === 'white' ? s.white : s.black}>
            {img() ? <img src={img()} className={s.image}/> : ''}
        </div>
    );
}
;

export default Cell;