import { IAdminPageButtonsData } from "../../types/admin-type";
import { AdminButton } from "../admin-button/admin-button";

interface AdminButtonGroupProps {
  name: string
  buttonsData: IAdminPageButtonsData[]
}

export function AdminButtonGroup ({name, buttonsData}: AdminButtonGroupProps) {
  const buttons = buttonsData.map(({action, category, content, id, text}) =>
    <AdminButton action={action} category={category} content={content} text={text} key={id} />)
  return (
    <div>
      <h3>
        {name}
      </h3>
      <div className="admin__btn-group">
        {buttons}
      </div>
    </div>
  )
}
