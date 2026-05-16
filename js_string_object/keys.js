// object er moddhe computer er information rakha hoyeche
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '500 GB'
}


// Object.keys() object er sob property name ber kore array akare dey
// ekhane brand, price, processor, hdd ei key gula pawa jabe
const keys = Object.keys(computer);


// keys array ta console e print korbe
console.log(keys);


// output hobe:
// [ 'brand', 'price', 'processor', 'hdd' ]