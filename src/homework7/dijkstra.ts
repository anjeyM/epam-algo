import {WeightedGraph, Path, Keyed} from './types';

export class Dijkstra<T extends Keyed> {
    private graph: WeightedGraph<T>;
  
    constructor(graph: WeightedGraph<T>) {
      this.graph = graph;
    }
  
    findShortestPath(start: T, end: T): Path {
      const distances: Record<string, number> = {};
      const previous: Record<string, T | null> = {};
      const visited: Record<string, boolean> = {};
  
      const vertices = this.graph.getVertices();
      vertices.forEach((vertex) => {
        distances[vertex.key] = Infinity;
        previous[vertex.key] = null;
        });
  
      distances[start.key] = 0;
  
      while (true) {
        let currentVertex: T | null = null;
        let minDistance = Infinity;
  
        // Find the unvisited vertex with the smallest distance
        vertices.forEach((vertex) => {
          if (!visited[vertex.key] && distances[vertex.key] < minDistance) {
            currentVertex = vertex;
            minDistance = distances[vertex.key];
          }
        });
  
        if (!currentVertex) break; // All vertices visited
  
        // Mark the current vertex as visited
        visited[currentVertex.key] = true;
  
        // Update distances to neighbors
        const neighbors = this.graph.getNeighbors(currentVertex);
        neighbors.forEach(({ neighbor, weight }) => {
          const newDistance = distances[currentVertex!.key] + weight;
          if (newDistance < distances[neighbor.key]) {
            distances[neighbor.key] = newDistance;
            previous[neighbor.key] = currentVertex;
          }
        });
    }
  
      // Build the path
      const path: string[] = [];
      let currentVertex: T | null = end;
      while (currentVertex) {
        path.unshift(currentVertex.key);
        currentVertex = previous[currentVertex.key];
      }
  
      return {
        path,
        distance: distances[end.key],
      };
    }
  
    findAllShortestPaths(start: T): Record<string, Path> {
      const allShortestPaths: Record<string, Path> = {};
      const vertices = this.graph.getVertices();
  
      vertices.forEach((vertex) => {
        const path = this.findShortestPath(start, vertex);
        allShortestPaths[vertex.key] = path;
      });
  
      return allShortestPaths;
    }
}