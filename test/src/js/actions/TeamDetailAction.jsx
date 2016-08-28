import dispatcher from '../dispatcher.js';

export function insertEmployee(employee){
    dispatcher.dispatch({
        type:"CREATE_TODO",data:employee,
    });
};
    
    export function deleteEmployee(idx){
        console.log(idx);
    dispatcher.dispatch({
        type:"DELETE_TODO",index:idx,
    });
};