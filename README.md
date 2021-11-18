# Continuous Token Converter

Basic frontend to let people trade (ie. buy and sell) tokens against the bonding curve.

The project is based on [Aragon's convert repo](https://github.com/aragon/convert.aragon.org).

## TODO

- [	] Fix Portis connector. It's failing due to a CORS issue on public RSK node. This seems not to be an error on main Sovryn app although, besides the version being different the error is node related.

```
Access to XMLHttpRequest at 'https://public-node.rsk.co/' from origin 'https://widget.portis.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
