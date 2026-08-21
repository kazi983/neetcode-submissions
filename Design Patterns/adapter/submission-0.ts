class SquareHole {
  /**
   * @param {number} sideLength
   */
  constructor(private sideLength: number) {
    this.sideLength = sideLength;
  }

  /**
   * @param {Square} square
   * @return {boolean}
   */
  canFit(square: Square): boolean {
    return this.sideLength >= square.getSideLength();
  }
}

class Square {
  /**
   * @param {number} sideLength
   */
  constructor(private sideLength = 0) {
    this.sideLength = sideLength;
  }

  /**
   * @return {number}
   */
  getSideLength(): number {
    return this.sideLength;
  }
}

class Circle {
  /**
   * @param {number} radius
   */
  constructor(private radius: number) {
    this.radius = radius;
  }

  /**
   * @return {number}
   */
  getRadius(): number {
    return this.radius;
  }
}

class CircleToSquareAdapter extends Square {
  /**
   * @param {Circle} circle
   */
  constructor(private circle: Circle) {
    super(circle.getRadius() * 2);
  }
}