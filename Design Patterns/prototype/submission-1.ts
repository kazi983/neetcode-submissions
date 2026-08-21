class Shape {
  /**
   * @return {Shape}
   */
  clone(): Shape {
    return new Shape();
  }

  getHeight(): number | void {}
  getWidth(): number | void {}
  getLength(): number | void {}
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
    this.width = width;
    this.height = height;
  }

  /**
   * @return {number}
   */
  getWidth(): number {
    return this.width;
  }

  /**
   * @return {number}
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * @return {Shape}
   */
  clone(): Shape {
    return new Rectangle(this.getWidth(), this.getHeight());
  }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
  constructor(private length: number) {
    super();
    this.length = length;
  }

  /**
   * @return {number}
   */
  getLength(): number {
    return this.length;
  }

  /**
   * @return {Shape}
   */
  clone(): Shape {
    // Write your code here
    return new Square(this.getLength());
  }
}

class Test {
  /**
   * @param {Shape[]} shapes
   * @return {Shape[]}
   */
  cloneShapes(shapes: Shape[]): Shape[] {
    const res: Shape[] = [];
    shapes.map((shape) => {
      return res.push(shape.clone());
    });

    return res;
  }
}