import { Shape } from "./Shape";
import { Point } from './Point';

export class Triangle extends Shape {
  constructor(
    private firstShape: Point, 
    private secondShape: Point, 
    private thirdShape: Point, 
    color = 'green', 
    filled = true) {
      super([firstShape, secondShape, thirdShape], color, filled);
  }

  toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }

  getType(): string {
    const distance1 = this.firstShape.distance(this.secondShape).toFixed(2);
    const distance2 = this.secondShape.distance(this.thirdShape).toFixed(2);
    const distance3 = this.thirdShape.distance(this.firstShape).toFixed(2);

    if (distance1 == distance2 && distance2 == distance3) {
        return 'equilateral triangle';
    } else if (distance1 == distance2 || distance2 == distance3 || distance3 == distance1) {
        return 'isosceles triangle';
    } else {
        return 'scalene triangle';
    }
  }
}
