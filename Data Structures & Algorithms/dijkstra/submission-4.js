// Priority queue library
// https://datastructures-js.info/docs/priority-queue
// const { PriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
  /**
   * Implementation for Dijkstra's shortest path algorithm
   * @param {number} n Number of nodes in the graph
   * @param {number[][]} edges List of edges [source, destination, weight]
   * @param {number} src Source node
   * @returns {Object} Shortest distances from source node to other nodes
   */
  shortestPath(n, edges, src) {
    const shortest = {}; // { nodeName: distance }

    // Build an adjacency list: { source: [[destination, weight], ...] }
    const adjacencyList = {};
    for (let i = 0; i < n; i++) {
      adjacencyList[i] = [];
    }

    for (const [source, destination, weight] of edges) {
      adjacencyList[source].push([destination, weight]);
    }

    // Set the queue's priority rule: [0] distance, [1] node — sorted by smallest distance first
    const queue = new PriorityQueue((a, b) => a[0] - b[0]);

    // Add the start node to the queue. Its distance is zero.
    queue.enqueue([0, src]);

    // Loop until the queue is empty
    while (!queue.isEmpty()) {
      // Take out the node with the smallest distance, and store its distance and name
      const [minDist, minNode] = queue.dequeue();

      // Skip if this node has already been finalized
      if (shortest.hasOwnProperty(minNode)) {
        continue;
      }

      // This is the smallest distance, so finalize it
      shortest[minNode] = minDist; // { 0: 0 }

      // Calculate the distance to each neighbour and enqueue it
      for (const [destination, weight] of adjacencyList[minNode]) {
        // Enqueue every neighbour that hasn't been finalized yet
        // → this loop naturally registers nodes into `shortest` from smallest distance to largest
        // Current node's distance + edge weight to neighbour = neighbour's distance
        if (!shortest.hasOwnProperty(destination)) {
          queue.enqueue([minDist + weight, destination]);
        }
      }
    }

    // If any node was never reached, register it as -1 (as specified in the question)
    for (let i = 0; i < n; i++) {
      if (!shortest.hasOwnProperty(i)) {
        shortest[i] = -1;
      }
    }

    return shortest;
  }
}
