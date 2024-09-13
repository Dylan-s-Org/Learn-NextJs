"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sortedArr = _.orderBy(users, ["name"]);
        }}
      >
        Show
      </button>
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "Home"
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
