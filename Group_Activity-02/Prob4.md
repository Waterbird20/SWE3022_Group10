<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 4. Socket Programming

### A. What does socket mean in computer network programming?
A socket is a door between an application process and the end-to-end transport protocol (TCP or UDP). It provides the interface through which applications send and receive data over the network.

### B. Why do computer networks need sockets?
___Standardized Interface___: Sockets provide a common API so that applications can access network services without dealing with low-level protocol details.

___Process Identification___: Using the combination of an IP address and a port number, sockets uniquely identify processes across the network.

___Transport Service Access___: Sockets allow applications to utilize transport layer services such as reliable byte-stream transfer with TCP or fast datagram delivery with UDP

### C. Explain the types of sockets on the Internet.
There are two main types of sockets used on the Internet: stream sockets and datagram sockets.

___Stream sockets___ are based on TCP, which is connection-oriented. They provide reliable and in-order delivery of a continuous stream of bytes between two processes. This makes them suitable for applications like web browsing with HTTP or email transfer with SMTP.

___Datagram sockets___, on the other hand, are based on UDP, which is connectionless. They support message-oriented communication but do not guarantee reliability, ordering, or delivery. Because of their lightweight nature and low overhead, datagram sockets are often used in real-time applications such as video streaming and online games.

<br>

### D. Make the description of how the following functions are used in C socket


#### Socket
The **socket** function creates a new socket, which becomes the endpoint for communication.
- Return: non-negative socket descriptor on success, -1 on failure.
#### Connect
The **connect** function is used by a client to initiate a connection to a server by specifying the server’s IP address and port number.
#### Bind 
The **bind** function assigns a local IP address and port number to a socket, usually on the server side, so that incoming requests can be directed properly.
#### Listen
The **listen** function places the socket into a passive, listening state, which prepares the server to accept incoming connection requests.
#### Accept
The **accept** function acknowledges an incoming client request and creates a new socket dedicated to communication with that client. The original listening socket remains available to wait for additional connections.

- Return: new non-negative socket descriptor on success, -1 on failure.