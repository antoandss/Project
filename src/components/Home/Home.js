import React from "react";
import "./home.css";
import MainContent from "../MainContent/MainContent"
import ContentDetails from "../ContentDetails/ContentDetails";

function Home() {
    const [isRendered, setIsRendered] = React.useState(false);
    const [editingTicket, setEditingTicket] = React.useState(null);
    const [tickets, setTickets] = React.useState(
        JSON.parse(localStorage.getItem("tickets")) || []);
    const [renderedTickets, setRenderedTickets] = React.useState([]);
    const [ticketForm, setTicketForm] = React.useState({
        shortDescription: "",
        description: "",
        assignedTo: "",
        state: "New",
        priority: ""
    });

    React.useEffect(() => {
        setRenderedTickets(tickets.slice(0, tickets.length > 6 ? 6 : tickets.length));
        localStorage.setItem("tickets", JSON.stringify(tickets));
    }, [tickets]);

    function handleEditTicket(number) {
        const ticketToEdit = renderedTickets.find(
          (ticket) => ticket.number === number
        );
        setEditingTicket(ticketToEdit);
        setTicketForm({
          number: ticketToEdit.number,
          shortDescription: ticketToEdit.shortDescription,
          description: ticketToEdit.description,
          assignedTo: ticketToEdit.assignedTo,
          state: ticketToEdit.state,
          priority: ticketToEdit.priority,
          createDate: ticketToEdit.createDate
        });
        setIsRendered(true);
      }

    function handleCreateTicket(event) {
        event.preventDefault();

        const newTicket = {
            number: tickets.length + 1,
            ...ticketForm,
            createDate: new Date()
        };

        setTickets(prevTickets => [...prevTickets, newTicket]);
        setTicketForm({
            shortDescription: "",
            description: "",
            assignedTo: "",
            state: "New",
            priority: ""
        });
        setIsRendered(false);
    }

    function handleUpdateTicket(event) {
        event.preventDefault();
        
        const updatedTicket = {
          ...ticketForm
        };

        const updatedRenderedTickets = renderedTickets.map((ticket) =>
          ticket.number === updatedTicket.number ? updatedTicket : ticket
        );
        const updatedAllTickets = tickets.map((ticket) =>
          ticket.number === updatedTicket.number ? updatedTicket : ticket
        );
        setRenderedTickets(updatedRenderedTickets);
        setTickets(updatedAllTickets);
        
        setTicketForm({
          shortDescription: "",
          description: "",
          assignedTo: "",
          state: "New",
          priority: ""
        });
        setEditingTicket(null);
        setIsRendered(false);
    }

    return (
        <div className={`home ${isRendered ? "" : "no-content-details"}`}>
            <MainContent 
                tickets={tickets}
                setIsRendered={setIsRendered}
                handleEditTicket={handleEditTicket}
                renderedTickets={renderedTickets}
                setRenderedTickets={setRenderedTickets}
            />
          {isRendered && (
            <ContentDetails 
                tickets={tickets}
                setTickets={setTickets}
                setIsRendered={setIsRendered}
                editingTicket={editingTicket}
                setEditingTicket={setEditingTicket}
                renderedTickets={renderedTickets}
                setRenderedTickets={setRenderedTickets}
                handleCreateTicket={handleCreateTicket}
                handleUpdateTicket={handleUpdateTicket}    
                ticketForm={ticketForm}
                setTicketForm={setTicketForm}
            />
            )}
        </div>
      );
}

export default Home;