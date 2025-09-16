<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 3. Domain Name System (DNS)

### A. Explain the Domain Name System (DNS).

<!-- Bok JaeMin -->

***Domain Name System(DNS)*** is a fundamental Internet service that translates human-readable names into IP addresses, which are used by hosts and routers to deliver data. Technically, DNS is a distributed database implemented in a hierarchy of many name servers. It operates as an application-layer protocol, where hosts and name servers communicate to resolve names into addresses (or vice versa). This allows users to use simple names while the underlying network uses numerical IP addresses for routing.

---

### B. Explain the three classes of DNS servers, i.e., Root, TLD, and Authoritative DNS Servers.

<!-- Bok JaeMin -->

***Root DNS Servers*** are the highest level and direct queries to the correct Top-Level Domain(TLD) servers.
***Top-Level Domain(TLD) Servers*** store imformation about authoritative servers for domains under their TLD and forward queries accordingly.
Finally, ***Authoritative DNS Servers*** hold the actual domain records and provide the final IP address, such as www.amazon.com.

---

### C. Explain two DNS name resolutions such as iterative resolution and recursive resolution in detail. 

<!-- Bok JaeMin -->

There are two types of DNS name resolution: iterative and recursive.
In ***iterative resolution***, each contacted DNS server does not return the final answer but instead refers the client (or local DNS) to another server closer to the answer.(e.g., root → TLD → authoritatives).
In ***recursive resolution***, the queried DNS server takes full responsibility: it contacts other servers on behalf of the client and returns the final IP address. Iterative queries reduce load on upper servers, while recursive queries simplify the client’s job but increase the burden on higher-level DNS servers.

---

#### C. Explain two DNS name resolutions such as iterative resolution and recursive resolution in detail. 

<!-- Lee Taeyeong -->

There are two types of DNS name resolution: iterative and recursive.  

In ***iterative resolution***, the client first asks its local DNS for the IP address of a domain. The local DNS then queries the root server, which does not give the final answer but instead points back to the local DNS with the address of the TLD server. The local DNS continues by querying the TLD server, which again refers it to the authoritative server for the domain. Finally, the local DNS queries the authoritative server and receives the final IP address, which it returns to the client.  
(e.g., client → local DNS → root → local DNS → TLD → local DNS → authoritative → local DNS → client)  

---

#### C. Explain two DNS name resolutions such as iterative resolution and recursive resolution in detail. 

In ***recursive resolution***, the client asks the local DNS once for the IP address of a domain. This time, the local DNS takes full responsibility for the entire process. It queries the root server, then the TLD server, and finally the authoritative server, gathering the necessary information step by step. After receiving the final IP address, the local DNS responds directly to the client, so the client does not need to make any further queries.  
(e.g., client → local DNS → root → TLD → authoritative → local DNS → client)  

In addition, DNS uses ___caching___ to improve efficiency. Once resolved, a domain’s IP can be reused from cache, avoiding repeated queries to root, TLD, and authoritative servers, thus reducing traffic and congestion.