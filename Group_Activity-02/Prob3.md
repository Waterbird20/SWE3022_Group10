<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 3. Domain Name System (DNS)

### A. Explain the Domain Name System (DNS).

Bok JaeMin

***Domain Name System(DNS)***
is a is a fundamental Internet service that translates human-readable names into IP addresses, which are used by hosts and routers to deliver data. Technically, DNS is a distributed database implemented in a hierarchy of many name servers. It operates as an application-layer protocol, where hosts and name servers communicate to resolve names into addresses (or vice versa). This allows users to use simple names while the underlying network uses numerical IP addresses for routing.

### B. Explain the three classes of DNS servers, i.e., Root, TLD, and Authoritative DNS Servers.

Bok JaeMin

***Root DNS Servers*** are the highest level and direct queries to the correct Top-Level Domain(TLD) servers. ***Top-Level Domain(TLD) Servers*** store imformation about authoritative servers for domains under their TLD and forward queries accordingly. Finally, ***Authoritative DNS Servers*** hold the actual domain records and provide the final IP address, such as www.amazon.com.


### C. Explain two DNS name resolutions such as iterative resolution and recursive resolution in detail. 

Bok JaeMin

