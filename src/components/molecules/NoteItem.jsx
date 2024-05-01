import { faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Icon from "../atoms/Icon";
import { faCheck, faPencil, faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Checkbox from "../atoms/Checkbox";
import server from "../../libs/server";

export default function NoteItem({ checklist, handleOnDelete }) {
  const navigate = useNavigate()

  return (
    <>
      <Card>
        <h1 className="text-xl font-semibold">{checklist?.name}</h1>
        <span className="text-sm">You have {checklist?.items?.length} note</span>
        <div className="flex gap-2">
          <Button
            size="sm"
            handleOnClick={() => navigate(`/checklist/${checklist?.id}`, {
              state: checklist
            })}
          >
            <Icon icon={faEye} />
          </Button>
          <Button
            size="sm"
            handleOnClick={handleOnDelete}
          >
            <Icon icon={faTrashAlt} />
          </Button>
          <Button
            size="sm"
            handleOnClick={() => navigate(`/checklist/${checklist?.id}/note`, {
              state: checklist
            })}
          >
            Add Note
            <Icon icon={faPlusCircle} />
          </Button>
        </div>
      </Card >
    </>
  )
}