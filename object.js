let financial = Object.create({}, {
    company: {
        value: "IBM",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "accounting",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Johnson",
        enumerable: true
    },
    portfolio: {
        value: [],
        enumerable: false
    },
    purchase: {
        value: function (symbol, quantity, price) {
            let purchased = {
                company: symbol,
                quantity: quantity,
                price: price
            }
            this.portfolio.push(purchased)
        },
        enumerable: false
    },
    sell: {
        value: function (symbol, quantity, price) {
            let portfolio = financial.portfolio;
            // console.log("before loop portfolio", portfolio);
            for(let i = 0; i < portfolio.length; i++) {
                if(portfolio[i].company === symbol && portfolio[i].quantity === quantity && portfolio[i].price === price) {
                    portfolio.splice(i, 1);
                    // console.log("after loop", portfolio);
                }
            }
        },
        // value: function(symbol, quantity, price){

        //     let findStock = this.portfolio.find(stock => {
        //         return stock.symbol === symbol && stock.sold === false;
        //     })
            
        //     if(findStock.quantity < quantity){
        //         alert(`You do not have that much stock in ${symbol}!`);
        //     }else{
        //         let index = this.portfolio.indexOf(findStock);
    
        //         this.portfolio.splice(index, 1);
    
        //         let soldStock = {
        //             symbol: symbol,
        //             quantity: quantity,
        //             price: price,
        //             sold: true
        //         }
    
        //         let updatedStock = {
        //             symbol: findStock.symbol,
        //             quantity: findStock.quantity - soldStock.quantity,
        //             price: soldStock.price,
        //             sold: false
        //         }
    
        //         this.portfolio.push(soldStock, updatedStock);
        //     }

        // },
        enumerable: false
    },
    worth: {
        value: function() {
            let total = 0;
            for (i = 0; i < this.portfolio.length; i++) {
                let stockValue = this.portfolio[i].quantity * this.portfolio[i].price;
                total += stockValue;
            }
            console.log("total", total);
            return total;
        },
        // value:function(){
        //     let worth = this.portfolio.reduce((accumulator, stock) => {
        //         return accumulator + (stock.price * stock.quantity);
        //     }, 0);
        //     return worth;
        // },
        enumerable: false
    }
})

financial.purchase("SBUX", 100, 55);
financial.purchase("AAPL", 200, 105);
financial.sell("SBUX", 50, 55);
console.log(financial);
financial.worth();


// Challenge Part 1
const listText = document.createElement("ul")
const text = document.createTextNode(`${financial.name} works for ${financial.company}, specializing in ${financial.specialty}.`)
listText.appendChild(text)
document.body.appendChild(listText)

//Challenge Part 2

let fragment = document.createDocumentFragment();
console.log(financial.portfolio)
let list = document.createElement('ul')
for (i = 0; i < financial.portfolio.length; i++) {
    const currentObject = financial.portfolio[i];
    let listItem = document.createElement('li')
    listItem.textContent = `${currentObject.company} `
    listItem.textContent += `${currentObject.price} `
    listItem.textContent += `${currentObject.quantity}`
    list.appendChild(listItem)
    console.log(list)
}
fragment.appendChild(list)

console.log(fragment)

document.querySelector(".up").appendChild(fragment)
