// 優先度付きキューのライブラリ
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
    const shortest = {}; // {{ノード名: 重み}}

    const distanceMap = {}; // { src: {destination: weight} }
    for (let i = 0; i < n; i++) {
      distanceMap[i] = [];
    }

    for (const [source, destination, weight] of edges) {
      distanceMap[source].push([destination, weight]);
    }

    // キューの優先ルールを指定。[0]重み [1]ノード とし、重みが少ない順に並べる
    const queue = new PriorityQueue((a, b) => a[0] - b[0]);

    // 開始ノードをキューに指定。重みはゼロ
    queue.enqueue([0, src]);

    // キューが空になるまでループ
    while (!queue.isEmpty()) {
      // 重みが最小のノードを取り出し、重みとノードをそれぞれ変数に格納する
      const [minDist, minNode] = queue.dequeue();

      // 探索対象が確定済みならスキップ
      if (shortest.hasOwnProperty(minNode)) {
        continue;
      }

      // 重みが最小なので確定登録する
      shortest[minNode] = minDist; // {0:0}

      // 隣接ノードそれぞれの重みを計算してキューに登録する
      for (const [destination, weight] of distanceMap[minNode]) {
        // 隣接ノードが確定登録されていない場合はすべてキューに登録する → 最小のものからshortestに登録されるという循環
        // 探索対象の重み + 隣接ノードまでの距離 = 隣接ノードの重み を計算する
        if (!shortest.hasOwnProperty(destination)) {
          queue.enqueue([minDist + weight, destination]);
        }
      }
    }

    // 到達できていないノードがあれば {ノード:-1}を登録 (問題文に記載の通り)
    for (let i = 0; i < n; i++) {
      if (!shortest.hasOwnProperty(i)) {
        shortest[i] = -1;
      }
    }

    return shortest;
  }
}