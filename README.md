# Fetch_Tickets_zendesk
## REST API for zendesk - web app in Nodejs
Download the Node.js source code or a pre-built installer for your platform from the below link:
https://nodejs.org/en/download/


Download the repository and navigate to the path where the repository is placed.

Install Axios:
```bash
$npm install axios
```
Download the required dependancies by running:
```bash
npm install
```
Open command prompt/terminal and navigate to the repository & run:
```bash
npm start
```
To view the application go to :
http://localhost:3000/input

Enter the required credentials:
Email : the email id of the company
Domain : Domain name of the company
Token : API secret token 

If the entered credentials are valid the tickets corresponding to the entered credentials will be displayed.

Tests: 
1. If the user submits without filling the required details, then an alert will  be  dispalyed.
2. If the user enters invalid credentials, then the error page will be displayed

