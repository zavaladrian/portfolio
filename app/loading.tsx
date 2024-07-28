'use client'
import CutoutTextLoader from "./projects/components/ShuffleLoader"


export default function Loading() {
    return (
      <div>
      <CutoutTextLoader
      height="450px"
      background="white"
      // NOTE: Using GIFs for the background looks super cool :)
      imgUrl= '..public/droid.gif'
    />
    </div>
)
  }

  