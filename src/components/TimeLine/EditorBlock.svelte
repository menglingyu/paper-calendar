<div/>
<!-- <script>
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
      placeholder: "每一天都是一张纸",
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
      if (isReady && data) {
          editor.isReady.then(() => {
              if (data) {
                  editor.render(data);
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
      // debugger
  }
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="relative bg-white h-600-px overflow-scroll ">
  <div id="editorjs" />
</div> -->
