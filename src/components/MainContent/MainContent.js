import React from "react";
import Ticket from "../Ticket/Ticket";

function MainContent({ tickets, setIsRendered, handleEditTicket, renderedTickets, setRenderedTickets }) {
    const [filterOption, setFilterOption] = React.useState("");
    const [filterValue, setFilterValue] = React.useState("");
    const [filteredTickets, setFilteredTickets] = React.useState([]);
    const [showFilteredTickets, setShowFilteredTickets] = React.useState(false);

    function handleScroll() {
        const pageHeight = document.documentElement.scrollHeight;
        const currentScrollPosition = window.innerHeight + window.scrollY;
        
        if (pageHeight <= currentScrollPosition) {
            const checkTicketRemaining = tickets.length - renderedTickets.length;
            if (checkTicketRemaining > 0) {
                const ticketsToLoad = tickets.slice(renderedTickets.length, renderedTickets.length + Math.min(5, checkTicketRemaining));
                setRenderedTickets(prevTickets => {
                    return [
                        ...prevTickets,
                        ...ticketsToLoad
                    ]
                });
            }
        }
    }

    function handleFilterCriteria(event) {
        event.preventDefault();

        if (filterOption) {
            const filtered = tickets.filter(ticket => {
                if (filterOption === "AssignedTo") {
                    return ticket.assignedTo === filterValue;
                }
                else if (filterOption === "Priority") {
                    return ticket.priority === filterValue;
                }
                else if (filterOption === "State") {
                    return ticket.state === filterValue;
                }
                else if (filterOption === "CreatedOn") {
                    if (isValidDateFormat(filterValue)) {
                        const formatDate = new Date(ticket.createDate);
                        const converted = formatDate.toISOString().substring(0, 10);
                        return converted === filterValue;
                    }
                    else {
                        return false;
                    }
                }
                return false;
            });
    
            setFilteredTickets(filtered);
            setShowFilteredTickets(true);
            setFilterValue("");
        }
        else {
            setFilteredTickets([]);
            setShowFilteredTickets(false);
        }
    }

    function isValidDateFormat(dateString) {
        const regex = /\d{4}-\d{2}-\d{2}/;
        return regex.test(dateString);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        
    });

    return (
        <div className="main-content">
            <nav className="main-content-navbar">
                <form className="filter-options" onSubmit={handleFilterCriteria}>
                    <select value={filterOption} onChange={event => {
                            setFilterOption(event.target.value);
                        }}>
                        <option value="">-- Filter options --</option>
                        <option value="AssignedTo">AssignedTo</option>
                        <option value="Priority">Priority</option>
                        <option value="State">State</option>
                        <option value="CreatedOn">CreatedOn</option>
                    </select> 
                    {filterOption === "AssignedTo" && (
                        <input 
                            type="text"
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                        />
                    )}
                    {filterOption === "Priority" && (
                        <input 
                            type="text"
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                        />
                    )}
                    {filterOption === "State" && (
                        <input 
                            type="text"
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                        />
                    )}
                    {filterOption === "CreatedOn" && (
                        <input 
                            type="text"
                            placeholder="YYYY-MM-DD"
                            value={filterValue}
                            onChange={(event) => setFilterValue(event.target.value)}
                        />
                    )}
                    {filterOption !== "" && 
                        <div className="filter-buttons">
                            <button type="submit">Apply filter</button>
                            <button onClick={() => {
                                setFilteredTickets([]);
                                setFilterOption("");
                                setFilterValue("");
                                setShowFilteredTickets(false);
                                setRenderedTickets(tickets.slice(0, tickets.length > 6 ? 6 : tickets.length));
                            }}>Cancel</button>
                        </div>
                    }    
                </form> 
                <button
                    className="create-ticket-button"
                    onClick={() => setIsRendered(true)}
                >
                    Create New Ticket
                </button>
            </nav>
            {(showFilteredTickets ? filteredTickets : renderedTickets).map((ticket) => (
              <Ticket
                key={ticket.number}
                number={ticket.number}
                shortDescription={ticket.shortDescription}
                priority={ticket.priority}
                state={ticket.state}
                createdOn={ticket.createDate}
                onEdit={() => handleEditTicket(ticket.number)}
              />
            ))}
          </div>
    );
}

export default MainContent;