<!-- ---
marp: true
theme: default
paginate: true

--- -->

# 4. Example

### A. Explain the Web Caches and its benefits.

A web cache is <ins>a network entity that satisfies HTTP requests on behalf of an origin web server</ins>. To fulfill client requests without involving the origin server, a web cache maintains its own disk storage and keeps copies of recently requested objects in this local storage. When a client sends an HTTP request, the cache checks whether the requested object is stored locally. If found, it returns the object directly; if not, it forwards the request to the origin server, stores the response, and delivers the content to the client.
