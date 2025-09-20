<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 4. Socket Programming

### D. Make the description of how the following functions are used in C socket
<!-- Lee Taeyeong -->



- The **socket** function creates a new socket, which becomes the endpoint for communication. It returns non-negative socket descriptor on success, -1 on failure.
- The **connect** function is used by a client to initiate a connection to a server by specifying the server’s IP address and port number.
- The **bind** function assigns a local IP address and port number to a socket, usually on the server side, so that incoming requests can be directed properly.
- The **listen** function places the socket into a passive, listening state, which prepares the server to accept incoming connection requests.
- The **accept** function acknowledges an incoming client request and creates a new socket dedicated to communication with that client. The original listening socket remains available to wait for additional connections. It returns new non-negative socket descriptor on success, -1 on failure.

<style scoped>
li {
    font-size: 25px;
}
</style>