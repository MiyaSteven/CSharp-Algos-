// This is the class for our Singly Linked Node
class SLNode {
    // The constructor is built to take 1 parameter; the value of the node we want
    // to create
    constructor(value) {
        // The node's actual value being set to the value passed in through the constructor
        this.value = value;
        // And the pointer that refers to the node next in the sequence after
        // this node. Note it starts as null, because when you first create a node,
        // it is not connected to anything.
        this.next = null;
    }
}
let array = [];
array.push(1);
console.log(array);
// This is the class for our Singly Linked List
class SLList {
    constructor() {
        // The head marks the beginning of the linked list.
        this.head = null;

        // Note that it's null. This is because when you first create a list, it's empty!
    }

    // Write a method that returns a boolean based on whether or not the list
    // is empty. HINT! Check out
    isEmpty(value) {
        return this.head === null;
        // if (this.head != null) {
        //     return false;
        // } else {
        //     return true;
        // }
    }

    /**************************************************************** */
    // Write a method that will add to the back of a singly linked list.

    // Essentially, have a runner start at the head, traverse along to the end,
    // then create a new node at the end, and reassign the last node's .next pointer
    // to the new node.

    addToBack(value) {
        let runner = this.head;

        if (this.isEmpty()) {
            this.head = new SLNode(value);
            return this;
        }

        while (runner.next !== null) {
            runner = runner.next;
        }

        runner.next = new SLNode(value);
        return this;
    }

    // Here's a gimme: This will print the contents of a singly linked list.
    printList() {
        // We need to initialize an empty string
        let toPrint = "";
        // And start a runner at the head of the list.
        let runner = this.head;

        // We want to perform something every time runner isn't null
        while (runner != null) {
            // Add the new value and an arrow (oh so fancy, I know!)
            // to the string we want to print
            toPrint += `${runner.value} -> `;
            // And move runner to the next node. This is gonna be your
            // bread and butter when it comes to linked lists
            runner = runner.next;
        }
        // What good is our print list method if it doesn't console log?!
        console.log(toPrint);

        // And just so we can chain methods (idk why you'd want to chain from print list,
        // but why not), just return this.

        return this;
    }
}

let newList = new SLList();
console.log(newList.isEmpty());
newList.addToBack(3).addToBack(6).addToBack(9);
console.log(newList.isEmpty());
newList.printList();