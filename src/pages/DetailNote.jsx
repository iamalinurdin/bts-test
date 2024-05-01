import { useLocation, useNavigate } from "react-router-dom"
import Checkbox from "../components/atoms/Checkbox"
import Button from "../components/atoms/Button"
import Icon from "../components/atoms/Icon"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import server from "../libs/server"
import { useEffect, useState } from "react"

export default function DetailNote() {
  const location = useLocation()
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])
  const { state: checklist } = location
  const handleStatusNote = async (id) => {
    try {
      await server.put(`/checklist/${checklist?.id}/item/${id}`)
      fetchNotes()
    } catch (error) {
      alert(error.message)
    }
  }
  const handleDeleteNote = async (id) => {
    try {
      await server.delete(`/checklist/${checklist?.id}/item/${id}`)
      fetchNotes()
    } catch (error) {
      alert(error.message)
    }
  }
  const fetchNotes = async (id) => {
    try {
      const response = await server.get(`/checklist/${checklist?.id}/item`)
      const { data } = response.data

      setNotes(data)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <h1 className="font-bold text-3xl">{checklist?.name}</h1>
      {notes ? (
        <>
          <ul className="mt-10">
            {notes.map((item, index) => (
              <li className="flex items-center justify-end gap-2 border-b pb-3 mb-4" key={index}>
                <Checkbox
                  value={item.itemCompletionStatus}
                  checked={item.itemCompletionStatus}
                  handleOnChange={() => handleStatusNote(item.id)}
                />
                <span className="mr-auto">{item.name}</span>
                <Button size="sm" disabled={item.itemCompletionStatus} handleOnClick={() => handleDeleteNote(item.id)}>
                  <Icon icon={faTrashAlt} />
                </Button>
                <Button
                  size="sm"
                  disabled={item.itemCompletionStatus}
                  handleOnClick={() => navigate(`/checklist/${checklist?.id}/note/${item.id}`)}
                >
                  <Icon icon={faPencilAlt} />
                </Button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <span className="text-center my-10">You have no any notes, add at least one note now</span>
      )}

      <Button
        size="sm"
        handleOnClick={() => navigate(`/checklist/${checklist?.id}/note`, {
          state: checklist
        })}
      >
        Add Note
        <Icon icon={faPlusCircle} />
      </Button>
    </>
  )
}