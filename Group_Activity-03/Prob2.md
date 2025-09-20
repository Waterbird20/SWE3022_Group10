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
