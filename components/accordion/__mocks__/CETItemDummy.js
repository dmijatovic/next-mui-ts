

export const Competitors={
  id:12312,
  instructions:"These are CET instruction to follow",
  ceLayout:"Checkbox",
  ceItems:[
    {id:10021, label:"ABN Amro", value:false},
    {id:10022, label:"Rabobank", value:false},
    {id:10023, label:"SNS Bank", value:false},
  ],
  cetvItems:[{
    id:12312,label:"Eerste vermelding",type:"",required:true,
      options:[
        {value:5,label:"Top"},
        {value:4,label:"Next"},
        {value:3,label:"Middle"},
        {value:2,label:"Bottom"},
        {value:1,label:"End"},
      ]
    },{
      id:12312,label:"Eerste vermelding",type:"",required:true,
      options:[
        {value:5,label:"Top"},
        {value:4,label:"Next"},
        {value:3,label:"Middle"},
        {value:2,label:"Bottom"},
        {value:1,label:"End"},
      ]
    }
  ]
}

export const Issues={
  id:12313,
  instructions:"The issues that can be selected for this client",
  ceLayout:"Checkbox",
  ceItems:[
    {id:10021, label:"Betalen", value:false},
    {id:10022, label:"Duurzaamheid", value:false},
    {id:10023, label:"Hypotheken", value:false},
    {id:10023, label:"IT/Digitalisering", value:false},
    {id:10023, label:"Zakelike kredietverlening", value:false},
    {id:10023, label:"Online bankeren", value:false},
  ],
  cetvItems:[{
    id:12312,label:"Aandeel",type:"share",required:true,
      options:[
        {value:3,label:"Groot"},
        {value:2,label:"Middelmatig"},
        {value:1,label:"Klein"},
      ]
    },{
      id:12312,label:"Sentiment",type:"score",required:true,
      options:[
        {value:5,label:"Top"},
        {value:4,label:"Next"},
        {value:3,label:"Middle"},
        {value:2,label:"Bottom"},
        {value:1,label:"End"},
      ]
    }
  ]
}