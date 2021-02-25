
// CET data types
export interface VariableOption{
  optionId:number,
  name:string,
  value:number
}

export type CETVariableType = ("mention"|"share"|"score"|"text"|"single"|"multi")

export interface CETVariable{
  pos:number,
  active:boolean,
  required:boolean,
  cetVariablId:number,
  name:string,
  //mention,share,score and text types are fixed (cannot be chaged by user)
  type:CETVariableType
  options?:VariableOption[]
}

export interface ContentElementListItem{
  active:boolean,
  followOrder:number,
  id:number,
  name:string,
  codingRequest:[{
    codingRequestId:number,
    name:string
  }]
}

export interface ContentElementList{
  ceId:number,
  name:string,
  allowAddingCE:boolean,
  sharedList:boolean,
  //default is Checkbox, when allowAddingCE then Autocomplete
  ceLayout:"Checkbox"|"TransferList"|"Autocomplete"|"Dropdown",
  items?:ContentElementListItem
}

// // CET Browser type
// export interface RenderTree {
//   cetId: number;
//   parentId: number,
//   name: string;
//   children?: RenderTree[];
// }

export interface ContentElementType{
  cetId:number,
  cetParentId:number,
  parentId: number,
  name:string,
  children?: ContentElementType[]
  followOrder:number,
  active:boolean,
  cetMandatory:boolean,
  contentElementList:ContentElementList,
  cetVariables:CETVariable[],
  instructions?:string
}