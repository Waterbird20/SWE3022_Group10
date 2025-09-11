---
marp: true
theme: default
paginate: true

---

**Group 10**
# Introduction to Computer Networks
## **Group Activity #01** <br> Assignment Solutions
### SWE3022 - Sungkyunkwan University



---

# 1. Internet Protocol Stack

### A. Explain the Internet protocol stack, and the encapsulation and the decapsulation of a user’s data by using air travel example


***Application Layer (Ticketing Service)***
At this highest layer, the user expresses a travel request similar to **purchasing an airline ticket**. In networking, this corresponds to user applications like web browsers requesting services such as accessing a web page.

***Transport Layer (Baggage Service)***
This layer ensures that the user's “luggage” (data) is safely tagged and tracked. Protocols like TCP guarantee reliable delivery **similar to how checked baggage is carefully managed**, while UDP is like carry-on luggage that travels faster with fewer guarantees.

--- 

### A. Explain the Internet protocol stack, and the encapsulation and the decapsulation of a user’s data by using air travel example

***Network Layer (Gate Service)***
Here, the “luggage” is **loaded onto the correct flight that routes it to the right city**. The Internet Protocol (IP) routes the data packet similarly by attaching addresses for source and destination airports and determining optimal paths.

***Link Layer (Runway Service)***
This layer handles the transfer of data between directly connected nodes, akin to ground crews mo**ving luggage carts from terminals to planes on the runway**. It uses MAC addresses to specify the next hop’s physical hardware address.

---

### A. Explain the Internet protocol stack, and the encapsulation and the decapsulation of a user’s data by using air travel example

***Physical Layer (Airplane Routing Service)***
The lowest layer represents the actual transmission of raw bits over physical media such as cables or wireless signals, **analogous to the physical aircraft traveling along established routes**.

---

### A. Explain the Internet protocol stack, and the encapsulation and the decapsulation of a user’s data by using air travel example


**Encapsulation**
Each layer adds its own control info [headers (and sometimes trailers)] to the data as it moves down toward the physical medium.
1. When the Application Layer is reached, the user initiates a ticket purchase (ticketing service).
2. When the Transport Layer is reached, the baggage is checked in (baggage service).
3. When the Network Layer is reached, the baggage is loaded at the gates (gate service).
4. When the Link Layer is reached, the airplane moves to the runway for takeoff (runway service).
5. When the Physical Layer is reached, airplane routing physically delivers all information (routing service).

<style scoped>
li {
    font-size: 20px;
}
</style>

---

### A. Explain the Internet protocol stack, and the encapsulation and the decapsulation of a user’s data by using air travel example


**Decapsulation**
At the receiver, each layer reads and removes its corresponding control info to reconstruct the original application data.
1. When the Physical Layer is reached, airplane routing brings the data to the destination (airplane routing).
2. When the Link Layer is reached, the airplane lands and baggage carts unload the cargo (runway landing).
3. When the Network Layer is reached, gates unload the baggage, and the airport information is checked (gates unload).
4. When the Transport Layer is reached, the baggage is claimed and delivered to the final owner (baggage claim).
5. When the Application Layer is reached, the passenger complains or verifies trip completion (ticket complain).

<style scoped>
li {
    font-size: 20px;
}
</style>

---

### B. Explain three examples of systems at the network edge

- *End Systems* (Hosts)
End systems represent the most fundamental components at the network edge, serving as the source and destination points for all network communication. These systems send packets of data and process application messages, functioning as the entry and exit points for information flowing through the network. End systems are commonly categorized into clients and servers based on their primary roles. Clients typically include desktops, laptops, smartphones, and other personal devices that request and consume network services. Servers represent more powerful machines designed to store and distribute web pages, stream video content, relay email, and provide various network services to multiple clients simultaneously.

---

### B. Explain three examples of systems at the network edge

- *Physical Media*
Physical media systems form the foundation of network edge connectivity by providing the actual transmission pathways for data. When a bit travels from source to destination, it passes through a series of transmitter-receiver pairs, with each bit transmitted by propagating electromagnetic waves or optical pulses across a physical medium. These media fall into two distinct categories: guided media, where waves are directed along solid mediums such as fiber-optic cables, twisted-pair copper wires, or coaxial cables, and unguided media, where waves propagate through the atmosphere and outer space, including wireless LAN transmissions and digital satellite channels. Examples of physical media include twisted-pair copper wire, coaxial cable, multimode fiber-optic cable, terrestrial radio spectrum, and satellite radio spectrum.

---

### B. Explain three examples of systems at the network edge

