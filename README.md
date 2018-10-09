# EOS Ledger TransportU2F Browser Example

This repository show how to setup the Javascript compilation workflow to get the Ledger working in the browser. 

## Install dependancies

    npm install -g http-server babel-cli browserify

## Usage

    npm install
    npm run build

The command "npm run build" will build an index.browserify.js under dist/ that can be included in the browser.

The U2F USB interface is currently only supported by google chrome and it only works if the site is served via https.

In order to start a development web server with https for development:

    http-server -c-1 -S

For convenience, the repo includes self-signed certificates for localhost (cert.pem and key.pem).
