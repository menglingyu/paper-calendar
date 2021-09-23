import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, take, takeWhile, takeUntil, skip } from 'rxjs/operators'
import dayjs from 'dayjs'
import Toast from './components/Toast/Toast.min.js'
import { getColorByBlocks } from './helper.js';




export const calendarEvents$ = new BehaviorSubject([])
export const editData$ = new BehaviorSubject(null)
export const selectedDate$ = new BehaviorSubject(dayjs(Date.now()).format('YYYY-MM-DD'))

export const allCalendarEvents$ = new BehaviorSubject({})
export const allEditData$ = new BehaviorSubject(null)






export const getAllEditDataFromStorage = () => {

    const dataStr = localStorage.getItem(`allEditData`)


    if (dataStr) {
        const parseData = JSON.parse(dataStr)
        editData$.next(parseData[`edit-${selectedDate$.value}`])
        allEditData$.next(parseData)
        return parseData
    }
    return createInitEditData()
}


export function handleSetEditDataToCache() {
    const selectedDate = selectedDate$.value
    const editData = editData$.value
    const dateData = Object.assign({}, { ...allEditData$.value }, {
        [`edit-${selectedDate}`]: editData
    })

    allEditData$.next(dateData)

    localStorage.setItem('allEditData', JSON.stringify(dateData) || '')
}

export const setFullCalendar = (outputData) => {
    if (!outputData) return
    let evens = []
    Object.entries(outputData).forEach(([key, { blocks }]) => {
        blocks.forEach(({ type, data: { items } }) => {
            if (type === "checklist") {
                items.forEach(({ text }) => {
                    evens.push({ title: text, start: key.slice(5), display: "list-item", })
                })


            }
        })

        console.log('getColorByBlocks(blocks)', getColorByBlocks(blocks));
        evens.push({
            display: 'background',
            start: key.slice(5),
            color: getColorByBlocks(blocks)
        })
    })
    // console.log('outputData', JSON.stringify(outputData));
    return evens

}


allEditData$.subscribe((data) => {
    console.log('allEditData$.', data);
    const list = setFullCalendar(data)

    calendarEvents$.next(list)

    // if (data) {
    //     editData$.next(data[`edit-${selectedDate}`])
    // }
})




selectedDate$.subscribe((selectedDate) => {
    debugger
    if (allEditData$.value) {

        editData$.next(allEditData$.value[`edit-${selectedDate}`])
    }

})

function createInitEditData() {
    return {
        blocks: []
    }
}




export function handleSetAllEditData(outputData) {

}

calendarEvents$.subscribe((data) => {
    console.warn('calendarEvents$:->', calendarEvents$.value);
})
editData$.subscribe((data) => {
    console.warn('editData$:->', editData$.value);
})
selectedDate$.subscribe((data) => {
    console.warn('selectedDate$:->', selectedDate$.value);
})
allCalendarEvents$.subscribe((data) => {
    console.warn('allCalendarEvents$:->', allCalendarEvents$.value);
})
allEditData$.subscribe((data) => {
    console.warn('allEditData$:->', allEditData$.value);
})