<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 2. Dynamic Adaptive Streaming over HTTP (DASH)

### A. Explain DASH in server and client’s side.
**Server Side:**
- Divides video files into multiple chunks (segments)
- Each chunk is stored and encoded at different bit rates/quality levels
- Creates a manifest file that provides URLs for different chunks and their encoding rates
<!-- - Stores these chunks across CDN servers for distribution -->

---

### A. Explain DASH in server and client’s side.
**Client Side:**
- Periodically measures server-to-client bandwidth
- Consults the manifest file to request one chunk at a time
- Chooses the maximum coding rate sustainable given current bandwidth conditions
- Can dynamically switch between different quality levels throughout playback
- Uses client-side buffering to ensure smooth playout

---

### B. Specify the parts that ‘client’ determines in DASH.
**A. When**
- When to request each chunk (timing to prevent buffer starvation or overflow)
- When to switch quality levels based on bandwidth changes

**B. What**
- What encoding rate/quality level to request (higher quality when more bandwidth is available, lower quality when bandwidth is limited)
- What specific chunk to request next from the manifest

**C. Where**
- Where to request chunks from (can choose from different CDN servers/URLs)
- Which server location is "close" to the client or has high available bandwidth

---

### C. While delivering the contents based on DASH, how does Content Delivery Network (CDN) help for efficient stream?

Content Distribution Networks fundamentally enable DASH streaming efficiency by solving the massive scalability challenge of distributing video content to users worldwide through strategically managed servers in multiple geographically distributed locations. CDNs store copies of video content across their distributed infrastructure and direct user requests to optimal locations for the best user experience.

This distributed approach employs one of two key philosophies:

- *enter deep*: Strategy pioneered by Akamai that places server clusters directly within access networks of Internet Service Providers across thousands of locations to minimize the number of links and routers between users and content, getting as close as possible to end users

- *bring home*: Approach used by Limelight and others that builds larger clusters at fewer sites, typically at Internet Exchange Points, trading some performance for reduced maintenance overhead

<style scoped>
li {
    font-size: 24px;
}
</style>

---

### C. While delivering the contents based on DASH, how does Content Delivery Network (CDN) help for efficient stream?


The CDN infrastructure directly supports DASH's adaptive streaming by providing the geographic distribution that makes the client's "where to request chunks" decisions meaningful - when DASH clients measure bandwidth and request video chunks at appropriate quality levels, the CDN ensures these requests are served from nearby locations with optimal network paths. Additionally, CDNs employ intelligent content replication strategies, using pull-based approaches where clusters retrieve and cache popular content on-demand while removing less frequently requested videos, ensuring that the most relevant content is available close to users. This symbiotic relationship between DASH's client-side adaptation and CDN's distributed content placement enables the seamless delivery of millions of videos to hundreds of thousands of simultaneous users while maintaining the quality adaptation that makes modern video streaming possible.

