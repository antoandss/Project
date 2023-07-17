import React from "react";

function ContentDetails({ handleCreateTicket, handleUpdateTicket, tickets, ticketForm, setTicketForm, setIsRendered, setEditingTicket, editingTicket, setRenderedTickets, renderedTickets }) {
    function handleInput(event) {
        const { name, value } = event.target;
        setTicketForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        });
    }

    return (
        <div className="content-details">
              <div className="content-details-content">
                <h2>{editingTicket ? "Update Ticket" : "Create New Ticket"}</h2>
                <form
                  method="POST"
                  className="content-details-form"
                  onSubmit={editingTicket ? handleUpdateTicket : handleCreateTicket}
                >
                  <div>
                    <label htmlFor="shortDescription">Short Description: </label>
                    <input
                      type="text"
                      name="shortDescription"
                      onChange={handleInput}
                      value={ticketForm.shortDescription}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="description">Description: </label>
                    <textarea
                      name="description"
                      onChange={handleInput}
                      value={ticketForm.description}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="assignedTo">Assigned To: </label>
                    <input
                      type="text"
                      name="assignedTo"
                      onChange={handleInput}
                      value={ticketForm.assignedTo}
                    />
                  </div>
                  <div>
                    <label htmlFor="priority">Priority:</label>
                    <select
                      name="priority"
                      onChange={handleInput}
                      required
                      value={ticketForm.priority}
                    >
                      <option value="">--Select one--</option>
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                  <button type="submit">
                    {editingTicket ? "Update" : "Submit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                    setIsRendered(false);
                    setEditingTicket(null);
                    setTicketForm({
                        number: tickets.length + 1,
                        shortDescription: "",
                        description: "",
                        assignedTo: "",
                        state: "New",
                        priority: "",
                        createDate: new Date()
                    })
                    setRenderedTickets(tickets.slice(0, tickets.length > 6 ? 6 : tickets.length));
                    }}>
                      Cancel
                    </button>
                </form>
              </div>
            </div>
    );
}

export default ContentDetails;