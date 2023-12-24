# REST API - JSON

This project aims to demonstrate a basic understanding of RESTful API design using JSON.

## 1. List all users

### 1.1 GET /users
- **Description:** Retrieve a list of all users.
- **Response:**
  - Format: JSON
  - Example:
    ```json
    [
      { "id": 1, "name": "John Doe", "email": "john@example.com" },
      { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
    ]
    ```

### 1.2 GET /users/1
- **Description:** Retrieve details of the user with ID 1.
- **Response:**
  - Format: JSON
  - Example:
    ```json
    { "id": 1, "name": "John Doe", "email": "john@example.com" }
    ```

### 1.3 GET /users/2
- **Description:** Retrieve details of the user with ID 2.
- **Response:**
  - Format: JSON
  - Example:
    ```json
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
    ```

## 2. Create new user

### 2.1 POST /users
- **Description:** Create a new user.
- **Request:**
  - Format: JSON
  - Example:
    ```json
    { "name": "New User", "email": "newuser@example.com" }
    ```
- **Response:**
  - Format: JSON
  - Example:
    ```json
    { "id": 3, "name": "New User", "email": "newuser@example.com" }
    ```

## 3. Edit user

### 3.1 PATCH /users/1
- **Description:** Edit details of the user with ID 1.
- **Request:**
  - Format: JSON
  - Example:
    ```json
    { "name": "Updated Name" }
    ```
- **Response:**
  - Format: JSON
  - Example:
    ```json
    { "id": 1, "name": "Updated Name", "email": "john@example.com" }
    ```

## 4. Delete user

### 4.1 DELETE /users/1
- **Description:** Delete the user with ID 1.
- **Response:**
  - Format: JSON
  - Example:
    ```json
    { "message": "User with ID 1 deleted successfully." }
    ```

Feel free to adapt and customize the details based on your specific project requirements. Adding request and response examples can be helpful for developers who will be interacting with your API.
