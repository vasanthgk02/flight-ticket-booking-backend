**VASANTH KUMAR G 20EUT162**

# FLIGHT TICKET BOOKING API DOCUMENTATION

**DESCRIPTION :** The Flight Ticket Booking API provides endpoints to manage flight bookings, user authentication, and flight information.

**BASE URL : [http://localhost:3000/api**](http://localhost:3000/api)\*\*

## USER USE CASES :

### USER SIGNUP

Endpoint: /auth/signup

Method: POST

Description: Create a new user account. Request Body:

name (string): User's name.

email (string): User's email.

password (string): User's password.

**Example:**

```
curl -X POST -H "Content-Type: application/json" -d '{

"name": "John Doe",

"email": "john@example.com",

"password": "password123"

}' http://localhost:3000/api/auth/signup

```

### USER LOGIN

Endpoint: /auth/login

Method: POST

Description: User login to obtain authentication token. Request Body:

email (string): User's email.

password (string): User's password.

**Example**:

```
curl -X POST -H "Content-Type: application/json" -d '{

"email": "john@example.com",

"password": "password123"

}' http://localhost:3000/api/auth/login
```

### SEARCH FLIGHTS

Endpoint: /flights/search

Method: GET

Description: Search for available flights based on date and time. Query Parameters:

date (string): Date of the flight in "YYYY-MM-DD" format.

time (string): Time of the flight in "HH:MM" format.

**Example**:

```
curl -X GET 'http://localhost:3000/api/flights/search?date=2023-06-10&time=09:00'
```

### BOOK FLIGHT

Endpoint: /bookings

Method: POST

Description: Book a flight.

Request Body:

userId (string): User ID.

flightId (string): Flight ID.

seatNumber (string): Seat number.

**Example**:

```
curl -X POST -H "Content-Type: application/json" -d '{

"userId": "user123",

"flightId": "flight456",

"seatNumber": "A5"

}' http://localhost:3000/api/bookings
```

### GET USER BOOKINGS

Endpoint: /bookings/user/:userId

Method: GET

Description: Get all bookings made by a user.

Path Parameter:

userId (string): User ID.

**Example**:

```
curl -X GET http://localhost:3000/api/bookings/user/user123
```

**USER LOGOUT**

Endpoint: /auth/logout

Method: POST

Description: Logout the user.

**Example**:

curl -X POST http://localhost:3000/api/auth/logout

## ADMIN USE CASES :

### ADMIN LOGIN

Endpoint: /auth/admin-login

Method: POST

Description: Admin login to obtain authentication token. Request Body:

email (string): Admin's email.

password (string): Admin's password.

**Example**:

```
curl -X POST -H "Content-Type: application/json" -d '{

"email": "admin@example.com",

"password": "admin123"

}' <http://localhost:3000/api/auth/admin-login>
```

### ADD FLIGHT

Endpoint: /flights

Method: POST

Description: Add a new flight.

Request Body:

flightNumber (string): Flight number.

date (string): Date of the flight in "YYYY-MM-DD" format.

time (string): Time of the flight in "HH:MM" format.

**Example**:

```
curl -X POST -H "Content-Type: application/json" -d '{

"flightNumber": "FL123",

"date": "2023-06-10",

"time": "09:00"

}' http://localhost:3000/api/flights
```

### REMOVE FLIGHT

Endpoint: /flights/:flightId

Method: DELETE

Description: Remove a flight.

Path Parameter:

flightId (string): Flight ID.

**Example**:

```
curl -X DELETE http://localhost:3000/api/flights/flight456
```
