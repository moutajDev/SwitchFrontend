window.onload = function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let url = window.location.pathname;
    let protocol = window.location.protocol;
    let browser = window.navigator.userAgent;

    document.getElementById('width_js').textContent = "Screen width: " + width + " pixels";
    document.getElementById('height_js').textContent = "Screen height: " + height + " pixels";
    document.getElementById('url_js').textContent = url;
    document.getElementById('protocol_js').textContent = protocol;
    document.getElementById('browser_js').textContent =  browser;
}