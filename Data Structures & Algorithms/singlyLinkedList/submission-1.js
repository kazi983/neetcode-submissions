/**
 * Singly Linked List
 * 
 */
class LinkedList {
    /**
     * Initialize an empty linked list
     */
    constructor() {
        this.list = new Array();
    }

    /**
     * Retrieve value at index
     * @param {number} index - Index to retrieve value from
     * @return {number} Value at index or -1 if index is out of bounds
     */
    get(index) {
        if(index < 0 || index > this.list.length - 1){
            return -1;
        }
        return this.list[index];
    }

    /**
     * Insert a new value at the head
     * @param {number} val - Value to insert 
     * @return {void}
     */
    insertHead(val) {
        this.list.unshift(val);
    }

    /**
     * Insert a new value at the tail
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.list.push(val);
    }

    /**
     * Remove node at index
     * @param {number} index - Index to remove node from
     * @return {boolean} False if index is out of bounds, otherwise true
     */
    remove(index) {
        if(index < 0 || index > this.list.length - 1){
            return false;
        }
        this.list.splice(index, 1);
        return true;
    }

    /**
     * Retrive an array of all values in list
     * @return {number[]} Array of values in list
     */
    getValues() {
        return this.list;
    }
}
