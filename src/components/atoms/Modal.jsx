import { useEffect, useRef } from "react";

export default function Modal({ children, name = '', title = '', handleOnClose = () => { }, visible }) {
  const modalRef = useRef(null)

  useEffect(() => {
    visible ? modalRef.current.showModal() : modalRef.current.close()
  }, [visible])

  return (
    <dialog id={name} className="modal" ref={modalRef}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleOnClose}>✕</button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
      </div>
    </dialog>
  )
}