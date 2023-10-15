import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;

  protected points: Point[];

  constructor(points: Point[])
  constructor(points: Point[], color: string, filled: boolean)
  constructor(points: Point[], color = 'green', filled = true) {
    if (points.length < 3) {
      throw new Error('Should have at least 3 poits.');
    }
    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString(): string {
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${[...this.points].join(', ')}.`;
  }

  getPerimeter(): number {
    let perimeter = 0;
    const pointsLength = this.points.length;
    for (let i = 0; i < pointsLength - 1; i++) {
        perimeter += this.points[i].distance(this.points[i + 1]);
    }
    // Distance from the last point to the first to ensure that the shape is closed.
    perimeter += this.points[pointsLength - 1].distance(this.points[0]);
    return perimeter;
}

  abstract getType(): string
}