- *Access networks*
Access networks constitute the critical infrastructure that physically connects end systems to the first router, known as the edge router, establishing the initial path from the end system to any other distant end system. These networks serve as the bridge between individual users and the broader Internet infrastructure, operating in various settings including home environments, enterprise networks, and wide-area mobile wireless systems. Access networks encompass diverse technologies such as digital subscriber lines, cable modems, fiber-to-the-home systems, Ethernet connections in enterprise settings, and cellular networks for mobile connectivity, each designed to provide appropriate bandwidth and connectivity characteristics for their specific deployment environments.


---

### C. Compare and contrast the following access network technologies, focusing on their capabilities, limitations, and typical use cases

**A. Cable-based Access**
Cable access uses a shared Hybrid Fiber-Coax (HFC) network, leveraging existing cable TV infrastructure.
- Capabilities: Delivers high-speed, asymmetric service with downstream rates of 40 Mbps –1.2 Gbps and upstream rates of 30-100 Mbps.
- Limitations: Because the medium is shared, network performance degrades significantly for all users when many are active simultaneously, causing actual speeds to fall below advertised rates.
- Typical Use Cases: Best for residential homes for download-heavy activities like video streaming, gaming, and general web browsing.

<style scoped>
li {
    font-size: 22px;
}
</style>


---

### C. Compare and contrast the following access network technologies, focusing on their capabilities, limitations, and typical use cases

**B. Digital Subscriber Line (DSL)** 
DSL provides internet access over traditional telephone lines using twisted-pair copper wires. Unlike cable, it offers a dedicated connection for each user.
- Capabilities: Provides a dedicated, non-shared connection with asymmetric speeds. Typical downstream rates are 24-52 Mbps and upstream rates are 3.5-16 Mbps, though newer standards can reach 1 Gbps.
- Limitations: Performance is highly distance-dependent and weakens significantly as the distance from the provider's central office increases. The actual speed is also limited by the quality of the copper line and electrical interference.
- Typical Use Cases: A common choice for residential and small business users who are located close to a central office and prefer a dedicated line over a shared one.

<style scoped>
li {
    font-size: 22px;
}
</style>

---

### C. Compare and contrast the following access network technologies, focusing on their capabilities, limitations, and typical use cases

**C. Wireless Access Networks** 

Wireless access networks provide internet service without physical cables, transmitting data via radio waves from a provider's base station to a modem in the user's home.
- Capabilities: Allows for rapid deployment in areas lacking wired infrastructure. Modern networks deliver significant bandwidth, with 4G LTE offering tens of Mbps and 5G reaching hundreds of Mbps. It is not subject to the distance limitations of DSL.
- Limitations: The signal is susceptible to physical obstructions (like buildings and trees) and adverse weather conditions (like heavy rain). As the wireless spectrum is a shared resource, performance can degrade in densely populated areas with many users.
- Typical Use Cases: An excellent solution for rural or hard-to-reach areas where installing cables is impractical. It's also used for temporary installations and as a primary internet option for homes and businesses seeking an alternative to wired connections.

<style scoped>
li {
    font-size: 22px;
}
</style>

---

# 2. Network Core

### A. What is the packet switching? What is this method for?

In a network application, end systems exchange messages with each other. To send a message from a source end system to a destination end system, <ins>the source breaks long messages into smaller chunks of data known as packets</ins>. Between source and destination, each packet travels through communication links and packet switches, of which there are two predominant types: routers and link-layer switches. This packet switching method enables <ins>efficient utilization of network resources</ins> by allowing multiple communications to share the same physical infrastructure simultaneously, rather than dedicating entire communication paths to individual conversations.


---

### B. Explain the keywords of the packet switching:

- *Store and Forward* represents the fundamental transmission mechanism used by most packet switches at the inputs to the links. Store-and-forward transmission means that <ins>the packet switch must receive the entire packet before it can begin to transmit the first bit of the packet onto the outbound link.</ins> This approach ensures data integrity and allows the switch to make routing decisions based on complete packet information, though it introduces additional delay in the transmission process.

- *Transmission delay* represents <ins>the time delay required to push a packet from its head to its tail onto a communication link.</ins> It takes $\frac{L}{R}$ seconds to transmit an $L$ -bit packet into a link operating at $R$ bits per second. This delay is determined by the packet size and the link's transmission rate, representing a fundamental component of overall network delay.

---

### B. Explain the keywords of the packet switching:

