import {EventEmitter} from 'events';
import axios from 'axios';
import dispatcher from '../dispatcher.js';
import teamService from '../services/TeamService.js';

 class TeamDetailStore extends EventEmitter{
    constructor(){
        super();
        this.employees = [
            {
                id: 1,
                name: 'Ramesh',
                track: 'Java Track',
                level: 'C4',
                role: 'Technical Lead',
                asset: 'Yes',
                ip: '10.174.128.10',
                Designation:'Technical Lead',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                ImageUrl:'../images/ramesh.jpg',
    },
            {
                id: 2,
                name: 'Govind',
                track: 'MS Track',
                level: 'C2',
                role: 'Senior Developer',
                asset: 'Yes',
                ip: '10.174.128.9',
                Designation:'Senior Software Engineer',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                ImageUrl:'../images/govind.jpg',
    
    },
            {
                id: 3,
                name: 'Prabakar',
                track: 'MS Track',
                level: 'C2',
                role: 'Developer',
                asset: 'Yes',
                ip: '10.174.128.12',
                Designation:'Senior Software Engineer',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                ImageUrl:'../images/praba.jpg',
    
    },
            {
                id: 4,
                name: 'Vijay',
                track: 'QA Track',
                level: 'C2',
                role: 'Tester',
                asset: 'Yes',
                ip: '10.174.128.16',
                Designation:'Senior Software Engineer',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                ImageUrl:'../images/vijay.jpg',
    
    },
            {
                id: 5,
                name: 'Gayathri',
                track: 'QA Track',
                level: 'C2',
                role: 'Tester',
                asset: 'Yes',
                ip: '10.174.128.18',
                Designation:'Senior Software Engineer',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                ImageUrl:'../images/gayathri.jpg',
    
    },
            {
                id: 6,
                name: 'Shyjith',
                track: 'Java Track',
                level: 'C2',
                role: 'Developer',
                asset: 'Yes',
                ip: '10.174.128.19',
                Designation:'Senior Software Engineer',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                ImageUrl:'../images/shyjith.jpg',
    
    },
        ];
    }
    
    getAllEmployees(){
        /*teamService.getTeamDetails().then(function (res) {
            console.log('Api ----> '+ res[0].name);
            return res;
        });*/
        var res;
        setTimeout(() => {
        axios.get('http://localhost:3000')
  .then(function(response){
             console.log('store');
    console.log(response.data); // ex.: { user: 'Your User'}
   res = response.data;
  });
        },8000);
        
    return res;
    }
     
    
     
     insertEmployee(employee){
         console.log('add');
         console.log(employee);
//         this.employees.push(employee);
         axios.post('http://localhost:3000/insert', employee)
  .then(function(response){
    console.log('saved successfully')
  }); 
             //this.emit("change");
     }
     
     deleteEmployee(index){
         console.log(index);
         console.log('delete');
         this.employees.splice(index,1);
     }
     
     handleActions(action){
         console.log(action.type);
         switch(action.type){
             case "CREATE_TODO":
                 {
                     this.insertEmployee(action.data);
                     break;
                 }
                 case "DELETE_TODO":
                 {
                     this.deleteEmployee(action.index);
                     break;
                 }
             default:break;
         }
     }
}

var detailStore = new TeamDetailStore();
dispatcher.register(detailStore.handleActions.bind(detailStore));
export default detailStore;