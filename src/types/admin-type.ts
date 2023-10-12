import { OperationAction, OperationCategory, OperationContent } from "../const/admin-const";


export interface Operation {
  action: OperationAction|null,
  category: OperationCategory|null,
  content: OperationContent|null,
}

export interface AdminButtonProps extends Operation {
  text: string
}

export interface IAdminPageButtonsData extends AdminButtonProps {id: number|string}