$$
d_{\text{nodal}} = d_{\text{proc}} + d_{\text{queue}} + d_{\text{trans}} + d_{\text{prop}}
$$
- *End-to-end delay* encompasses <ins>the total time it takes for a data packet to travel from its source to its destination across a network.</ins> This delay includes multiple components such as processing delays, queuing delays, transmission delays, and propagation delays accumulated across all network elements in the path. 

---

### B. Explain the keywords of the packet switching:

- Packet queuing and packet loss occur due to the buffering mechanisms required in packet switches. For each attached link, the packet switch maintains an output buffer, also called an output queue, which stores packets that the router is about to send into that link. When packets arrive faster than they can be transmitted, <ins>they accumulate in these buffers, creating queuing delays.</ins> Since the amount of buffer space is finite, an arriving packet may find that the buffer is completely full with other packets waiting for transmission. In this case, <ins>packet loss will occur, requiring either the arriving packet or one of the already-queued packets to be dropped.</ins>

---

### C. Explain the differences between packet switching and circuit switching. 

**Resource Allocation**

- **Packet Switching**: Resources are **not reserved in advance**. The network's capacity is shared among all users on-demand, which allows for more users to use the network simultaneously. There is no dedicated path; each packet follows a path determined by routing protocols.

- **Circuit Switching**: End-to-end resources (e.g., bandwidth on the links) are **reserved** for the duration of the connection. A dedicated circuit path is established during a call setup phase, and these resources are guaranteed for that connection alone.

---

### C. Explain the differences between packet switching and circuit switching. 

**Performance Under Different Traffic Conditions**

- **Packet Switching**: This method is **excellent for "bursty" data traffic**(where data is sent in irregular bursts with idle periods in between). The resource sharing model is very efficient because the link can be fully utilized by other users when one user is idle. However, **under heavy traffic, it can lead to excessive congestion, which causes queuing delays and packet loss.**

- **Circuit Switching**: This method provides **guaranteed performance** because **resources are dedicated**. Once the circuit is established, there is no delay or loss due to congestion. However, **it is inefficient for bursty traffic** because the reserved resources are wasted during idle periods when no data is being sent.

---


### C. Explain the differences between packet switching and circuit switching. 

**Suitability for Different Types of Applications**

- **Packet Switching**: It is highly suitable for applications that can tolerate some delay and have bursty data patterns, such as web browsing, email, and file transfers. The challenge for packet-switched networks is providing guaranteed, circuit-like behavior for real-time applications.

- **Circuit Switching**: It is traditionally used for applications that require a constant, guaranteed bandwidth and have strict timing requirements, such as traditional audio and video applications.

---

# 3. HyperText Transfer Protocol(HTTP)

### A. Explain HyperText Transfer Protocol (HTTP)

The HyperText Transfer Protocol (HTTP) <ins>is the Web's application-layer protocol</ins>. It is implemented in two programs: a client program and a server program. The client program and server program, executing on different end systems, communicate by exchanging HTTP messages. HTTP defines the structure of these messages and how the client and server exchange them. This protocol follows a <ins>client-server model</ins> where browsers act as clients that send requests, and web servers respond with the requested content. 

---

### B. Explain HTTP Connections such as Non-Persistent Connections and Persistent Connections.

**Non-Persistent Connections** represent the traditional approach used in early HTTP implementations. In this method, <ins>each object requires its own separate TCP connection</ins>. The process involves opening a connection, transferring the object, and then immediately closing the connection. This approach <ins>creates significant overhead</ins> because a brand-new connection must be established and maintained for each requested object. For each of these connections, TCP buffers must be allocated and TCP variables must be kept in both the client and server, placing a substantial burden on the web server. Additionally, each object suffers a delivery delay of two RTTs due to the connection establishment overhead.

---

### B. Explain HTTP Connections such as Non-Persistent Connections and Persistent Connections.

**Persistent Connections**, introduced as the default behavior in HTTP/1.1, offer a <ins>more efficient alternative</ins>. In this approach, <ins>the server leaves the TCP connection open after sending a response, allowing subsequent requests and responses between the same client and server to be sent over the same connection</ins>. This method enables multiple objects to be transferred over a single connection, dramatically reducing the overhead associated with connection establishment and teardown. The persistent connection approach requires fewer RTTs and reduces the computational burden on both client and server systems.

---

### C. Assume that we request first index page of `www.skku.edu` through web browser. The index page contains text and 12 jpeg images. Compute the fetch time of the index page in each condition listed below:

When requesting the index page of `www.skku.edu` through a web browser, we encounter a scenario where the index page contains text and 12 JPEG images, resulting in 13 total objects that must be transmitted. The analysis requires considering the time needed to receive each object, denoted as $T_{\text{file}}$, along with the round-trip time (RTT) for network communication.

