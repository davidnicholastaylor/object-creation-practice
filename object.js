let financialAdvisor = Object.create({}, {
    company: {
        value: "IBM",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Accounting",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Johnson",
        enumerable: true
    },
    portfolio: {
        value: [
            "45", "54", "314", "98"
        ]
    },
    worth: {
        method: function netWorth() {
            for (i = 0; i < portfolio.length; i++)  {
                return `${this.portfolio.value[i]++}`
            }
        }
    },
    purchase: {
        method: function (ticker, quantity, price) {
            portfolio += quantity * price;

        }
    },
    sell: {
        method: function (ticker, quantity, price) {
            portfolio - portfolio.value
        }
    }
})

console.log(financialAdvisor.worth);