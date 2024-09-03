// This script is used to sign the AWS request by the IAM role name provided. It is to be used in the Pre-request Scripts tab.
// Prerequisites:
// 1. Requires SIGv4 is Enabled For Environments via the aws4.js library
//    More info here - https://ibotta.atlassian.net/wiki/spaces/TT/pages/3214376989/Runscope+-+SIGv4+Requests#Required-Role-Attachments
// 2. This script requires you to define the following initial variable(s)
//    - AWS_ROLE_NAME

var awsRoleName = variables.get("AWS_ROLE_NAME");
if (!awsRoleName) {
  throw new Error("Missing required initial variable(s): AWS_ROLE_NAME");
}

var fullPath = request.path;
if (request.method == "GET" && request.params.length > 0) {
  var queryString = request.url.slice(request.url.indexOf("?"));
  fullPath += queryString; //Re-add queryString with '?' to full path e.g. '?key1=val1&...'
}

var opts = {
  host: request.host,
  path: fullPath,
  method: request.method,
  body: request.body,
  headers: request.headers,
};

// If not communicating directly with AWS service, we can assume a custom domain api gateway
if (request.host.indexOf("amazonaws.com") < 0) {
  opts.service = "execute-api";
} else if (request.host.indexOf("s3.amazonaws.com") > 0) {
  opts.service = "s3";
  opts.region = "us-east-1";
}

var awsObj = aws4.sign(opts, {
  accessKeyId: variables.get(awsRoleName + "_AKI"),
  secretAccessKey: variables.get(awsRoleName + "_SAK"),
  sessionToken: variables.get(awsRoleName + "_STKN"),
});

// Currently there is no need to re-update path, this causes issue for GET request with queryString. If this is needed for other request types, we can re-add it based on specific use case
// request.path = awsObj.path;

for (var header in awsObj.headers) {
  request.headers[header] = awsObj.headers[header];
}
