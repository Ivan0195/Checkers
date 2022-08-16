import {action, makeObservable, observable} from "mobx"

export type GlobalStateType = {
    step: 'black' | 'white'
    status: 'waitingForStep' | 'stepInProcess'
}

export type CheсkerBioType = {
    id: string,
    color: 'black' | 'white',
    isRoyal: boolean,
    positionX: number,
    positionY: number,
    stillInGame: boolean
}

export type checkersStateType = CheсkerBioType[]

export type stepDataType = {
    x: number
    y: number
    checkerId: string
}

/////////////Checkers

export class Checkers {

    globalState: GlobalStateType = {
        step: 'white',
        status: "waitingForStep",
    }

    checkers: checkersStateType = [
        {id: 'black1', color: 'black', isRoyal: false, positionX: 8, positionY: 8, stillInGame: true},
        {id: 'black2', color: 'black', isRoyal: false, positionX: 6, positionY: 8, stillInGame: true},
        {id: 'black3', color: 'black', isRoyal: false, positionX: 4, positionY: 8, stillInGame: true},
        {id: 'black4', color: 'black', isRoyal: false, positionX: 2, positionY: 8, stillInGame: true},
        {id: 'black5', color: 'black', isRoyal: false, positionX: 1, positionY: 7, stillInGame: true},
        {id: 'black6', color: 'black', isRoyal: false, positionX: 3, positionY: 7, stillInGame: true},
        {id: 'black7', color: 'black', isRoyal: false, positionX: 5, positionY: 7, stillInGame: true},
        {id: 'black8', color: 'black', isRoyal: false, positionX: 7, positionY: 7, stillInGame: true},
        {id: 'black9', color: 'black', isRoyal: false, positionX: 8, positionY: 6, stillInGame: true},
        {id: 'black10', color: 'black', isRoyal: false, positionX: 6, positionY: 6, stillInGame: true},
        {id: 'black11', color: 'black', isRoyal: false, positionX: 4, positionY: 6, stillInGame: true},
        {id: 'black12', color: 'black', isRoyal: false, positionX: 2, positionY: 6, stillInGame: true},
        {id: 'white1', color: 'white', isRoyal: false, positionX: 1, positionY: 1, stillInGame: true},
        {id: 'white2', color: 'white', isRoyal: false, positionX: 3, positionY: 1, stillInGame: true},
        {id: 'white3', color: 'white', isRoyal: false, positionX: 5, positionY: 1, stillInGame: true},
        {id: 'white4', color: 'white', isRoyal: false, positionX: 7, positionY: 1, stillInGame: true},
        {id: 'white5', color: 'white', isRoyal: false, positionX: 2, positionY: 2, stillInGame: true},
        {id: 'white6', color: 'white', isRoyal: false, positionX: 4, positionY: 2, stillInGame: true},
        {id: 'white7', color: 'white', isRoyal: false, positionX: 6, positionY: 2, stillInGame: true},
        {id: 'white8', color: 'white', isRoyal: false, positionX: 8, positionY: 2, stillInGame: true},
        {id: 'white9', color: 'white', isRoyal: false, positionX: 1, positionY: 3, stillInGame: true},
        {id: 'white10', color: 'white', isRoyal: false, positionX: 3, positionY: 3, stillInGame: true},
        {id: 'white11', color: 'white', isRoyal: false, positionX: 5, positionY: 3, stillInGame: true},
        {id: 'white12', color: 'white', isRoyal: false, positionX: 7, positionY: 3, stillInGame: true},
    ]

    stepData: stepDataType = {
        x: 0,
        y: 0,
        checkerId: 'white1'
    }

    constructor() {
        makeObservable(this, {
            globalState: observable,
            checkers: observable,
            stepData: observable,
            changeStep: action,
            setCheckerForStepId: action,
            setStepCoordinates: action,
            moveChecker: action
        })
    }

    changeStep() {
        this.globalState.step === "white" ? this.globalState.step = 'black' : this.globalState.step = 'white'
    }

    setCheckerForStepId(id: string) {

        console.log('setChecker')
        const currentChecker = this.checkers.find(c => c.id === id)
        if (currentChecker) {
            if (currentChecker.color === this.globalState.step) {
                this.stepData.checkerId = currentChecker.id
            } else {
                alert(`now is ${this.globalState.step} team step`)
            }
        }
    }

    setStepCoordinates(x: number, y: number) {
        this.stepData.x = x
        this.stepData.y = y
    }

    moveChecker() {
        const currentChecker = this.checkers.findIndex(c => c.id === this.stepData.checkerId)
        const differenceX = this.stepData.x - this.checkers[currentChecker].positionX
        const differenceY = this.stepData.y - this.checkers[currentChecker].positionY
        const isCellBusy = this.checkers.find(checker => checker.positionX === this.stepData.x && checker.positionY === this.stepData.y)
        if (this.checkers[currentChecker].color === 'white') {
            if (Math.abs(differenceX) === 1 && differenceY === 1 && !isCellBusy) {
                this.checkers[currentChecker].positionY = this.stepData.y
                this.checkers[currentChecker].positionX = this.stepData.x
                this.globalState.step = 'black'
                return this.checkers[currentChecker].positionY === 8 ? this.checkers[currentChecker].isRoyal = true : ''
            } else {
                alert('wrong cell')
            }
        } else {
            if (Math.abs(differenceX) === 1 && differenceY === -1 && !isCellBusy) {
                this.checkers[currentChecker].positionY = this.stepData.y
                this.checkers[currentChecker].positionX = this.stepData.x
                this.globalState.step = 'white'
                return this.checkers[currentChecker].positionY === 1 ? this.checkers[currentChecker].isRoyal = true : ''
            } else {
                alert('your step is too far')
            }
        }
    }
}

export const CheckersState = new Checkers()