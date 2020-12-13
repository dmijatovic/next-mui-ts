
export const fields=[
  {
    type:"switch",
    required:true,
    id:'active',
    name:'active',
    label:"Active",
    defaultValue:true
  },{
    type:"text",
    required:true,
    id:'name',name:'name',label:"Medium",helperText:"Type medium name"
  },{
    type:"select",
    required:true,
    id:'mediumType',name:'mediumType',label:"Medium Type",helperText:"Select medium type",
    defaultValue:'option2',
    options:[{
      id:'option1',label:'Option 1'
    },{
      id:'option2',label:'Option 2'
    },{
      id:'option3',label:'Option 3'
    }]
  },{
    type:"select",
    id:'country',name:'country',label:"Country",helperText:"Select country",required:true,
    defaultValue:'option3',
    options:[{
      id:'option1',label:'Option 1'
    },{
      id:'option2',label:'Option 2'
    },{
      id:'option3',label:'Option 3'
    }]
  },{
    type:"number",
    required:false,
    id:'readership',
    name:'readerhip',
    label:"Readership",
    helperText:"Type vaid number between 1 - 1000000",
  }
]

export const fieldsLayout=[
  [0,1],
  [2,3],
  [4,5]
]


export const mediumType = {
  type:"select",
  id:'mediumType',
  name:'mediumType',
  label:"Medium Type",
  helperText:"Select medium type",
  defaultValue:'option2',
  rules:{required:true},
  options:[{
    id:'option1',label:'Option 1'
  },{
    id:'option2',label:'Option 2'
  },{
    id:'option3',label:'Option 3'
  }]
}

export const country={
  type:"select",
  id:'country',
  name:'country',
  label:"Country",
  helperText:"Select country",
  defaultValue:'option3',
  rules:{required:true},
  options:[{
    id:'option1',label:'Option 1'
  },{
    id:'option2',label:'Option 2'
  },{
    id:'option3',label:'Option 3'
  }]
}

export const mediumAliases=[
  {type:"chip",id:"0",label:"Media alias 1"},
  {type:"chip",id:"1",label:"Media alias 2"},
  {type:"chip",id:"2",label:"Alias 3"},
  {type:"chip",id:"3",label:"Alias 4"},
  {type:"chip",id:"4",label:"Alias 4"},
  {type:"chip",id:"5",label:"Alias 4"},
  {type:"chip",id:"6",label:"Alias 4"},
  {type:"chip",id:"7",label:"Alias 4"},
]