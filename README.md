<p align="center">
  <img src="https://raw.githubusercontent.com/siccmwn/MooSpace-API/development/image/MooSpace.png" alt="MooSpace Logo" width="500">
</p>
<p align="center"><em>MooSpace API is API that created for My React Native Project Apps (MooSpace).</em></p>

Installation
---------------

### Prerequisites

You're going to need:
- **Node JS and NPM** — Make sure you have installed Node.js and NPM on your computer.

### Getting Set Up
1. Fork this repository on GitHub.
2. Clone *your forked repository* (not our original one) to your hard drive with `git clone https://github.com/YOURUSERNAME/MooSpace-API.git`
3. `cd MooSpace-API`
4. Run with `npm install`.
5. Create .env file on root project folder, and paste the following code to the file.
```
PORT=yourport
KEY=yourkey
```
6. Run the server with `npm run dev`.

Endpoint
---------------

**Admin**

| URL | HTTP | Header(s) | Body | Description |
| -------- | ---- | --------- | ---- | ----------- |
| /auth/register | **POST** | none | name:string(**required**) <br> username:string(**required**) <br> password:string(**required**) <br> | Create admin account. |
| /auth/login | **POST** | none | email:string(**required**) <br> password:string(**required**) <br> | Login account as admin. |

**Room**

| URL | HTTP | Header(s) | Body | Description |
| -------- | ---- | --------- | ---- | ----------- |
| /room | **GET** | access_token | none | Get all listed rooms. |
| /room | **POST** | access_token | name:string(**required**) <br> | Create new room. |
| /room/:roomId | **PUT** | access_token | name:string(**optional**) <br> | Update room name by roomId. |

**Customer**

| URL | HTTP | Header(s) | Body | Description |
| -------- | ---- | --------- | ---- | ----------- |
| /customer | **GET** | access_token | none | Get all listed customers. |
| /customer | **POST** | access_token | name:string(**required**) <br> identityNumber:string(**required**) <br> phoneNumber:string(**required**) email:string(**optional**) <br> image:file(**optional**) <br> | Create new customer. |
| /customer/:customerId | **PUT** | access_token | name:string(**required**) <br> identityNumber:string(**required**) <br> phoneNumber:string(**required**) email:string(**optional**) <br> image:file(**optional**) <br> | Create customer by customerId. |

**Order**

| URL | HTTP | Header(s) | Body | Description |
| -------- | ---- | --------- | ---- | ----------- |
| /checkin | **GET** | access_token | none | Get all listed rooms that booked and not booked. |
| /checkin | **POST** | access_token | roomId:number(**required**) <br> customerId:number(**required**) <br> duration:number(**required**) <br> | Checkin room. |
| /order/:orderId | **PUT** | access_token | roomId:number(**required**) <br> customerId:number(**required**) <br> duration:number(**required**) <br> | Checkout room. |