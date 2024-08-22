# script-libraries

JavaScript libraries compatible with the [Runscope API Test Script Engine](https://www.runscope.com/docs/api-testing/scripts).

## Available libraries

- [aws4](/aws4) ([Source](https://github.com/mhart/aws4)): Signs and prepares requests using AWS Signature Version 4.
- [left-pad](/leftpad.js) ([Source](https://github.com/stevemao/left-pad)): The one, the only.
- [URI.js](/uri.js) ([Source](https://medialize.github.io/URI.js)): URL parser. Includes IPv6, Punycode, SecondLevelDomains, and URITemplate add-ons.
- [himalaya.js](/himalaya.js) ([Source](https://github.com/andrejewski/himalaya)): Parse HTML into JSON. Includes an example of how to use it in a post-response script. (thanks to [@NKjoep](https://github.com/NKjoep) for the PR!)

## Snippets

- [aws-request-signer](/snippets/aws-request-signer.js): Pre-request script for use with IAM authenticated requests

To update these snippets

- update the source code and make a PR in this repo
- once the PR is merged, copy the file contents into the Runscope UI - [https://www.runscope.com/teams/3e6b1c72-9a3e-4c17-a05e-cfabdbf4d243/script-library](https://www.runscope.com/teams/3e6b1c72-9a3e-4c17-a05e-cfabdbf4d243/script-library)
