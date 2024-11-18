# Web-IDE

A web-based Integrated Development Environment (IDE) that allows users to write, edit, and execute code in real-time. Built with modern web technologies, Web-IDE provides a rich and seamless coding experience.

## Features
- **Real-Time Terminal**: Powered by Node-PTY and Xterm.js for terminal emulation.
- **Code Editor**: Integrated with AceEditor for syntax highlighting and advanced editing features.
- **Live Collaboration**: Enable real-time updates and interactions using Socket.io.
- **Fast and Scalable Backend**: Built with Node.js and Express for efficient server-side handling.

## Technologies Used
- **Frontend**: React.js, AceEditor
- **Backend**: Node.js, Express
- **Terminal Emulation**: Node-PTY, Xterm.js
- **Real-Time Communication**: Socket.io

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/web-ide.git
   cd web-ide

2. Install dependencies for both client and server:
   ```bash
   # Navigate to the client folder
    cd client
    npm install
    
    # Navigate to the server folder
    cd ../server
    npm install

3. Start the server:
   ```bash
   node index.js
   
4. Start the client:
   ```bash
   npm run dev

## Usage
- Open the app in your browser at http://127.0.0.1:5173/.
- Use the code editor to write or edit code.
- Interact with the terminal for compiling and executing commands.
- Collaborate in real-time with others using the provided features.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/abhishekpd01/WEB-IDE?tab=MIT-1-ov-file) file for details.
