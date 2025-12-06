"use client"; // this registers <Editor> as a Client Component
import { Block, BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

type EditorProps = {
  editable: boolean;
  onSetBlocks?: (blocks: Block[]) => void;
};

// Our <Editor> component we can reuse later
export default function Editor({ editable, onSetBlocks }: EditorProps) {
  const { audio, file, ...remainingBlockSpecs } = defaultBlockSpecs;

  const schema = BlockNoteSchema.create({
    blockSpecs: {
      // remainingBlockSpecs contains all the other blocks
      ...remainingBlockSpecs,
    },
  });

  const editor = useCreateBlockNote({
    schema,
  });

  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      theme="light"
      onChange={() => {
        onSetBlocks(editor.document);
      }}
    />
  );
}
