var express = require('express');
var app = express();
app.use(express.static('build'));

//Storing data in Array
let accounts = [
    {id:1,name:'Alex',deposit:5},
    {id:2,name:'Sarah',deposit:5},
    {id:3,name:'Jim',deposit:15}
]
/*app.get('/',function(req,res)
{
    res.send(accounts[0]);
})*/


//Retrieving the data from Array
app.get('/Alex',function(req,res)
{
    res.send(accounts[0]);
})
app.get('/Sarah',function(req,res)
{
    res.send(accounts);
})
app.get('/Jim',function(req,res)
{
    res.send(accounts[2]);
})

//Declaration of simple Linked List
 class LinkedList{
     constructor(id,name,deposit)
     {
         this.id=id;
         this.name=name;
         this.deposit= deposit;
         this.next=null;
     }
 }
 
 //Storing data to Linked List
let account = new LinkedList(1,"Alex",5);
account.next = new LinkedList(2,"Sarah",5);
account.next.next = new LinkedList(3,"Jim",15); 

//Retrieving the data from Linked List
app.get('/linkedlist',function(req,res)
{
    res.send(account);
})

 /*Reason for using linked list instead of Array is because,
  In an array, we need to declare the size of an Array at the time of declaration
  which does not allow us to exceed the allocation size. 
  Array may be the best one to store and retrieve the data but above constraint is the 
  only backdrop of using Arrays.
  In Linked List, We need not add any constraints like size, it allows us to dynamically 
  add the data until the user wants. It is recommended for Real Time Systems.*/

  app.listen(3000);