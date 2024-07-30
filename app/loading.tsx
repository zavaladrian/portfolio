'use client'
 import ShuffleLoader from "./projects/components/ShuffleLoader"

export default function Loading() {
    return (
      <div className="grid h-72 place-content-center bg-neutral-950 p-4">
      <ShuffleLoader />
    </div>
)
  }

  