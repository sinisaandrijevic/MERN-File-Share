# Simple MERN Stack File Sharing App

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) stack application for file sharing. Users can upload files, which are stored inside the `upload` folder on the server, and access them through the admin dashboard using specific user credentials.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sinisaandrijevic/MERN-File-Share.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ./MERN-File-Share
    ```

3. Navigate to the server directory and install dependencies:
    ```bash
    cd server
    npm install
    ```

4. Modify the MongoDB URL:
    - Inside the `database` folder, locate the `db.js` file.
    - Modify the `dbUrl` constant to point to your MongoDB instance.

5. Set up configuration:
    - Inside the `config` folder, create a file named `config.js`.
    - Define configuration variables in the following format:
    ```javascript
    module.exports = {
        dbUrl: "your_mongodb_url",
        adminUser: {
            username: "admin",
            password: "your_admin_password"
        }
    };
    ```

6. Start the server:
    ```bash
    npm start
    ```

7. Navigate to the client directory:
    ```bash
    cd ../client
    ```

8. Install client dependencies:
    ```bash
    npm install
    ```

9. Start the client:
    ```bash
    npm start
    ```

## Usage

- Once the server and client are running, you can access the application in your browser.
- Upload files through the provided interface.
- Access uploaded files via the admin dashboard using the provided admin credentials.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
