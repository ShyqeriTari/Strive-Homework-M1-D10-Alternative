  /*   JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/

let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

let anObj = {
    name: "Mary",
    surname: "Louis",
    email: "mary.louis@gmail.com"
}

console.log(anObj)

delete anObj.email
console.log(anObj)

let anArr = []

for (let i = 1; i <= 10; i++){
    anArr.push(i.toString())
}
console.log(anArr)

for (let i = 0; i < anArr.length; i++) {
    console.log(anArr[i])
}

let otherArr = []

for (let i = 0; i < 100;i++) {
    otherArr.push(Math.floor(Math.random() * 100))
}

console.log(otherArr)

let min = 101
let max = 0
function maxAndMin() {
    for(let i = 0; i < otherArr.length; i++){
        if (otherArr[i] > max) {
           max = otherArr[i]
        
    } else if (otherArr[i] < min ){
min = otherArr[i]
    }
}

    console.log( max, min)
}

maxAndMin()

let arrOfArr = [[],[],[]]

for (let j = 1; j <=10; j++){
for (let i = 0; i < arrOfArr.length; i++) {
    arrOfArr[i].push(Math.floor(Math.random() * 10))
}
}

console.log(arrOfArr)

function longestArray (arr1, arr2) {
    if (arr1.length > arr2.length){
        console.log(arr1 + " is longer than " + arr2)
    } else if (arr2.length > arr1.length){
        console.log(arr2 + " is longer than " + arr1)
    } else {
        console.log(arr1 + " length is equal to " + arr2 + " length")
    }
}

longestArray(["1",2,"3",4],[2,"3",4])

        let aOne = 0
        let aTwo = 0
function higherArrValue(array1, array2) {

    for (let i = 0; i < array1.length; i++){
        aOne += array1[i]
    }
    for(let i = 0; i < array2.length; i++){
        aTwo += array2[i]
    }
    if (aOne > aTwo) {
console.log(aOne + " is higher than " + aTwo)
} else if (aOne < aTwo) {
    console.log(aTwo + " is higher than " + aOne)
    } else {
        console.log (aOne + " is equal to " + aTwo)
    }
}

higherArrValue([1,1,1,1,100,2], [1,1,1,1,100,2])


/*
31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list
        */
