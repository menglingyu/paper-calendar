<script>
    import { editData$ } from "../../store";
    import Base from "./Base.svelte";

    const handleSave = ({ detail: outputData }) => {

        editData$.next(outputData);
    };
</script>

<Base data={$editData$} on:change={handleSave} />
