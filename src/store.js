import { BehaviorSubject } from 'rxjs';
import { writable, } from 'svelte/store';
import dayjs from 'dayjs'


export const calendarEvents$ = writable(initData());

export const editData$ = new BehaviorSubject(null)
export const selectedDate$ = new BehaviorSubject(dayjs(Date.now()).format('YYYY-M-D'))




export const setFullCalendar = (outputData) => {
    let list = []

    outputData.blocks.filter(({ type }) => type === "checklist").reduce((prev, { data: { items } }) => {

        list = [...list, ...items.map(({ text }) => ({ title: text, start: new Date() }))]
    }, [])

    calendarEvents$.set(list)
}

export const getEditData = () => {

    const data = localStorage.getItem(`edit-${selectedDate$.value}`)
    if (data) {
        editData$.next(JSON.parse(data))
    }
}

export const setEditData = (outputData) => {
    editData$.next(outputData)
    if (outputData) {
        localStorage.setItem(`edit-${selectedDate$.value}`, JSON.stringify(outputData))
    }
}


editData$.subscribe((value) => {
    if (value) {
        setFullCalendar(value)
    }
})

calendarEvents$.subscribe((data) => {
    if (data) {
        localStorage.setItem('data', JSON.stringify(data))
    }

})


function initData() {
    try {
        const data = localStorage.getItem('data')

        console.log('data', data);
        return JSON.parse(data)
    } catch (error) {
        console.log('error', error);
        return []
    }
}