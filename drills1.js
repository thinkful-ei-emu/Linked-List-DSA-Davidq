let linklist = require('./linklist');
let test = new linklist('Apollo','Boomer','Helo','Husker', 'StarBucks');
function drills(){
 
  test.addToEnd('Tauida');
  test.remove('squierrel');
  //console.log(test.find('Husker'));
  linklist.RemoveAll(test);
  test.insertAfter('Boomer','Sonic');
  display(test);
  console.log('is it empty?: ',isEmpty(new linklist()));
  console.log(size(test));
  findLast(test);
  
  console.log(test.find('Boomer'));
}

function display(ll){

  let temp = ll.head;
  let str = '';
  while(temp._next !== null){
    str += `${temp._value} -> `;
    temp = temp._next;
  }
  
  console.log(str);
}
function isEmpty(ll){
  return ll.head === null ? true : false;
}
function size(ll){
  let counter = 0;
  if(ll.head === null){
    return 0;
  }
  let currentNode = ll.head;
  while(currentNode._next !== null){
    counter++;
    currentNode = currentNode._next;
  }
  return counter;
}
function findLast(ll){

  console.log('last', ll.traverse((node)=>node._next === null));

}
drills();