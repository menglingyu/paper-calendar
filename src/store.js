import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, take, takeWhile, takeUntil } from 'rxjs/operators'
import dayjs from 'dayjs'
import Toast from './components/Toast/Toast.min.js'



const iniDataReady$ = new BehaviorSubject(false)
export const calendarEvents$ = new BehaviorSubject([])
export const editData$ = new BehaviorSubject(null)
export const selectedDate$ = new BehaviorSubject(dayjs(Date.now()).format('YYYY-M-D'))



// // TODO: 
// console.log = function () {
//     return new Toast({ message: JSON.stringify([...arguments]) });
// }





export const getEditDataFromStorage = () => {

    const dataStr = localStorage.getItem(`edit-${selectedDate$.value}`)
    if (dataStr) {
        const data = JSON.parse(dataStr)
        editData$.next(data)
        return data
    }
    return createInitEditData()
}

export const setFullCalendar = (outputData) => {
    if (!outputData) return
    let list = []
    outputData.blocks.filter(({ type }) => type === "checklist").reduce((prev, { data: { items } }) => {

        list = [...list, ...items.map(({ text }) => ({ title: text, start: new Date() }))]
    }, [])

    calendarEvents$.set(list)
}

function iniData(params) {
    getEditDataFromStorage()
    setFullCalendar()
}
iniData()

combineLatest([editData$, selectedDate$, iniDataReady$]).subscribe(([editData, selectedDate]) => {
    localStorage.setItem(`edit-${selectedDate}`, editData ? JSON.stringify(editData) : '')
})

function createInitEditData() {
    return {
        blocks: []
    }
}

function createInitcalendarEvents() {
    return []
}