/*const button = document.getElementById('btn')
const expsense=document.getElementById('expense')
const amount = document.getElementById('amt')
const date = document.getElementById('date')

button.addEventListener('click',async function(){
    const responseObj = await fetch('/make-new-record',{    //brings the data from the response in server.cjs
        method : "POST",
        body : JSON.stringify({  //content to be send //JSON.stringify --> data is conveted into json
            "expense" : expense.value,
            "amount" : amount.value,
            "date": date.value
        }),
        headers :  {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
        }
    }) 
    const data = await responseObj.json()
    console.log(data)

})*/

// const addEntry = document.getElementById
// ('add-entry')
// const category = document.getElementById
// ('category')
// const amount = document.getElementById
// ('amount')
// const date = document.getElementById
// ('date')
// const responseObj = await fetch('/make-new-record',{    //brings the data from the response in server.cjs
//     method : "POST",
//     body : JSON.stringify({  //content to be send //JSON.stringify --> data is conveted into json
//         "expense" : expense.value,
//         "amount" : amount.value,
//         "date": date.value
//     }),
//     headers :  {
//       Accept : 'application/json',
//       'Content-Type' : 'application/json'
//     }
// }) 

const addEntry = document.getElementById('add-entry')
const category = document.getElementById('category')
const amount = document.getElementById('amount')
const date = document.getElementById('date')

addEntry.addEventListener('click', async function() {
    const respObj = await fetch('/add-entry', {
        method : 'POST',
        body : JSON.stringify({
            "category" : category.value,
            "amount" : amount.value,
            "date" : date.value
        }),
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    const data = await respObj.json()
})