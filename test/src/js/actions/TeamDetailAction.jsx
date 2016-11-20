import dispatcher from '../dispatcher.js';

export function insertEmployee(employee){
    dispatcher.dispatch({
        type:"CREATE_EMP",data:employee,
    });
};
    
    export function deleteEmployee(employee){
        console.log(employee);
    dispatcher.dispatch({
        type:"DELETE_EMP",data:employee,
    });
};

 export function updateEmployee(employee){
        console.log(employee);
    dispatcher.dispatch({
        type:"UPDATE_EMP",data:employee,
    });
};