/*
        let container = document.getElementById("container")
        let tableData = document.getElementsByTagName("td")

        for(let i = 0; i < tableData.length; i++) {
            tableData[i].innerText = "DOM TEXT"
        } */

        function changeHeading() {
            let heading = document.querySelector("h1")
            heading.innerText = "DOM HEADING"
        }

        changeHeading()

        function addRow() {
            let table = document.querySelector("table")
            let row = document.createElement("tr")
            for (let i = 0; i < 5; i++) {
                let tD = document.createElement("td")
                tD.innerText = i + 1
                row.appendChild(tD)
            }
            table.appendChild(row)
        }

        addRow()

        function addClass() {

            let tableRow = document.querySelectorAll("tr")

            for (let i = 0; i < tableRow.length; i++){
                tableRow[i].classList.add("test")
            }

        }

        addClass()

        function addBackground() {
            let links = document.querySelectorAll("a")
            for(let i = 0; i < links.length; i++){
                links[i].style.backgroundColor = "red"
            }
        }

        addBackground()

        window.onload = function(){
            console.log("Page Loaded")
        }


        function addItems() {
            let uL = document.querySelector("ul")
            let items = document.createElement("li")
            items.innerText = "New Item"
            uL.appendChild(items)
        }
        
        addItems()

        function emptyList() {
            let list = document.querySelectorAll("ul")
            for (let i=0; i < list.length; i++){
                list[i].innerHTML = ""
            }
        }

        emptyList()


        /*
         41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
        42) Create a button that will hide every image on the page when clicked
        43) Create a button that will hide or show the table on the page when clicked
        44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
        45) Delete the last letter from the heading each time the user clicks on it
        46) Change the background color of a <td> if the user clicks on it
        47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
        48) Add automatically a pink border to a cell when the mouse hovers it
        49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
        50) Write a function to remove the last table from the page
        */

        function showAlert() {
            let links = document.querySelectorAll("a")
            for(let i = 0; i < links.length; i++){
                links[i].onmouseenter = function(e) {
                    alert(e.target.href)
                }
            }
        }
        showAlert()

        function hideImages() {
            let body = document.querySelector("body")
            let button = document.createElement("button")
            button.innerText = "Hide Images"
            button.style.marginTop = "40px"
            button.style.marginBottom = "40px"
            button.style.marginRight = "10px"
            body.appendChild(button)

        let images = document.getElementsByTagName("img")
        button.onclick = function () {
            for(let i=0; i < images.length; i++) {
               
                    images[i].style.display = "none"
                }
            }
        }

        hideImages()

        function toggleTable() {

            let body = document.querySelector("body")
            let button = document.createElement("button")
            button.innerText = "Toggle Table"
            button.style.marginTop = "40px"
            button.style.marginBottom = "40px"
            button.style.marginRight = "10px"
            body.appendChild(button)

            let table = document.querySelector("table")
            button.onclick = function() {
                if (table.style.display !== "none"){
                table.style.display = "none"
                } else if (table.style.display === "none"){
                    table.style.display = ""
                }
            }

        }

        toggleTable()

       /* function sumTableCells() {
            let tD = document.querySelectorAll("td")
            let sum = 0
            for (let i = 0; i < tD.length; i++) {
                let toNum = parseInt(tD[i].innerText)
                if (toNum !== NaN) {
                    sum += toNum
                }
            }

            console.log(sum)
        }

        sumTableCells()*/

        const sumNumbers = function () {
            const tds = document.querySelectorAll("td");
            let sum = 0;
            tds.forEach((td) => {
              const toNumber = parseInt(td.innerText);
              const isNotNumeric = isNaN(toNumber);
              if (!isNotNumeric) {
                sum += toNumber;
              }
            });
            console.log(sum);
          };
          sumNumbers();


          function deleteLast() {

            let hOne = document.querySelector("h1")
            hOne.onclick = function (e) {
                hOne.innerText = hOne.innerText.substring(0, hOne.innerText.length - 1);
              };
          }

          deleteLast()

          function changeBgColor() {
              let tds = document.querySelectorAll("td")
              for ( let i = 0; i < tds.length; i++) {
                  tds[i].onclick = function (e) {
                e.target.classList.toggle("background")
                  }
              }
          }

          changeBgColor()

          function deleteTd() {
            let body = document.querySelector("body")
            let button = document.createElement("button")
            button.innerText = "Delete Random Td"
            button.style.marginTop = "40px"
            button.style.marginBottom = "40px"
            button.style.marginRight = "10px"
            body.appendChild(button)
            let tds = document.querySelectorAll("td")
            let tdLength = tds.length

            button.onclick = function () {
                tds[Math.floor(Math.random()* tdLength)].remove()
                
                  }

        }

        deleteTd()

        function pinkBorder() {
            let cells = document.querySelectorAll("td")
            cells.forEach((td) =>{
                td.onmouseenter = function (e) {
                    e.target.style.border = "2px solid pink"
                }
            })

             }

             pinkBorder()

             function addTable () {
                 let body = document.querySelector("body")
                 let table = document.createElement("table")
                 body.appendChild(table)
                 for (let i = 0; i < 4; i++) {
                    let tRows = document.createElement("tr")
                    table.appendChild(tRows)
                     
                     for (let j = 1; j < 4; j++){
                        let tData = document.createElement("td")
                        tData.innerText = j
                         tRows.appendChild(tData)
                     }
                    }
                    
             }

             addTable()


             function removeLastTable() {
                let table = document.querySelectorAll("table")[1]
                table.remove() 
           }

           removeLastTable()

             