class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     * 
     * i is guaranteed to be greater then or equal to 0 and less than the number of elements in the array.
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        let c = this.getCapacity();
        let s = this.getSize();
        if(c==s){
            this.resize();
            s = this.getSize();
        }
        this.array[s] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const s = this.getSize();
        const r = this.array[s-1];
        this.array[s-1] = "";
        this.size--;
        return r;
    }
    /**
     * @returns {void}
     */
    resize() {
        const c = this.getCapacity();
        const newArray = new Array(c * 2);
        for (let i = 0; i < c; i++){
            newArray[i] = this.array[i];
        }
        this.array = newArray;
        this.capacity = c * 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
