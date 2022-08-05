import React from 'react';
import s from './Line.module.css'
import Cell from "./Cell";

type LinePropsType = {
    positionY: number
}

const Line = (props: LinePropsType) => {
    return (
        <div className={s.line}>
            <Cell x={1} y={props.positionY}/>
            <Cell x={2} y={props.positionY}/>
            <Cell x={3} y={props.positionY}/>
            <Cell x={4} y={props.positionY}/>
            <Cell x={5} y={props.positionY}/>
            <Cell x={6} y={props.positionY}/>
            <Cell x={7} y={props.positionY}/>
            <Cell x={8} y={props.positionY}/>
        </div>
    );
};

export default Line;