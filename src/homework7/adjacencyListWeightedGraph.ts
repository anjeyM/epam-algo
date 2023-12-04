import {WeightedGraph, Keyed} from './types';
import {Edge} from './edge';
import {Vertex} from './vertex';

export class AdjacencyListWeightedGraph<T extends Keyed> implements WeightedGraph<T> {
    private vertices: T[] = [];
    private edges: Edge<T>[] = [];
    private adjacencyList: Record<string, { neighbor: T; weight: number }[]> = {};
  
    addVertex(key: string): void {
      const vertex = new Vertex(key) as T;
      this.vertices.push(vertex);
      this.adjacencyList[key] = [];
    }
  
    addEdge(vertex1: T, vertex2: T, weight: number): void {
      const edge = new Edge(vertex1, vertex2, weight);
      this.edges.push(edge);
      this.adjacencyList[vertex1.key].push({ neighbor: vertex2, weight });
      this.adjacencyList[vertex2.key].push({ neighbor: vertex1, weight });
    }
  
    getVertices(): T[] {
      return this.vertices;
    }
  
    getEdges(): { from: T; to: T; weight: number }[] {
      return this.edges.map((edge) => ({
        from: edge.from,
        to: edge.to,
        weight: edge.weight,
      }));
    }
  
    getNeighbors(vertex: T): { neighbor: T; weight: number }[] {
      return this.adjacencyList[vertex.key];
    }
  }