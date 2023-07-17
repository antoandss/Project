# Project

Main Sections:

Navbar – here lies user Information, login/register buttons

MainContent – This will be the main view of the webpage, it will display the list of all available tickets

ContentDetails – This section will only appear once a ticket is selected.

Footer – includes contact information.



MainContent Section List:

Upon landing into the web page, the user should have a list of tickets presented.

Every ticket should be in a separate box, showing the following information:

Number Short Description Priority State

When a user scrolls to the last ticket, 5 more should be loaded (only if there are more ticket to be displayed).

MainContent Section Form:

When user clicks on “Create New Ticket” in the Navbar, the MainContent should be filled with a form, that will have all the fields that one ticket contains. On the bottom, there should be two buttons, “Submit” and “Cancel”.
Upon clicking on “Submit” a new ticket should be raised with the information given, and the user will be redirected to the list view.
“Cancel” will not create a new ticket and will return the user to the list view. Number field should be auto generated. Created Date should be auto generated. Short Description and Description should be mandatory.

MainContent Section Filter:

Alongside the list of tickets, there should be appropriate filtering options, such as:

Assigned to Priority State Created on

ContentDetails form:

The Content Details section will be a form, displaying the full information of one ticket. This form will have two buttons: Submit and Update, based on the type of form that is needed.

Example: When we want to add a ticket, the form should be empty, and the user will write the desired information into the input fields. In that case, the only button present should be Submit.

ContentDetails Interactions:

This section will be interactive with the MainContent in two ways:

When creating new ticket When updating existing ticket

Ticket Creation:

ContentDetails will be hidden by default. In the Navbar, add a button/link to add ticket. When clicking on this link/button, the Content Details will be displayed, with the appropriate fields, mentioned in Models. The following fields should be mandatory:

Short description. Default value of state will be New.

When the user clicks on Submit, the ticket should be present in the list of MainContent (if the filter criteria matches).

Updating existing tickets:

Tickets displayed on the list must have an edit button.

Upon clicking on it, the ContentDetails section will be displayed with the form already populated with the values of the selected ticket. The user can update the details of the ticket as he likes. When he is done editing, the user will click on the button “Update”, which will update the existing ticket.
