import { CategoryName, OperationAction, OperationCategory, OperationName } from "../../const/admin-const"
import { IAdminPageButtonsData } from "../../types/admin-type";
import { AdminButtonGroup } from "../admin-button-group/admin-button-group";



export const RussianButtonsData : IAdminPageButtonsData[] = [
  {
    id: 1,
    action: OperationAction.Write,
    category: OperationCategory.Rus,
    content: null,
    text: OperationName.WriteTests
  },

  {
    id: 2,
    action: OperationAction.Delete,
    category: OperationCategory.Rus,
    content: null,
    text: OperationName.DeleteTests
  }

]

export const UssrButtonsData : IAdminPageButtonsData[] = [
  {
    id: 1,
    action: OperationAction.Write,
    category: OperationCategory.Ussr,
    content: null,
    text: OperationName.WriteTests
  },

  {
    id: 2,
    action: OperationAction.Delete,
    category: OperationCategory.Ussr,
    content: null,
    text: OperationName.DeleteTests
  }

]


export const WorldButtonsData : IAdminPageButtonsData[] = [
  {
    id: 1,
    action: OperationAction.Write,
    category: OperationCategory.World,
    content: null,
    text: OperationName.WriteTests
  },

  {
    id: 2,
    action: OperationAction.Delete,
    category: OperationCategory.World,
    content: null,
    text: OperationName.DeleteTests
  }

]



export function AdminTestsBlock () {

  return (
    <div>
      <h1>Тесты</h1>
      <AdminButtonGroup name={CategoryName.Rus} key={CategoryName.Rus} buttonsData={RussianButtonsData}/>
      <AdminButtonGroup name={CategoryName.Ussr} key={CategoryName.Ussr} buttonsData={UssrButtonsData}/>
      <AdminButtonGroup name={CategoryName.World} key={CategoryName.World} buttonsData={WorldButtonsData}/>
    </div>

  )
}
