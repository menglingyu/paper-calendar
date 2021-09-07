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

export const config = {
    readOnly: false,
    holder: "editorjs",
    tools: {
        header: {
            class: Header,
            inlineToolbar: ["marker", "link"],
            config: {
                placeholder: "Header",
            },
            shortcut: "CMD+SHIFT+H",
        },

        /**
         * Or pass class directly without any configuration
         */
        // image: SimpleImage,

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
}