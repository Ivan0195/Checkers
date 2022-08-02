import { makeAutoObservable } from "mobx"

export type GlobalStateType = {
    step: 'black' | 'white'
}

export type ChekerBioType = {
    id: string,
    isRoyal: boolean,
    positionX: number,
    positionY: number,
    stillInGame: boolean
}

export type checkersStateType = ChekerBioType[]


export class GlobalState {

    globalState: GlobalStateType = {step: 'white'}

    constructor() {
        makeAutoObservable(this)
    }

    changeStep() {
        this.globalState.step === "white" ? this.globalState.step = 'black' : this.globalState.step = 'white'
    }
}

const checkesMaker = (id:string, positionX:number, positionY:number) => ({
    id,
    isRoyal: false,
    positionX,
    positionY,
    stillInGame: true
})

export class Checkers {

    checkers:checkersStateType = [
            checkesMaker('black1',8,8),
            checkesMaker('black2',6,8),
            checkesMaker('black3',4,8),
            checkesMaker('black4',2,8),
            checkesMaker('black5',1,7),
            checkesMaker('black6',3,7),
            checkesMaker('black7',5,7),
            checkesMaker('black8',7,7),
            checkesMaker('black9',8,6),
            checkesMaker('black10',6,6),
            checkesMaker('black11',4,6),
            checkesMaker('black12',2,6),
            checkesMaker('white1',1,1),
            checkesMaker('white2',3,1),
            checkesMaker('white3',5,1),
            checkesMaker('white4',7,1),
            checkesMaker('white5',2,2),
            checkesMaker('white6',4,2),
            checkesMaker('white7',6,2),
            checkesMaker('white8',8,2),
            checkesMaker('white9',1,3),
            checkesMaker('white10',3,3),
            checkesMaker('white11',5,3),
            checkesMaker('white12',7,3),
        ]

    constructor() {
        makeAutoObservable(this)
    }
}