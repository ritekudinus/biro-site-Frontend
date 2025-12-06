"use client";

export const iframeHeight = "800px";
export const description = "A sidebar with a header and a search form.";
import { Block } from "@blocknote/core";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(
  () => import("@/components/template/block-note/block-note"),
  { ssr: false }
);

export default function Page() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  console.log(blocks);
  return (
    <div className="px-10">
      <div>
        <input type="text" placeholder="Untitled" className="text-3xl " />
      </div>
      <Editor editable={true} onSetBlocks={setBlocks} />
    </div>
  );
}
