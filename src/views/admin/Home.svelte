<script>
    // core components
    import CardLineChart from "components/Cards/CardLineChart.svelte";
    import CardBarChart from "components/Cards/CardBarChart.svelte";
    import CardPageVisits from "components/Cards/CardPageVisits.svelte";
    import Calendar from "components/Calendar/Calendar.svelte";
    import Editor from "../../components/Editor/Editor.svelte";
    import { onMount } from "svelte";
    import { getAllEditDataFromStorage } from "../../store";
    import CardSocialTraffic from "components/Cards/CardSocialTraffic.svelte";
    import TimeLine from "../../components/TimeLine/TimeLine.svelte";

    export let location;
    onMount(() => {
        getAllEditDataFromStorage();
    });
</script>

<div>
    <div class="flex flex-wrap">
        <div class="w-full overflow-scroll xl:w-6/12 px-4">
            <Editor />
        </div>
        <div class="relative w-full xl:w-6/12 bg-white px-4">
            <Calendar />
            <!-- <div
                class="relative flex flex-col  break-words bg-white w-full shadow-lg rounded bg-white p-2"
            >
                
            </div> -->
        </div>
    </div>
    <!-- <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
        </div>
        <div class="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
        </div>
    </div>
    <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
            <TimeLine />
        </div>
    </div> -->
</div>
