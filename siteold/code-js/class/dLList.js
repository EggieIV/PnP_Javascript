class Node {
	constructor(data = null){
		this.data = data;
		this.next = null;
	}	
}

class LinkedList{
	constructor(){
		this.head = new Node();
	}
	
	append(item){
		let current = this.head;
		let newNode = new Node(item);
		while(current.next !==null){
			current = current.next;
		}
		current.next = newNode;
		return this.display();
	}
	
	remove( item ) {
   let current = this.head;
   while( current !== null ) {
     let previous = current;
     current = current.next;
     if( current.data === item ) {
       previous.next = current.next;
       return true;
     }
   }
   return false;
 }
}