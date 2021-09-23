<script>
    import { editData$, handleSetEditDataToCache } from "../../store";
    import Base from "./Base.svelte";

    const handleSave = ({ detail: outputData }) => {
        editData$.next(outputData);
        handleSetEditDataToCache();
    };
</script>

<Base data={$editData$} on:change={handleSave} />
