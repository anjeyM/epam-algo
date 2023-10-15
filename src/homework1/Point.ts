export class Point {
  protected x: number;
  protected y: number;

  constructor()
  constructor(x: number, y: number)
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  // Distance from this point to (0, 0)
  distance(): number;
  // Distance from this point to a given instance of Point
  distance(other: Point): number;
  // Distance from this point to a given point (x, y)
  distance(x: number, y: number): number;

  // Distance implementation
  distance(firstArg?: Point | number, secondArg?: number): number {
    if (firstArg instanceof Point) {
        const point = firstArg;
        return this.calculateDistance(this.x, this.y, point.x, point.y);
    } else if (typeof firstArg === 'number' && typeof secondArg === 'number') {
        const x = firstArg;
        const y = secondArg;
        return this.calculateDistance(this.x, this.y, x, y);
    } else {
        return this.calculateDistance(this.x, this.y);
    }
  }

  // Helper function for distance calculation
  private calculateDistance(firstX: number, firstY: number, secondX?: number, secondY?: number): any {
    return Math.sqrt(Math.pow(firstX - (secondX || 0), 2) + Math.pow(firstY - (secondY || 0), 2));
  }
}
