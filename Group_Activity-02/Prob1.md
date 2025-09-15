<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 1. Network Application Architecture

### A. Explain the client-server architecture. Suggest two example applications that use a client-server architecture.

Bok JaeMin

***Client-Server Architecture***
is a network paradigm in which services are provided by a central server and requested by multiple clients. The server is an always-on host with a permanent IP address, usually located in data centers for scalability and reliability. Clients, on the other hand, contact and communicate with the server to request resources or services. Unlike servers, clients may be intermittently connected to the network and often use dynamic IP addresses. Importantly, clients do not communicate directly with each other; instead, all communication goes through the server.

***Transport Layer (Baggage Service)***
This layer ensures that the user's “luggage” (data) is safely tagged and tracked. Protocols like TCP guarantee reliable delivery **similar to how checked baggage is carefully managed**, while UDP is like carry-on luggage that travels faster with fewer guarantees.

### B. Explain the peer-to-peer (P2P) architecture. Suggest two example applications that use a P2P architecture.
