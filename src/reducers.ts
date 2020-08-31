import { CREATE_COMPLAINT, REMOVE_COMPLAINT, SET_TO_DONE } from './actions';
import { Complaint } from './App';

export const complaint = (state:Complaint[] = [], action:any) => {
    const { type, payload } = action;

    switch(type){
        case CREATE_COMPLAINT: {
            const { description } = payload;
            const newComplaint: Complaint = new Complaint(description);
            return state.concat(newComplaint);
        }

        case SET_TO_DONE: {
            const {id} = payload;

            const newState = [...state];
            newState[id] = {...newState[id], isSolved:true}

            return newState;
        }

        case REMOVE_COMPLAINT: {
            const {id:complaintId} = payload;
            const index =  state.findIndex(({id})=> {
                return id === complaintId;
            });

            if(index >= 0){
                const newState = [...state];
                newState.splice(index,1);
                return newState;
            }

            return state;
        }
        default:
            return state;
    }
}