---

### C. Assume that we request first index page of `www.skku.edu` through web browser. The index page contains text and 12 jpeg images. Compute the fetch time of the index page in each condition listed below:

#### **Non-Persistent Serial:**
```
Total Time = 13 × (2 RTT + T_file) = 26 RTT + 13 T_file
```
In non-persistent mode, each object requires the initialization of a new TCP connection plus the time to request and receive the file. Since every object needs its own connection establishment (1 RTT) and request-response cycle (1 RTT), the total overhead becomes substantial when multiplied across all 13 objects.

---

### C. Assume that we request first index page of `www.skku.edu` through web browser. The index page contains text and 12 jpeg images. Compute the fetch time of the index page in each condition listed below:

#### **Persistent Serial:**
```
Total Time = 1 RTT + 13 × (1 RTT + T_file) = 14 RTT + 13 T_file
```
Persistent HTTP with serial mode enables a single TCP connection to handle multiple file transfers. After the initial connection establishment (1 RTT), each subsequent object only requires the request-response cycle (1 RTT) plus transmission time, resulting in significant time savings compared to the non-persistent approach.


---

# 4. Web Caches

### A. Explain the Web Caches and its benefits.

A web cache is <ins>a network entity that satisfies HTTP requests on behalf of an origin web server</ins>. To fulfill client requests without involving the origin server, a web cache maintains its own disk storage and keeps copies of recently requested objects in this local storage. When a client sends an HTTP request, the cache checks whether the requested object is stored locally. If found, it returns the object directly; if not, it forwards the request to the origin server, stores the response, and delivers the content to the client.

---

### A. Explain the Web Caches and its benefits.

Web caches provide several significant advantages for network performance. They <ins>substantially reduce response time for client requests</ins> since cached objects are served immediately from local storage without delays from contacting distant origin servers. Web caches also significantly <ins>reduce network traffic</ins> on an institution's access link, which often represents the most expensive and congested part of network infrastructure. By serving popular content locally, caches decrease data traversing these costly links, improving overall performance while reducing bandwidth costs. Additionally, the Internet's dense deployment of cache servers enables <ins>content providers with limited resources to deliver content more effectively</ins>, as their content gets stored and distributed through cache servers operated by service providers and content delivery networks.



---

## B. Assuming the conditions below, calculate the following metrics

### Given Parameters
- Web object size: **100 Kbits**
- Request rate: **12 requests/sec**
- Data rate to browsers: **1.2 Mbps**
- RTT: **3 seconds**
- Access link rate: **1.34 Mbps**

---

#### LAN Utilization

Utilization represents the ratio of the average data rate to the link's capacity. The average data rate on the Local Area Network (LAN) is the total data being sent from the institutional router to the browsers.

Given parameters:
- Average data rate on LAN = 1.2 Mbps
- LAN Capacity = 100 Mbps

```
LAN Utilization = Average data rate / LAN Capacity = 1.2 Mbps / 100 Mbps = 0.012
```

Therefore, **LAN utilization is 1.2%**.

---

#### Access Link Utilization

The access link connects the institutional network to the public Internet. All requests for web objects must pass through this link.

Given parameters:
- Average data rate on access link = 1.2 Mbps
- Access Link Capacity = 1.34 Mbps

```
Access Link Utilization = Average data rate / Access Link Capacity = 1.2 Mbps / 1.34 Mbps ≈ 0.8955
```

Therefore, **Access link utilization is approximately 89.6%**.

---

#### Average End-to-End Delay

The total end-to-end delay is the sum of the delay on the internet, the delay on the access link, and the delay on the LAN.

**Internet Delay:** This is the time to get from the institutional router to the origin server and back, which is given as the RTT. So, Internet Delay = 3 seconds.

**Access Link Transmission Delay (T_access):**
```
T_access = (Object size) / (Access link rate)
         = 100 Kbits / 1.34 Mbps
         = 0.1 Mbits / 1.34 Mbps
         ≈ 0.0746 sec
```

---

#### Average End-to-End Delay

**LAN Delay:** 
```
T_lan = (Object size) / (LAN capacity)
      = 0.1 Mbits / 100 Mbps
      = 0.001 sec
```


**Access Link Delay:** 
Therefore, the average end-to-end delay would be:

```
Average end-to-end delay = Internet Delay + Access Link Delay + LAN Delay
        = 3 sec + 0.0746 sec + 0.001 sec
        = 3.0756 sec
```
Note that this calculation considers only the transmission delays and does not account for queuing delays that would occur due to the high access link utilization (89.6%).