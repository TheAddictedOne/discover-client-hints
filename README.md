# Discover User-Agent Client-Hints

## Install
```
npm i
npm start
# Now you can browse http://localhost on Chrome
# As of 29 April 2021, Chrome is the only major browser implementing UACH
```

## TL;DR
1. The browser does the 1st request to `http://localhost`
2. The server answer with a `Accept-CH` response header, filled with checkboxes checked
3. Subsequent requests (for example `style.css`) are sent with the request headers asked from `Accept-CH` response header, in the previous request

## Usage
- Check boxes to change `Accept-CH` response header value
- Click on the reload button to reload the page
- Headers are sent in `GET` query params, then parsed by the server, to minimise complexity and ease usability

## Notes

### 29, April 2021

**Browsers**
- Working on Chrome
- Not working on Brave
- Not working on Firefox

**Combinations**
- Emulating mobile devices gives different result: good to simulate how it works on mobile
