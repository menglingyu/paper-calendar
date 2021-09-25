<script>
    import FullCalendar, { Draggable } from "svelte-fullcalendar";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import interactionPlugin from "@fullcalendar/interaction"; // needed for dateClick
    import { calendarEvents$, selectedDate$ } from "../../store";
    import { getColor } from "../../helper";

    let options = {
        dateClick: handleDateClick,
        droppable: true,
        editable: true,
        initialView: "dayGridMonth",
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        // headerToolbar: {
        //     left: "prev,next today",
        //     center: "title",
        //     right: "dayGridMonth,timeGridWeek,timeGridDay",
        // },
        weekends: true,
        height: '100%'
    };
    let calendarComponentRef;
    $: options = { ...options, events: $calendarEvents$ };

    function toggleWeekends() {
        options.weekends = !options.weekends;
        options = { ...options };
    }
    function gotoPast() {
        let calendarApi = calendarComponentRef.getAPI();
        calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    }
    function handleDateClick(event) {
        selectedDate$.next(event.dateStr);
    }
</script>

<FullCalendar bind:this={calendarComponentRef} {options} />
