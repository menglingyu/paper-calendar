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
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        weekends: true,
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

<div>
    <div class="demo-app-top">
        <button on:click={toggleWeekends}>toggle weekends</button> &nbsp;
        <button on:click={gotoPast}>go to a date in the past</button> &nbsp; (also,
        click a date/time to add an event)
    </div>

    <!-- <div>
        <Draggable {eventData} class="draggable">
            Drag me in Week or Day view!
        </Draggable>
    </div> -->

    <div class="demo-app-calendar">
        <FullCalendar bind:this={calendarComponentRef} {options} />
    </div>
</div>

<style>
    /* :global(* > *) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .demo-app {
        width: 100vw;
        height: 100vh;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;
    }
    .demo-app-calendar {
        width: 100%;
        flex-grow: 1;
        margin: 0 auto;
        max-width: 900px;
    }
    :global(.draggable) {
        color: white;
        background: #3788d8;
        width: fit-content;
        padding: 1rem;
        margin: 1rem;
        cursor: pointer;
    } */
</style>
