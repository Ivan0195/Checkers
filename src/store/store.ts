import {makeAutoObservable} from "mobx"

export type GlobalStateType = {
    step: 'black' | 'white'
    status: 'waitingForStep' | 'stepInProcess'
}

export type ChekerBioType = {
    id: string,
    color: 'black' | 'white',
    isRoyal: boolean,
    positionX: number,
    positionY: number,
    stillInGame: boolean
}

export type checkersStateType = ChekerBioType[]

export type stepDataType = {
    checkerId: string
}

//////////////////////Global
export class GlobalState {

    globalState: GlobalStateType = {
        step: 'white',
        status: "waitingForStep",
    }

    constructor() {
        makeAutoObservable(this)
    }

    changeStep() {
        this.globalState.step === "white" ? this.globalState.step = 'black' : this.globalState.step = 'white'
    }
}

/////////////Checkers

const checkesMaker = (id: string, positionX: number, positionY: number, color: 'black' | 'white') => ({
    id,
    color,
    isRoyal: false,
    positionX,
    positionY,
    stillInGame: true,
})

export class Checkers {

    checkers: checkersStateType = [
        checkesMaker('black1', 8, 8, 'black'),
        checkesMaker('black2', 6, 8, 'black'),
        checkesMaker('black3', 4, 8, 'black'),
        checkesMaker('black4', 2, 8, 'black'),
        checkesMaker('black5', 1, 7, 'black'),
        checkesMaker('black6', 3, 7, 'black'),
        checkesMaker('black7', 5, 7, 'black'),
        checkesMaker('black8', 7, 7, 'black'),
        checkesMaker('black9', 8, 6, 'black'),
        checkesMaker('black10', 6, 6, 'black'),
        checkesMaker('black11', 4, 6, 'black'),
        checkesMaker('black12', 2, 6, 'black'),
        checkesMaker('white1', 1, 1, 'white'),
        checkesMaker('white2', 3, 1, 'white'),
        checkesMaker('white3', 5, 1, 'white'),
        checkesMaker('white4', 7, 1, 'white'),
        checkesMaker('white5', 2, 2, 'white'),
        checkesMaker('white6', 4, 2, 'white'),
        checkesMaker('white7', 6, 2, 'white'),
        checkesMaker('white8', 8, 2, 'white'),
        checkesMaker('white9', 1, 3, 'white'),
        checkesMaker('white10', 3, 3, 'white'),
        checkesMaker('white11', 5, 3, 'white'),
        checkesMaker('white12', 7, 3, 'white'),
    ]

    stepData: stepDataType = {
        checkerId: 'someId'
    }

    constructor() {
        makeAutoObservable(this)
    }

    setCheckerForStepId(id: string) {
        this.stepData.checkerId = id
    }

    moveChecker(x: number, y: number) {
        const currentChecker = this.checkers.find(c => c.id === this.stepData.checkerId)
        if(currentChecker){
            currentChecker.positionX = x
            currentChecker.positionY = y
        }
    }
}