import { useState } from "react"

export default function Avatar({ size = 'md', url = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' }) {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full">
        <img src={url} />
      </div>
    </div>
  )
}