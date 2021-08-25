// Look at this Docker container object used to publish an algorithm
// on Ocean Protocol.
// Adapt the entry point variable from the python template below
// so that it uses “node” to work with your node.js algorithm.

{
  "algorithm": {
    "container": {
      "entrypoint": "node $ALGO",
      "image": "python",
      "tag": "3.9.4-alpine3.13"
    }
  }
}
