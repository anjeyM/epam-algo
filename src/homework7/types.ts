export interface Path {
    path: string[];
    distance: number;
}
  
export interface WeightedGraph<T> {
    addVertex(key: string): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
    getVertices(): T[];
    getEdges(): { from: T; to: T; weight: number }[];
    getNeighbors(vertex: T): { neighbor: T; weight: number }[];
}

export interface Keyed {
    key: string;
}