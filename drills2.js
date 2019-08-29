/* function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
} */
//what does this functin do? it removes duplicates from a linked list
//O(n^2)

//reverse a list

function reverse(ll, prev = null,first = ll.head){
  if(first === null){
    return;
  }
  if(first._next === null)
  {
    first._next = prev;
    return;
  }
  
  ll.head =  first._next;//move head to second element
  reverse(ll,first);
  first._next = prev;
  
  

}
let linkedList = require('./linklist');
function drills2(){
  let test = new linkedList(1,2,3,4,5,6);
  //linkedList.display(test);
  reverse(test);
  linkedList.display(test)
}
drills2();