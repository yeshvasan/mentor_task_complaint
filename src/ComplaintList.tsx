import React from 'react';
import { Complaint } from './App';
import {connect} from 'react-redux';
import { setToDone } from './actions';

interface ComplaintListProps {
    complaints : Complaint[],
    onItemSolved : any
}

function complaintList({complaints, onItemSolved}: ComplaintListProps,){

    const complaintList = complaints.filter((complaint:Complaint) => {
        return !complaint.isSolved;
    });

    function updateSolved(complaint:Complaint){
            console.log(complaint, 'current complaint :::');
            complaint.isSolved = !complaint.isSolved;
            complaints[complaint.id] = complaint;
            onItemSolved(complaint.id);
            console.log(complaint, 'current complaint after update ::');
    }

    return (
        <div id="todo-list" className="list">
            <h2 className="title">Complaint</h2>
            <ul>
                {complaintList.map((complaint)=> {
                    return (
                        <li key={complaint.id}>
                            <input type="checkbox" defaultChecked={complaint.isSolved} onChange={(e) => updateSolved(complaint)} />
                            {complaint.description}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    complaints:state.complaint
});

const mapDispatchToProps = (dispatch:any) => ({
    onItemSolved: (id:any) => dispatch(setToDone(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(complaintList);