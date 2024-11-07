// Check if the test is being executed by a deployment with TARGET_HOST set
var targetHost = variables.get("TARGET_HOST")

if(targetHost) {
    request.headers["X-Canary"] = "yesplease";
    
    // Import and use URI.js to parse the URL
    const originalUrl = new URI(request.url);
    
    // Get the path after the hostname
    const path = originalUrl.path();
    
    request.url = `${targetHost}${path}`;
}
