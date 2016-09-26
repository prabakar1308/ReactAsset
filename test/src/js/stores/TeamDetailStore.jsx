import {EventEmitter} from 'events';
import dispatcher from '../dispatcher.js'

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
                image:'praba',
    },
            {
                id: 2,
                name: 'Prabakar',
                track: 'MS Track',
                level: 'C2',
                role: 'Developer',
                asset: 'Yes',
                ip: '10.174.128.9',
                Designation:'Senior Software Engineer',
                DOJ:'26/08/2014',
                Yorbit101: 'AngularJS',
                Yorbit101_Status:'100',
                Yorbit201: 'Requested for AngularJS 201 Course',
                Yorbit201: '',
                image:'ramesh',
    
    },
        ];
    }
    
    getAllEmployees(){
        return this.employees;
    }
     
    
     
     insertEmployee(employee){
         console.log('add');
         this.employees.push(employee);
             this.emit("change");
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