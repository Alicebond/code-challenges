export class Matrix {
  constructor(input) {
    this._rows = input.split("\n").map((i) => i.split(" ").map((i) => +i));
    this._columns = this._rows[0].map((_, index) =>
      this._rows.map((i) => i[index])
    );
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
