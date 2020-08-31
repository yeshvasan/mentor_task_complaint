import React, {useState} from 'react';
import { IComplaint, Complaint } from './App';
import { connect } from 'react-redux';
import { createComplaint } from './actions';


interface ComplaintInputProps {
    addComplaint: any,
    complaints: Complaint[],
    onCreatePressed: any
}

function ComplaintInput({addComplaint, complaints, onCreatePressed}:ComplaintInputProps){

    const complaintObj: IComplaint = new Complaint();
    const [complaint, setComplaint] = useState(complaintObj);

    function submitComplaint(event:React.FormEvent){
        event.preventDefault();
        const {description} = complaint;
        onCreatePressed(description);
        console.log('complaintObj', complaintObj);
        setComplaint(complaintObj);
        console.log(complaints);
    }

    function handleComplaintChange(event:React.ChangeEvent<HTMLInputElement>){
        setComplaint({...complaint, description:event.target.value});
    }

    return(
        <form id="complaint-input" onSubmit={submitComplaint}>
            <p>Facing problems in your workstation.. Feel Free to file your complaint</p>
            <input type="text" name="complaint" value={complaint.description} onChange={handleComplaintChange} /> 
            <button type="submit">Create Complaint</button>
        </form>
    )
}

const mapStateToProps = (state:any) => ({
    complaints : state.complaints
});

const mapDispatchToProps = (dispatch:any) => ({
    onCreatePressed: (description:string) => dispatch(createComplaint(description))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintInput);