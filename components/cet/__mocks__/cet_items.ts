
const cet_items = [{
  id: 'root1',
  name: 'Competitor',
  children: [
    {
      id: '11',
      name: 'Issue',
      data: [{
        active:false,
        label:"Scores",
        type:"scores",
        options:[{
          value:1,
          label:"licht ongunstig"
        }]
      }]
    },{
      id: '12',
      name: 'Spokesperson',
    },{
      id: '13',
      name: 'Key message',
    },{
      id: '14',
      name: 'Reputationdriver',
      children: [
        {
          id: '21',
          name: 'Afdeling',
        },{
          id: '22',
          name: 'Sector',
        }
      ],
    },{
      id: '15',
      name: 'Stakeholder',
    },{
      id: '16',
      name: 'StakeholderCluster',
      children:[{
        id:'161',
        name:'Issues Stakeholder'
      }]
    },{
      id: '17',
      name: 'Gementes',
    },
  ],
}];

export default cet_items