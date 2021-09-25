<script>
    import Header from "@editorjs/header";
    import Image from "@editorjs/simple-image";
    import Delimiter from "@editorjs/delimiter";
    import List from "@editorjs/list";
    import Checklist from "@editorjs/checklist";
    import Quote from "@editorjs/quote";
    import CodeTool from "@editorjs/code";
    import Embed from "@editorjs/embed";
    import Table from "@editorjs/table";
    import LinkTool from "@editorjs/link";
    import Warning from "@editorjs/warning";
    import Marker from "@editorjs/marker";
    import InlineCode from "@editorjs/inline-code";
    import EditorJS from "@editorjs/editorjs";
    import { createEventDispatcher } from "svelte";

    export let data = {
        blocks: [],
    };

    let isReady = false;
    const dispatch = createEventDispatcher();

    let editor = new EditorJS({
        readOnly: false,
        holder: "editorjs",
        // placeholder: "每一天都是一张纸",
        height: '100%',
        minHeight: 600,
        tools: {
            /**
             * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
             */
            header: {
                class: Header,
                inlineToolbar: ["marker", "link"],
                config: {
                    placeholder: "Header",
                    levels: [1, 2, 3, 4],
                    defaultLevel: 2,
                },
                shortcut: "CMD+SHIFT+H",
            },

            /**
             * Or pass class directly without any configuration
             */
            image: Image,

            list: {
                class: List,
                inlineToolbar: true,
                shortcut: "CMD+SHIFT+L",
            },

            checklist: {
                class: Checklist,
                inlineToolbar: true,
            },

            quote: {
                class: Quote,
                inlineToolbar: true,
                config: {
                    quotePlaceholder: "Enter a quote",
                    captionPlaceholder: "Quote's author",
                },
                shortcut: "CMD+SHIFT+O",
            },

            warning: Warning,

            marker: {
                class: Marker,
                shortcut: "CMD+SHIFT+M",
            },

            code: {
                class: CodeTool,
                shortcut: "CMD+SHIFT+C",
            },

            delimiter: Delimiter,

            inlineCode: {
                class: InlineCode,
                shortcut: "CMD+SHIFT+C",
            },

            linkTool: LinkTool,

            embed: Embed,

            table: {
                class: Table,
                inlineToolbar: true,
                shortcut: "CMD+ALT+T",
            },
        },
        onReady: function () {
            // editor.render(data);
            // saveButton.click();
        },
        onChange: function (api, block) {
            // console.log("something changed", block);
        },
    });

    editor.isReady.then(() => {
        isReady = true;
    });

    $: {
        if (isReady) {
            editor.isReady.then(() => {
                if (data) {
                    editor.render(data);
                } else {
                    editor.clear();
                }
            });
        }
    }

    const handleSave = () => {
        editor
            .save()
            .then((outputData) => dispatch("change", outputData))
            .catch((error) => {
                console.log("Saving failed: ", error);
            });
    };

    function handleKeydown(params) {
        console.log("params", params);

    }
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="relative bg-white overflow-scroll ">
    <div class="ce-example">
        <div class="ce-example__header">
            <a class="ce-example__header-logo" href="https://codex.so/editor"
                >Editor.js 🤩🧦🤨</a
            >
        </div>
        <div class="ce-example__content _ce-example__content--small">
            <div id="editorjs" />
        </div>
    </div>
</div>
<!-- <button
    class="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    on:click={handleSave}
>
    Save
</button> -->

<style>
    /**
    * Styles for the example page
    */
    @import "checklist.css";

    .ce-example {
        font-size: 16.2px;
    }
    :global(.ce-block__content) {
        max-width: 650px
        /* max-width: 100%;
        padding: 0 60px; */
    }

    .ce-example__header {
        border-bottom: 1px solid #e8e8eb;
        height: 50px;
        line-height: 50px;
        display: flex;
        padding: 0 30px;
        margin-bottom: 10px;
        flex-wrap: wrap;
    }

    .ce-example__header a {
        color: inherit;
        text-decoration: none;
    }

    .ce-example__header-logo {
        font-weight: bold;
    }

    .ce-example__header-menu {
        margin-left: auto;
    }

    @media all and (max-width: 730px) {
        .ce-example__header-menu {
            margin-left: 0;
            margin-top: 10px;
            flex-basis: 100%;
            font-size: 14px;
        }
    }

    .ce-example__header-menu a {
        margin-left: 20px;
    }

    @media all and (max-width: 730px) {
        .ce-example__header-menu a {
            margin-left: 0;
            margin-right: 15px;
        }
    }

    .ce-example__content {
        max-width: 1100px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :global(.cdx-checklist__item) {
        align-items: center;
    }

    :global(.cdx-block) {
        padding: 0%;
    }

    @media all and (max-width: 730px) {
        .ce-example__header,
        .ce-example__content {
            padding: 0 20px;
        }
    }

    :global(.ce-header) {
        font-weight: bold;
    }
    :global(#editorjs h2) {
        font-size: 1.2rem;
    }
    :global(#editorjs h3) {
        font-size: 1rem;
    }
    :global(#editorjs h3) {
        font-size: 1rem;
    }
</style>
