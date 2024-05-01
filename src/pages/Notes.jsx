import Button from "../components/atoms/Button";
import { openModal } from "../libs/modal";
import ModalFormChecklist from "../components/organisms/ModalFormChecklist";
import { useEffect, useState } from "react";
import server from "../libs/server";
import NoteItem from "../components/molecules/NoteItem";

export default function Notes() {
  const [checklists, setChecklists] = useState([])
  const fetchChecklists = async () => {
    try {
      const response = await server.get('/checklist')
      const { data } = await response.data

      setChecklists(data)
    } catch (error) {
      alert(error.message)
    }
  }
  const handleDeleteChecklist = async (id) => {
    try {
      const response = await server.delete(`/checklist/${id}`)

      console.log(response)

      fetchChecklists()
    } catch (error) {
      alert(error.message)
    }
  }
  const handleAddNote = (item) => {
    // setSelectedChecklist(item)
    openModal('modal_form_note')
  }

  useEffect(() => {
    fetchChecklists()
  }, [])

  return (
    <>
      <ModalFormChecklist />
      <Button type="button" handleOnClick={() => openModal('form_modal_checklist')}>
        Add Checklist
      </Button>
      {checklists.length > 0 ? (
        <div className="grid grid-cols-3 mt-10 gap-5">
          {checklists.map((item, index) => (
            <div className="col-span-1" key={index}>
              <NoteItem
                checklist={item}
                handleOnDelete={() => handleDeleteChecklist(item.id)}
                handleAddNote={() => handleAddNote(item)}
              />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center font-bold">You have no one notes</h1>
      )}
    </>
  )
}