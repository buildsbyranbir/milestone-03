// akta object create kora holo
// ei object er moddhe college er bibhinno information rakha hoyeche
const colleage = {

    // college er name
    name: 'vnc',

    // class gula array akare rakha hoyeche
    class: ['11', '12'],

    // college er event list
    events: ['science fair', 'bijoy dibos', '21 February'],

    // unique namer nested object
    unique: {

        // college er color
        color: 'blue',

        // result namer arekta nested object
        result: {

            // GPA value
            gpa: 5,

            // merit position
            merit: 'top'
        }
    }
}


// nested object theke color access kora jeto
// output hoto: blue
// console.log(colleage.unique.color)



// ekhane nested object er vitore giye merit value access kora hocche

// colleage -> unique -> result -> merit
// output hobe: top
console.log(colleage.unique.result.merit)