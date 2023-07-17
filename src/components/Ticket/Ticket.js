import React from "react";
import "./ticket.css";

function Ticket(props) {
    
    return (
        <div id="ticket-form" onClick={props.currentTicket}>
            <h3 className="ticket-number">Ticket {props.number}</h3>
            <p className="ticket-short-description">{props.shortDescription}</p>
            <div className="ticket-details">
                <span>{props.priority}</span>
                <button className="edit-button" onClick={() => {props.onEdit(props.number);}}>Edit</button>
                <span>{props.state}</span>
            </div>
        </div>
    );
}

export default Ticket;