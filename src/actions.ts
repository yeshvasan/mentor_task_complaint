export const CREATE_COMPLAINT = 'CREATE_COMPLAINT';
export const createComplaint = (description:string) => ({
    type: CREATE_COMPLAINT,
    payload : {description}
});

export const REMOVE_COMPLAINT = 'REMOVE_COMPLAINT';
export const removeComplaint = (id:any) => ({
    type: REMOVE_COMPLAINT,
    payload: {id}
});

export const SET_TO_DONE = 'SET_TO_DONE';
export const setToDone = (id:any) => ({
    type : SET_TO_DONE,
    payload : {id}
})