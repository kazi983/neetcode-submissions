class Solution {
    /**
     * Dijkstra's shortest path algorithm (シンプル版・ヒープなし)
     * @param {number} n Number of nodes in the graph
     * @param {number[][]} edges List of edges [src, dst, weight]
     * @param {number} src Source node
     * @returns {Object} Shortest distances from source node to other nodes
     */
    shortestPath(n, edges, src) {
        const adj = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        for (const [s, d, w] of edges) {
            adj[s].push([d, w]);
        }

        const shortest = {};
        // [weight, node] のペアを配列で管理する
        const candidates = [[0, src]];

        while (candidates.length > 0) {
            // 配列の中から最小の重みを持つ要素を線形探索
            let minIndex = 0;
            for (let i = 1; i < candidates.length; i++) {
                if (candidates[i][0] < candidates[minIndex][0]) {
                    minIndex = i;
                }
            }

            const [w1, n1] = candidates[minIndex];
            candidates.splice(minIndex, 1); // 取り出した要素を削除

            if (shortest.hasOwnProperty(n1)) {
                continue;
            }
            shortest[n1] = w1;

            for (const [n2, w2] of adj[n1]) {
                if (!shortest.hasOwnProperty(n2)) {
                    candidates.push([w1 + w2, n2]);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!shortest.hasOwnProperty(i)) {
                shortest[i] = -1;
            }
        }

        return shortest;
    }
}