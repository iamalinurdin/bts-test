import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Button from "../components/atoms/Button";
import Card from "../components/atoms/Card";
import Checkbox from "../components/atoms/Checkbox";
import Icon from "../components/atoms/Icon";
import { openModal } from "../libs/modal";
import ModalFormChecklist from "../components/organisms/ModalFormChecklist";

export default function Notes() {
  return (
    <div className="container mx-auto p-24">
      <ModalFormChecklist />
      <Button type="button" handleOnClick={() => openModal('form_modal_checklist')}>
        Add Checklist
      </Button>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-1">
          <Card>
            <h1 className="text-xl font-semibold">Checklist Name</h1>
            <ul className="mb-5">
              <li className="flex items-center gap-3">
                <Checkbox value={false} checked={false} />
                Item 1
              </li>
            </ul>
            <Button size="sm">
              <Icon icon={faTrashAlt} />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}