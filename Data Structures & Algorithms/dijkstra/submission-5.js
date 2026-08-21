// Priority queue library
// https://datastructures-js.info/docs/priority-queue
// const { PriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
  /**
   * Dijkstra's shortest path algorithm using a priority queue (binary heap)
   *
   * Time complexity:  O((V + E) log V)
   * Space complexity: O(V + E)
   *   V = number of nodes (n)
   *   E = number of edges (edges.length)
   *
   * See complexity breakdown below the class.
   *
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

    // Priority queue sorted by smallest distance first: [distance, node]
    const queue = new PriorityQueue((a, b) => a[0] - b[0]);
    queue.enqueue([0, src]);

    while (!queue.isEmpty()) {
      // Take out the node with the smallest distance, and store its distance and name
      const [minDist, minNode] = queue.dequeue();

      // Skip if this node has already been finalized
      // — the queue's min-first property guarantees any later
      // occurrence of this node can only be equal or larger.
      if (shortest.hasOwnProperty(minNode)) continue;

      // This is the smallest distance, so finalize it
      shortest[minNode] = minDist;

      // Enqueue every neighbour that hasn't been finalized yet
      // → this loop naturally registers nodes into `shortest` from smallest distance to largest
      for (const [destination, weight] of adjacencyList[minNode]) {
        if (!shortest.hasOwnProperty(destination)) {
          queue.enqueue([minDist + weight, destination]);
        }
      }
    }

    // Fill in -1 for any node that was never reached (as specified in the question)
    for (let i = 0; i < n; i++) {
      if (!shortest.hasOwnProperty(i)) shortest[i] = -1;
    }

    return shortest;
  }
}

/**
 * ── Time complexity ──────────────────────────────────────
 *
 * | step                           | cost               |
 * |--------------------------------|------------------- |
 * | init adjacencyList (empty)     | O(V)               |
 * | build adjacencyList from edges | O(E)               |
 * | main loop: enqueue/dequeue     | O(E log E)         |
 * |   (up to E enqueues, each      |                    |
 * |    O(log E) via binary heap)   |                    |
 * | fill unreached nodes with -1   | O(V)               |
 *
 * Total: O(V + E log E)
 *      = O(V + E log V)     (log E ≈ log V², a constant factor away from log V)
 *      = O((V + E) log V)   (standard form)
 *
 * ── Space complexity ─────────────────────────────────────
 *
 * | structure                        | cost   |
 * |----------------------------------|--------|
 * | shortest (final result)          | O(V)   |
 * | adjacencyList                    | O(V+E) |
 * | queue (up to E entries)          | O(E)   |
 * | loop-local variables ([a,b] etc.)| O(1)   |
 *
 * Total: O(V + E)
 */