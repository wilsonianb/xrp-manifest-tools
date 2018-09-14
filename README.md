# XRP Ledger Validator Manifest Tools

Gets (from [data.ripple.com](https://data.ripple.com)) and parses validator manifests.

## Usage

````
npm install
````

### Get manifest

```
VALIDATOR=<validator-public-key> node get-manifest.js
```

### Parse manifest

```
MANIFEST=<base64-encoded-manifest> node parse-manifest.js
```
