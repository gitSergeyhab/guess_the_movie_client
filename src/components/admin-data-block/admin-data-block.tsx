import { CategoryName, OperationAction, OperationCategory, OperationContent, OperationName } from "../../const/admin-const"
import { IAdminPageButtonsData } from "../../types/admin-type";
import { AdminButtonGroup } from "../admin-button-group/admin-button-group";
import { StatsBlockData } from "../stats-block-data/stats-block-data";



export const RussianButtonsData : IAdminPageButtonsData[] = [
  {
    id: 1,
    action: OperationAction.Write,
    category: OperationCategory.Rus,
    content: OperationContent.Movies,
    text: OperationName.WriteMovies
  },
  {
    id: 2,
    action: OperationAction.Write,
    category: OperationCategory.Rus,
    content: OperationContent.Persons,
    text: OperationName.WritePersons
  },
  {
    id: 3,
    action: OperationAction.Write,
    category: OperationCategory.Rus,
    content: OperationContent.Images,
    text: OperationName.WriteImages
  },

  {
    id: 4,
    action: OperationAction.Delete,
    category: OperationCategory.Rus,
    content: OperationContent.Movies,
    text: OperationName.DeleteMovies
  },
  {
    id: 5,
    action: OperationAction.Delete,
    category: OperationCategory.Rus,
    content: OperationContent.Persons,
    text: OperationName.DeletePersons
  },
  {
    id: 6,
    action: OperationAction.Delete,
    category: OperationCategory.Rus,
    content: OperationContent.Images,
    text: OperationName.DeleteImages
  },
];


export const UssrButtonsData : IAdminPageButtonsData[] = [
  {
    id: 1,
    action: OperationAction.Write,
    category: OperationCategory.Ussr,
    content: OperationContent.Movies,
    text: OperationName.WriteMovies
  },
  {
    id: 2,
    action: OperationAction.Write,
    category: OperationCategory.Ussr,
    content: OperationContent.Persons,
    text: OperationName.WritePersons
  },
  {
    id: 3,
    action: OperationAction.Write,
    category: OperationCategory.Ussr,
    content: OperationContent.Images,
    text: OperationName.WriteImages
  },

  {
    id: 4,
    action: OperationAction.Delete,
    category: OperationCategory.Ussr,
    content: OperationContent.Movies,
    text: OperationName.DeleteMovies
  },
  {
    id: 5,
    action: OperationAction.Delete,
    category: OperationCategory.Ussr,
    content: OperationContent.Persons,
    text: OperationName.DeletePersons
  },
  {
    id: 6,
    action: OperationAction.Delete,
    category: OperationCategory.Ussr,
    content: OperationContent.Images,
    text: OperationName.DeleteImages
  },
];


export const WorldButtonsData : IAdminPageButtonsData[] = [
  {
    id: 1,
    action: OperationAction.Write,
    category: OperationCategory.World,
    content: OperationContent.Movies,
    text: OperationName.WriteMovies
  },
  {
    id: 2,
    action: OperationAction.Write,
    category: OperationCategory.World,
    content: OperationContent.Persons,
    text: OperationName.WritePersons
  },
  {
    id: 3,
    action: OperationAction.Write,
    category: OperationCategory.World,
    content: OperationContent.Images,
    text: OperationName.WriteImages
  },

  {
    id: 4,
    action: OperationAction.Delete,
    category: OperationCategory.World,
    content: OperationContent.Movies,
    text: OperationName.DeleteMovies
  },
  {
    id: 5,
    action: OperationAction.Delete,
    category: OperationCategory.World,
    content: OperationContent.Persons,
    text: OperationName.DeletePersons
  },
  {
    id: 6,
    action: OperationAction.Delete,
    category: OperationCategory.World,
    content: OperationContent.Images,
    text: OperationName.DeleteImages
  },
];



export function AdminDataBlock () {



  return (
    <div>
      <h1>AdminDataBlock</h1>
      <StatsBlockData/>
      <AdminButtonGroup name={CategoryName.Rus} key={CategoryName.Rus} buttonsData={RussianButtonsData}/>
      <AdminButtonGroup name={CategoryName.Ussr} key={CategoryName.Ussr} buttonsData={UssrButtonsData}/>
      <AdminButtonGroup name={CategoryName.World} key={CategoryName.World} buttonsData={WorldButtonsData}/>
    </div>

  )
}
