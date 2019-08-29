class _node{
  constructor(value,next){
    this._value = value;
    this._next = next;
  }
}
module.exports = class LinkedList{
  constructor(...args){
    if(args.length > 0){
      for(let x = 0;x < args.length; x++){
        if(x === 0){
          this.addFirst(args[0]);
        }else{
          this.addToEnd(args[x]);
        }
      }
    }else{
      this.head = null;
    }
  }
  traverse(callback){
    let temp = this.head;
    while(temp !== null){
      if(callback(temp)){
        return temp;
      }
      temp = temp._next;
    }

  }
  static RemoveAll(){
    

  }
  static display(ll){

    let temp = ll.head;
    let str = '';
    while(temp._next !== null){
      str += `${temp._value} -> `;
      temp = temp._next;
    }
    console.log(str);
  }
  addFirst(value){
    this.head = new _node(value,null);
  }
  addToEnd(value) {
    if(this.head === null){
      this.addFirst(value);
    }
    let tempNode = this.head;
    while(tempNode._next !== null){
      tempNode = tempNode._next;
    }
    tempNode._next = new _node(value,null);
  }
  find(value){
    /* let tempNode = this.head;
    while(tempNode._next !== null){
      if(tempNode._value === value)
        return tempNode;
      tempNode = tempNode._next; 
    }*/
    return this.traverse((node)=>node._value === value);
    
  }
  insertBefore(target, value){
    let tempNode = this.head;
    while(tempNode._next !== null){
      if(tempNode._next._next.value ===target){
        tempNode._next = new _node(value,tempNode._next._next);
      }
    }
  }
  insertAfter(target, value){
    let tempNode = this.find(target);
    if(!tempNode)
      throw new Error('object not found');
    if(tempNode._next === null)
      this.addToEnd(value);
    else{
      tempNode._next = new _node(value, tempNode._next);
    }
  }
  remove(value){
    let tempNode = this.head;
    while(tempNode._next !== null){
      if(tempNode._next.value === value){
        tempNode._next = tempNode._next._next;
        return tempNode;
      }
      tempNode = tempNode._next;
    }
  }
};