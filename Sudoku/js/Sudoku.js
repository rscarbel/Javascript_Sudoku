//DOM Variable Declarations
const clear_button = document.querySelector("#clear_board")
const check_answer_button = document.querySelector("#check_answer")
const table_cells = document.querySelectorAll("td")
const victory_message = document.querySelector("#victory_message")
const next_game_button = document.querySelector("#new_game")

const docSubGrid1 = document.querySelectorAll (".subGrid1")
const docSubGrid2 = document.querySelectorAll (".subGrid2")
const docSubGrid3 = document.querySelectorAll (".subGrid3")
const docSubGrid4 = document.querySelectorAll (".subGrid4")
const docSubGrid5 = document.querySelectorAll (".subGrid5")
const docSubGrid6 = document.querySelectorAll (".subGrid6")
const docSubGrid7 = document.querySelectorAll (".subGrid7")
const docSubGrid8 = document.querySelectorAll (".subGrid8")
const docSubGrid9 = document.querySelectorAll (".subGrid9")
let allOriginalGrids = (docSubGrid1, docSubGrid2, docSubGrid3, docSubGrid4, docSubGrid5, docSubGrid6, docSubGrid7, docSubGrid8, docSubGrid9)

const docColumn1 = document.querySelectorAll (".col1")
const docColumn2 = document.querySelectorAll (".col2")
const docColumn3 = document.querySelectorAll (".col3")
const docColumn4 = document.querySelectorAll (".col4")
const docColumn5 = document.querySelectorAll (".col5")
const docColumn6 = document.querySelectorAll (".col6")
const docColumn7 = document.querySelectorAll (".col7")
const docColumn8 = document.querySelectorAll (".col8")
const docColumn9 = document.querySelectorAll (".col9")

const docRow1 = document.querySelectorAll (".row1")
const docRow2 = document.querySelectorAll (".row2")
const docRow3 = document.querySelectorAll (".row3")
const docRow4 = document.querySelectorAll (".row4")
const docRow5 = document.querySelectorAll (".row5")
const docRow6 = document.querySelectorAll (".row6")
const docRow7 = document.querySelectorAll (".row7")
const docRow8 = document.querySelectorAll (".row8")
const docRow9 = document.querySelectorAll (".row9")

const fullSet = ["1","2","3","4","5","6","7","8","9"]

//sets for subgrids, columns, and rows
let subGrid1 = [];let subGrid2 = [];let subGrid3 = [];let subGrid4 = [];let subGrid5 = [];let subGrid6 = [];let subGrid7 = [];let subGrid8 = [];let subGrid9 = [];let column1 = [];let column2 = [];let column3 = [];let column4 = [];let column5 = [];let column6 = [];let column7 = [];let column8 = [];let column9 = [];let row1 = [];let row2 = [];let row3 = [];let row4 = [];let row5 = [];let row6 = [];let row7 = [];let row8 = [];let row9 = []
let allGrids = [subGrid1, subGrid2, subGrid3, subGrid4, subGrid5, subGrid6, subGrid7, subGrid8, subGrid9]
let allRows = [row1, row2, row3, row4, row5, row6, row7, row8, row9]
let allColumns = [column1, column2, column3, column4, column5, column6, column7, column8, column9]


function update_entries (){
  //updating grids
  for (let i = 0; i < 9; i++){
    subGrid1[i] = (docSubGrid1[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid2[i] = (docSubGrid2[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid3[i] = (docSubGrid3[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid4[i] = (docSubGrid4[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid5[i] = (docSubGrid5[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid6[i] = (docSubGrid6[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid7[i] = (docSubGrid7[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid8[i] = (docSubGrid8[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    subGrid9[i] = (docSubGrid9[i].textContent)
  }

  //updating rows
  for (let i = 0; i < 9; i++){
    row1[i] = (docRow1[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row2[i] = (docRow2[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row3[i] = (docRow3[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row4[i] = (docRow4[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row5[i] = (docRow5[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row6[i] = (docRow6[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row7[i] = (docRow7[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row8[i] = (docRow8[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    row9[i] = (docRow9[i].textContent)
  }

  //updating columns
  for (let i = 0; i < 9; i++){
    column1[i] = (docColumn1[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column2[i] = (docColumn2[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column3[i] = (docColumn3[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column4[i] = (docColumn4[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column5[i] = (docColumn5[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column6[i] = (docColumn6[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column7[i] = (docColumn7[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column8[i] = (docColumn8[i].textContent)
  }
  for (let i = 0; i < 9; i++){
    column9[i] = (docColumn9[i].textContent)
  }
}

function clear_board(){
  for (let i = 0; i < 81; i++){
    if (table_cells[i].contentEditable === "true"){
      table_cells[i].textContent = ""
    }
  }
}
clear_button.addEventListener ("click", clear_board)

function victory_check(){
  update_entries()
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      if (!allGrids[i].includes(fullSet[j])){
        alert("Sorry, this is incorrect!")
        return
        }
      }
    }
    for (let i = 0; i < 9; i++){
      for (let j = 0; j < 9; j++){
        if (!allColumns[i].includes(fullSet[j])){
          alert("Sorry, this is incorrect!")
          return
          }
        }
      }
    for (let i = 0; i < 9; i++){
      for (let j = 0; j < 9; j++){
        if (!allRows[i].includes(fullSet[j])){
          alert("Sorry, this is incorrect!")
          return
          }
        }
      }
      alert("Congratulations! You got it!")
      check_answer_button.disabled=true
      next_game_button.disabled = false
      return
  }
check_answer_button.addEventListener ("click", victory_check)
addEventListener ("onkeypress", update_entries)
