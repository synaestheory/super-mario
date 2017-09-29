export class Matrix {
    constructor() {
        this.grid = [];
    }

    forEach(fn) {
        this.grid.forEach((col, x) => {
            col.forEach((tile, y) => {
                fn(tile, x, y);
            });
        });
    }

    clear() {
        this.grid = [];
    }

    get(x, y) {
        const col = this.grid[x];
        if (col) {
            return col[y];
        }
        return undefined;
    }

    set(x, y, value) {
        if (!this.grid[x]) {
            this.grid[x] = [];
        }

        this.grid[x][y] = value;
    }
}

export class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }

    clone() {
        return new Vec2(this.x, this.y);
    }

    copy(vec2) {
        this.set(vec2.x, vec2.y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
}
