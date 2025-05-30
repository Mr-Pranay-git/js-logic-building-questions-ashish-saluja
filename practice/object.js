const Price = {
    pizza:500,
    burger:250,
    fries:100,
    sandwich:150
} 

function getPrice(item){
    return Price[item] || 'no item found'
}

console.log(getPrice('eggs'));
    