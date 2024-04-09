const Graph = require('./graph');
const fs = require('fs');

// Mocking fs.readFile
jest.mock('fs', () => ({
  readFile: jest.fn()
}));

describe('Graph class', () => {
  describe('addEdge method', () => {
    it('should add an edge between two vertices', () => {
      const graph = new Graph(3, 0);
      graph.addEdge(0, 1);
      expect(graph.adjList[0]).toContain(1);
      expect(graph.outDegree[0]).toBe(1);
      expect(graph.inDegree[1]).toBe(1);
    });
  });

  describe('printDegrees method', () => {
    it('should print the degrees of each vertex', () => {
      const graph = new Graph(3, 0);
      graph.addEdge(0, 1);
      graph.addEdge(1, 2);
      const consoleSpy = jest.spyOn(console, 'log');
      graph.printDegrees();
      expect(consoleSpy).toHaveBeenCalledWith('Степінь вершин:');
      expect(consoleSpy).toHaveBeenCalledWith('Вершина 0:');
      expect(consoleSpy).toHaveBeenCalledWith('  Вхідний ступінь: 0');
      expect(consoleSpy).toHaveBeenCalledWith('  Вихідний ступінь: 1');
      expect(consoleSpy).toHaveBeenCalledWith('Вершина 1:');
      expect(consoleSpy).toHaveBeenCalledWith('  Вхідний ступінь: 1');
      expect(consoleSpy).toHaveBeenCalledWith('  Вихідний ступінь: 1');
      expect(consoleSpy).toHaveBeenCalledWith('Вершина 2:');
      expect(consoleSpy).toHaveBeenCalledWith('  Вхідний ступінь: 1');
      expect(consoleSpy).toHaveBeenCalledWith('  Вихідний ступінь: 0');
    });
  });

});