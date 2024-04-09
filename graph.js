const fs = require("fs");

class Graph {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.adjList = new Array(n).fill(null).map(() => []);
    this.inDegree = new Array(n).fill(0);
    this.outDegree = new Array(n).fill(0);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.outDegree[u]++;
    this.inDegree[v]++;
  }

  printDegrees() {
    console.log("Степінь вершин:");
    for (let i = 0; i < this.n; i++) {
      console.log(`Вершина ${i}:`);
      console.log(`  Вхідний ступінь: ${this.inDegree[i]}`);
      console.log(`  Вихідний ступінь: ${this.outDegree[i]}`);
    }
  }

  isHomogeneous() {
    for (let i = 0; i < this.n; i++) {
      if (this.inDegree[i] !== this.outDegree[i]) {
        return false;
      }
    }
    return true;
  }

  printHomogeneity() {
    if (this.isHomogeneous()) {
      const degree = this.inDegree[0];
      console.log("Граф є однорідним з степенем", degree);
    } else {
      console.log("Граф не є однорідним");
    }
  }

  printIsolatedAndPendantVertices() {
    console.log("Висячі вершини:");
    for (let i = 0; i < this.n; i++) {
      if (this.outDegree[i] === 0) {
        console.log(`  ${i}`);
      }
    }

    console.log("Ізольовані вершини:");
    for (let i = 0; i < this.n; i++) {
      if (this.inDegree[i] === 0 && this.outDegree[i] === 0) {
        console.log(`  ${i}`);
      }
    }
  }
}

function main() {
  const inputFile = "input.txt";
  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error("Помилка читання файлу:", err);
      return;
    }

    const lines = data.split("\n");
    const [n, m] = lines[0].split(" ").map(Number);
    const graph = new Graph(n, m);

    for (let i = 1; i <= m; i++) {
      const [u, v] = lines[i].split(" ").map(Number);
      graph.addEdge(u, v);
    }

    graph.printDegrees();
    graph.printHomogeneity();
    graph.printIsolatedAndPendantVertices();
  });
}

main();

module.exports = Graph;