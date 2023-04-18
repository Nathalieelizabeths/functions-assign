//You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
//Create an array containing the names of all items in the inventory maximum of 10.
const stockarray=["banana","sukumawiki","Ginger","onions","mangoes","persil","cucumbers","chillies"]
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stockquantity=[20,70,40,90,100,50,60,150,110]
//Write a function to add a new item to the inventory, updating both arrays.
function add(array,quantity){
    if(stockarray.length >=10){
        console.log("no stock")
    }
    else{
       stockarray.push(array) 
       stockquantity.push(quantity)
       console.log(`I have added ${array} with ${quantity}`)
    }
    // let a= array.push("pumkin")
    // console.log(array)
    // let b = quantity.push(50)
    // console.log(quantity)
}
add("Tomatoes",200)
console.log(stockquantity)
console.log(stockarray)


//Write a function to update the stock quantity of an existing item.
function update(){
    stockquantity[5]=1000
    console.log(stockquantity)
}
update()
//Write a function to calculate the total number of items in the inventory.
function addall(){
   return stockarray.length
}
console.log(addall(stockarray))


//Write a function to find the item with the lowest stock quantity.
let min = Math.min(...stockquantity)
console.log(min ,"banana")
function find(){
    for(let y=0;y<stockquantity.length;y++){
        min=Math.min(min,stockquantity[y])
    
    }
}
find()
