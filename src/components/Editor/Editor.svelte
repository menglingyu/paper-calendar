<script>
    import { onMount } from "svelte";
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
    import { setEditData, editData$, getEditData } from "../../store";

    let editor = new EditorJS({
        /**
         * Enable/Disable the read only mode
         */
        readOnly: false,

        /**
         * Wrapper of Editor
         */
        holder: "editorjs",

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
            // saveButton.click();
        },
        onChange: function (api, block) {
            console.log("something changed", block);
        },
    });

    let aaa = true;

    $: {
        try {
            editor.isReady.then((data) => {
                if (aaa) {
                    editor.render($editData$);
                    aaa = false;
                }
            });
        } catch (error) {
            console.log("errorerror", error);
        }
    }

    onMount(() => {
        getEditData();
    });

    const handleSave = () => {
        editor
            .save()
            .then(setEditData)
            .catch((error) => {
                console.log("Saving failed: ", error);
            });
    };
</script>

<div class="relative bg-white h-600-px overflow-scroll ">
    <div class="ce-example">
        <div class="ce-example__header">
            <a class="ce-example__header-logo" href="https://codex.so/editor"
                >Editor.js 🤩🧦🤨</a
            >

            <div class="ce-example__header-menu">
                <a href="https://github.com/editor-js" target="_blank"
                    >Plugins</a
                >
                <a href="https://editorjs.io/usage" target="_blank">Usage</a>
                <a href="https://editorjs.io/configuration" target="_blank"
                    >Configuration</a
                >
                <a
                    href="https://editorjs.io/creating-a-block-tool"
                    target="_blank">API</a
                >
            </div>
        </div>
        <div class="ce-example__content _ce-example__content--small">
            <div id="editorjs" />

            <!-- <div class="ce-example__button" id="saveButton">editor.save()</div> -->

            <!-- <div class="ce-example__statusbar">
                Readonly:
                <b id="readonly-state"> Off </b>
                <div
                    class="ce-example__statusbar-button"
                    id="toggleReadOnlyButton"
                >
                    toggle
                </div>
            </div> -->
        </div>
    </div>
</div>
<button
    class="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    on:click={handleSave}
>
    Save
</button>
<!-- <script>
    import EditorJS from "@editorjs/editorjs";
    import { setFullCalendar, setEditData, editData$ } from "../../store";
    import { config } from "./config";
    // import { FormatCenter } from "../../helper";
    /**
     * To initialize the Editor, create a new instance with configuration object
     * @see docs/installation.md for mode details
     */
    var editor = new EditorJS();

    $: {
        if (editor && editor.render) {
            editor.render(editData$);
        }
    }

    const handleSave = () => {
        editor
            .save()
            .then((outputData) => {
                setEditData(outputData);
                // setFullCalendar(outputData);
            })
            .catch((error) => {
                console.log("Saving failed: ", error);
            });
    };
</script>

<div
    class="relative flex flex-col h-full  bg-white"
>
    <div id="editorjs" />
</div>
<button
    class="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    on:click={handleSave}
>
    Save
</button> -->

<!-- bg-blueGray-700 text-white -->
<style>
    /**
    * Styles for the example page
    */

    .ce-example {
        font-size: 16.2px;
    }

    .ce-example__header {
        border-bottom: 1px solid #e8e8eb;
        height: 50px;
        line-height: 50px;
        display: flex;
        padding: 0 30px;
        margin-bottom: 30px;
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

    .ce-example__content--small {
        max-width: 500px;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        padding: 0 15px;
    }

    .ce-example__content--with-bg {
        background: #f4f4f4;
        max-width: none;
        margin-top: -30px;
    }

    .ce-example__output {
        background: #1b202b;
        overflow-x: auto;
        padding: 0 30px;
    }

    .ce-example__output-content {
        max-width: 650px;
        margin: 30px auto;
        color: #abadc3;
        font-family: "PT Mono", Menlo, Monaco, Consolas, Courier New, monospace;
        font-size: 13.3px;
    }

    .ce-example__output-content:empty {
        display: none;
    }

    .ce-example__button {
        display: block;
        margin: 50px auto;
        max-width: 180px;
        background: #4a9df8;
        padding: 17px 30px;
        box-shadow: 0 22px 18px -4px rgba(137, 207, 255, 0.77);
        transition: all 150ms ease;
        cursor: pointer;
        border-radius: 31px;
        color: #fff;
        font-family: "PT Mono", Menlo, Monaco, Consolas, Courier New, monospace;
        text-align: center;
    }

    /* .ce-example__button:hover {
        background: #3d8de5;
        transform: translateY(2px);
        box-shadow: 0 20px 15px -4px rgba(137, 207, 255, 0.77);
    }

    .ce-example__output-footer {
        padding: 30px 0;
        font-size: 14.2px;
        letter-spacing: 0.3px;
        text-align: center;
    }

    .ce-example__output-footer a {
        color: #fff;
        text-decoration: none;
    }

    .ce-example__statusbar {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
        font-size: 12px;
        padding: 8px 15px;
        z-index: 1;
    }

    .ce-example__statusbar-button {
        display: inline-flex;
        margin-left: 10px;
        background: #4a9df8;
        padding: 6px 12px;
        box-shadow: 0 7px 8px -4px rgba(137, 207, 255, 0.77);
        transition: all 150ms ease;
        cursor: pointer;
        border-radius: 31px;
        color: #fff;
        font-family: "PT Mono", Menlo, Monaco, Consolas, Courier New, monospace;
        text-align: center;
    } */

    @media all and (max-width: 730px) {
        .ce-example__header,
        .ce-example__content {
            padding: 0 20px;
        }
    }

    /**
    * JSON highlighter
    */
    /* .sc_attr {
        color: rgb(148, 162, 192);
    }
    .sc_key {
        color: rgb(190, 213, 255);
    }
    .sc_toolname {
        color: rgb(15, 205, 251);
    }
    .sc_tag {
        color: rgb(4, 131, 216);
    }
    .sc_bool {
        color: rgb(247, 60, 173);
    } */
    :global(.ce-header) {
        font-weight: bold;
    }
    :global(#editorjs h2) {
        font-size: 1.2rem;
    }
    :global(#editorjs h3) {
        font-size: 1rem;
    }

    /* 
    .ce-example .ce-block:first-of-type h2.ce-header {
        font-size: 50px;
        font-weight: bold;
    }

    .ce-example h2.ce-header {
        font-size: 30px;
        font-weight: bold;
    }

    .ce-example h3.ce-header {
        font-size: 24px;
        font-weight: bold;
    }

    .ce-example h4.ce-header {
        font-size: 18px;
        font-weight: bold;
    } */

    .ce-example-multiple {
        display: grid;
        grid-template-columns: calc(50% - 15px) calc(50% - 15px);
        gap: 30px;
        padding: 30px;
    }

    .ce-example-multiple > div {
        background: #fff;
        border-radius: 7px;
        padding: 30px;
    }
</style>
