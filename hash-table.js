const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.capacity = numBuckets;
    this.count = 0;
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    // Your code here

return parseInt(sha256(key).slice(0,8),16)
  }

  hashMod(key) {
    // Your code here
    return this.hash(key)  % this.capacity

  }

  insertNoCollisions(key, value) {
    // Your code here
   const idx  = this.hashMod(key);

   if(!this.data[idx]){

      this.data[idx] = new KeyValuePair(key, value);
      this.count++;
    }
    else{
    throw Error( 'hash collision or same key/value pair already exists!')
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const idx  = this.hashMod(key);



       this.data[idx] = new KeyValuePair(key, value);
       this.count++;

  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
