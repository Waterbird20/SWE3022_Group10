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

***Examples***
are HTTP for web browsing and IMAP for Email services.

### B. Explain the peer-to-peer (P2P) architecture. Suggest two example applications that use a P2P architecture.

***Peer-to-Peer Architecture***
is a networking paradigm in which there is no always-on central server. Instead, arbitrary end systems, called peers, directly communicate with each other. In this model, peers both request services from other peers and provide services in return, which enables a decentralized exchange of resources. A key characteristic of P2P systems is self-scalability: when new peers join the network, they contribute not only additional demand but also new service capacity. However, peers are often intermittently connected and may change IP addresses, which makes management more complex compared to the client–server model.

***Examples***
are P2P file sharing and BitTorrent.
