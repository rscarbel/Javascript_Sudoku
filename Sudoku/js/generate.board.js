


//YOU ARE NOT SUPPOSED TO BE LOOKING AT THIS CODE!!!!
//I KNOW THIS CODE SUCKS, BUT IT'S BECAUSE I HAVE NO IDEA HOW
//TO MAKE AN ALGORITHM THAT GENERATES A SUDOKU BOARD

const new_game_button = document.querySelector("#new_game")
const td = document.querySelectorAll("td")
const submit_button = document.querySelector("#check_answer")
const clear_board_button = document.querySelector("#clear_board")
let game = 0


function create_game(){

  new_game_button.textContent = "Next Game"
  submit_button.disabled = false
  new_game_button.disabled = true
  clear_board_button.disabled = false
  if (game < 11){
    game++
  }else {
    game = 1
  }
  for (let i = 0; i < 81; i++){
    td[i].textContent = ""; td[i].contentEditable = "true"
  }
  if (game === 1){
    td[17].textContent = "1"; td[17].contentEditable = "false";td[31].textContent = "1"; td[31].contentEditable = "false";td[52].textContent = "1"; td[52].contentEditable = "false";td[21].textContent = "2"; td[21].contentEditable = "false";td[58].textContent = "2"; td[58].contentEditable = "false";td[71].textContent = "2"; td[71].contentEditable = "false";td[72].textContent = "2"; td[72].contentEditable = "false";td[26].textContent = "3"; td[26].contentEditable = "false";
    td[31].textContent = "3"; td[31].contentEditable = "false";td[43].textContent = "3"; td[43].contentEditable = "false";td[56].textContent = "3"; td[56].contentEditable = "false";td[77].textContent = "3"; td[77].contentEditable = "false";td[24].textContent = "4"; td[24].contentEditable = "false";td[44].textContent = "4"; td[44].contentEditable = "false";td[74].textContent = "4"; td[74].contentEditable = "false";td[70].textContent = "4"; td[70].contentEditable = "false";
    td[50].textContent = "4"; td[50].contentEditable = "false";td[16].textContent = "5"; td[16].contentEditable = "false";td[22].textContent = "5"; td[22].contentEditable = "false";td[39].textContent = "5"; td[39].contentEditable = "false";td[60].textContent = "5"; td[60].contentEditable = "false";td[23].textContent = "6"; td[23].contentEditable = "false";td[37].textContent = "6"; td[37].contentEditable = "false";td[49].textContent = "6"; td[49].contentEditable = "false";
    td[4].textContent = "7"; td[4].contentEditable = "false";td[48].textContent = "7"; td[48].contentEditable = "false";td[65].textContent = "7"; td[65].contentEditable = "false";td[80].textContent = "7"; td[80].contentEditable = "false";td[18].textContent = "8"; td[18].contentEditable = "false";td[15].textContent = "8"; td[15].contentEditable = "false";td[47].textContent = "8"; td[47].contentEditable = "false";td[34].textContent = "8"; td[34].contentEditable = "false";
    td[76].textContent = "8"; td[76].contentEditable = "false";td[62].textContent = "8"; td[62].contentEditable = "false";td[29].textContent = "9"; td[29].contentEditable = "false";td[53].textContent = "9"; td[53].contentEditable = "false";td[66].textContent = "9"; td[66].contentEditable = "false";td[79].textContent = "9"; td[79].contentEditable = "false";
  } else if (game === 2) {
    td[11].textContent = "1"; td[11].contentEditable = "false";td[23].textContent = "1"; td[23].contentEditable = "false";td[30].textContent = "1"; td[30].contentEditable = "false";td[63].textContent = "1"; td[63].contentEditable = "false";td[58].textContent = "1"; td[58].contentEditable = "false";td[80].textContent = "1"; td[80].contentEditable = "false";td[1].textContent = "2"; td[1].contentEditable = "false";td[76].textContent = "2"; td[76].contentEditable = "false";
    td[69].textContent = "2"; td[69].contentEditable = "false";td[22].textContent = "3"; td[22].contentEditable = "false";td[47].textContent = "3"; td[47].contentEditable = "false";td[72].textContent = "3"; td[72].contentEditable = "false";td[68].textContent = "3"; td[68].contentEditable = "false";td[4].textContent = "4"; td[4].contentEditable = "false";td[27].textContent = "4"; td[27].contentEditable = "false";td[50].textContent = "4"; td[50].contentEditable = "false";
    td[57].textContent = "4"; td[57].contentEditable = "false";td[46].textContent = "5"; td[46].contentEditable = "false";td[31].textContent = "5"; td[31].contentEditable = "false";td[59].textContent = "5"; td[59].contentEditable = "false";td[79].textContent = "5"; td[79].contentEditable = "false";td[12].textContent = "6"; td[12].contentEditable = "false";td[7].textContent = "6"; td[7].contentEditable = "false";td[55].textContent = "6"; td[55].contentEditable = "false";
    td[67].textContent = "6"; td[67].contentEditable = "false";td[26].textContent = "7"; td[26].contentEditable = "false";td[32].textContent = "7"; td[32].contentEditable = "false";td[66].textContent = "7"; td[66].contentEditable = "false";td[0].textContent = "8"; td[0].contentEditable = "false";td[21].textContent = "8"; td[21].contentEditable = "false";td[15].textContent = "8"; td[15].contentEditable = "false";td[77].textContent = "8"; td[77].contentEditable = "false";
    td[62].textContent = "8"; td[62].contentEditable = "false";td[20].textContent = "9"; td[20].contentEditable = "false";td[16].textContent = "9"; td[16].contentEditable = "false";td[28].textContent = "9"; td[28].contentEditable = "false";td[54].textContent = "9"; td[54].contentEditable = "false";
  }else if (game === 3) {
    td[9].textContent = "1"; td[9].contentEditable = "false";td[22].textContent = "1"; td[22].contentEditable = "false";td[8].textContent = "1"; td[8].contentEditable = "false";td[38].textContent = "1"; td[38].contentEditable = "false";td[73].textContent = "1"; td[73].contentEditable = "false";td[57].textContent = "1"; td[57].contentEditable = "false";td[70].textContent = "1"; td[70].contentEditable = "false";td[20].textContent = "2"; td[20].contentEditable = "false";
    td[4].textContent = "2"; td[4].contentEditable = "false";td[16].textContent = "2"; td[16].contentEditable = "false";td[44].textContent = "2"; td[44].contentEditable = "false";td[59].textContent = "2"; td[59].contentEditable = "false";td[14].textContent = "3"; td[14].contentEditable = "false";td[47].textContent = "3"; td[47].contentEditable = "false";td[39].textContent = "3"; td[39].contentEditable = "false";td[58].textContent = "3"; td[58].contentEditable = "false";
    td[3].textContent = "4"; td[3].contentEditable = "false";td[45].textContent = "4"; td[45].contentEditable = "false";td[40].textContent = "4"; td[40].contentEditable = "false";td[65].textContent = "4"; td[65].contentEditable = "false";td[37].textContent = "5"; td[37].contentEditable = "false";td[49].textContent = "5"; td[49].contentEditable = "false";td[33].textContent = "5"; td[33].contentEditable = "false";td[56].textContent = "5"; td[56].contentEditable = "false";
    td[79].textContent = "5"; td[79].contentEditable = "false";td[1].textContent = "6"; td[1].contentEditable = "false";td[54].textContent = "6"; td[54].contentEditable = "false";td[76].textContent = "6"; td[76].contentEditable = "false";td[24].textContent = "7"; td[24].contentEditable = "false";td[31].textContent = "7"; td[31].contentEditable = "false";td[63].textContent = "7"; td[63].contentEditable = "false";td[13].textContent = "8"; td[13].contentEditable = "false";
    td[30].textContent = "8"; td[30].contentEditable = "false";td[52].textContent = "8"; td[52].contentEditable = "false";td[68].textContent = "8"; td[68].contentEditable = "false";td[78].textContent = "8"; td[78].contentEditable = "false";td[10].textContent = "9"; td[10].contentEditable = "false";td[41].textContent = "9"; td[41].contentEditable = "false";
  }else if (game === 4) {
    td[2].textContent = "1"; td[2].contentEditable = "false";td[16].textContent = "1"; td[16].contentEditable = "false";td[32].textContent = "1"; td[32].contentEditable = "false";td[78].textContent = "1";td[78].contentEditable = "false";td[10].textContent = "2"; td[10].contentEditable = "false";td[4].textContent = "2"; td[4].contentEditable = "false";td[43].textContent = "2"; td[43].contentEditable = "false";td[63].textContent = "2"; td[63].contentEditable = "false";
    td[17].textContent = "3"; td[17].contentEditable = "false";td[40].textContent = "3"; td[40].contentEditable = "false";td[33].textContent = "3"; td[33].contentEditable = "false";td[66].textContent = "3";td[66].contentEditable = "false";td[61].textContent = "3"; td[61].contentEditable = "false";td[19].textContent = "4"; td[19].contentEditable = "false";td[47].textContent = "4"; td[47].contentEditable = "false";td[30].textContent = "4"; td[30].contentEditable = "false";
    td[42].textContent = "4"; td[42].contentEditable = "false";td[0].textContent = "5"; td[0].contentEditable = "false";td[51].textContent = "5"; td[51].contentEditable = "false";td[73].textContent = "5"; td[73].contentEditable = "false";td[59].textContent = "5"; td[59].contentEditable = "false";td[71].textContent = "5"; td[71].contentEditable = "false";td[18].textContent = "6"; td[18].contentEditable = "false";td[3].textContent = "6"; td[3].contentEditable = "false";
    td[28].textContent = "6"; td[28].contentEditable = "false";td[56].textContent = "6"; td[56].contentEditable = "false";td[67].textContent = "6"; td[67].contentEditable = "false";td[5].textContent = "7"; td[5].contentEditable = "false";td[39].textContent = "7"; td[39].contentEditable = "false";td[58].textContent = "7"; td[58].contentEditable = "false";td[9].textContent = "8"; td[9].contentEditable = "false";td[37].textContent = "8"; td[37].contentEditable = "false";
    td[13].textContent = "9"; td[13].contentEditable = "false";td[27].textContent = "9"; td[27].contentEditable = "false";td[48].textContent = "9"; td[48].contentEditable = "false";td[44].textContent = "9"; td[44].contentEditable = "false";td[68].textContent = "9"; td[68].contentEditable = "false";td[79].textContent = "9"; td[79].contentEditable = "false";
  }else if (game === 5) {
    td[19].textContent = "1"; td[19].contentEditable = "false";td[14].textContent = "1"; td[14].contentEditable = "false";td[44].textContent = "1"; td[44].contentEditable = "false";td[63].textContent = "1"; td[63].contentEditable = "false";td[58].textContent = "1"; td[58].contentEditable = "false";td[10].textContent = "2"; td[10].contentEditable = "false";td[45].textContent = "2"; td[45].contentEditable = "false";td[65].textContent = "2"; td[65].contentEditable = "false";
    td[57].textContent = "2"; td[57].contentEditable = "false";td[2].textContent = "3"; td[2].contentEditable = "false";td[24].textContent = "3"; td[24].contentEditable = "false";td[36].textContent = "3"; td[36].contentEditable = "false";td[31].textContent = "3"; td[31].contentEditable = "false";td[53].textContent = "3"; td[53].contentEditable = "false";td[9].textContent = "4"; td[9].contentEditable = "false";td[32].textContent = "4"; td[32].contentEditable = "false";
    td[51].textContent = "4"; td[51].contentEditable = "false";td[20].textContent = "5"; td[20].contentEditable = "false";td[43].textContent = "5"; td[43].contentEditable = "false";td[54].textContent = "5"; td[54].contentEditable = "false";td[76].textContent = "5"; td[76].contentEditable = "false";td[22].textContent = "6"; td[22].contentEditable = "false";td[47].textContent = "6"; td[47].contentEditable = "false";td[35].textContent = "6"; td[35].contentEditable = "false";
    td[59].textContent = "6"; td[59].contentEditable = "false";td[8].textContent = "7"; td[8].contentEditable = "false";td[28].textContent = "7"; td[28].contentEditable = "false";td[72].textContent = "7"; td[72].contentEditable = "false";td[68].textContent = "7"; td[68].contentEditable = "false";td[23].textContent = "8"; td[23].contentEditable = "false";td[27].textContent = "8"; td[27].contentEditable = "false";td[49].textContent = "8"; td[49].contentEditable = "false";
    td[70].textContent = "8"; td[70].contentEditable = "false";td[13].textContent = "9"; td[13].contentEditable = "false";td[50].textContent = "9"; td[50].contentEditable = "false";td[33].textContent = "9"; td[33].contentEditable = "false";td[55].textContent = "9"; td[55].contentEditable = "false";td[66].textContent = "9"; td[66].contentEditable = "false";
  }else if (game === 6) {
    td[4].textContent = "1"; td[4].contentEditable = "false";td[16].textContent = "1"; td[16].contentEditable = "false";td[37].textContent = "1"; td[37].contentEditable = "false";td[57].textContent = "1"; td[57].contentEditable = "false";td[69].textContent = "1"; td[69].contentEditable = "false";td[10].textContent = "2"; td[10].contentEditable = "false";td[22].textContent = "2"; td[22].contentEditable = "false";td[70].textContent = "2"; td[70].contentEditable = "false";
    td[0].textContent = "3"; td[0].contentEditable = "false";td[14].textContent = "3"; td[14].contentEditable = "false";td[49].textContent = "3"; td[49].contentEditable = "false";td[33].textContent = "3"; td[33].contentEditable = "false";td[80].textContent = "3"; td[80].contentEditable = "false";td[9].textContent = "4"; td[9].contentEditable = "false";td[77].textContent = "4"; td[77].contentEditable = "false";td[65].textContent = "5"; td[65].contentEditable = "false";
    td[6].textContent = "6"; td[6].contentEditable = "false";td[30].textContent = "6"; td[30].contentEditable = "false";td[1].textContent = "7"; td[1].contentEditable = "false";td[12].textContent = "7"; td[12].contentEditable = "false";td[47].textContent = "7"; td[47].contentEditable = "false";td[44].textContent = "7"; td[44].contentEditable = "false";td[59].textContent = "7"; td[59].contentEditable = "false";td[48].textContent = "8"; td[48].contentEditable = "false";
    td[71].textContent = "8"; td[71].contentEditable = "false";td[21].textContent = "9"; td[21].contentEditable = "false";td[7].textContent = "9"; td[7].contentEditable = "false";td[27].textContent = "9"; td[27].contentEditable = "false";td[73].textContent = "9"; td[73].contentEditable = "false";td[60].textContent = "9"; td[60].contentEditable = "false";
  }else if (game === 7) {
    td[2].textContent = "1"; td[2].contentEditable = "false";td[12].textContent = "1"; td[12].contentEditable = "false";td[49].textContent = "1"; td[49].contentEditable = "false";td[44].textContent = "1"; td[44].contentEditable = "false";td[61].textContent = "1"; td[61].contentEditable = "false";td[39].textContent = "2"; td[39].contentEditable = "false";td[10].textContent = "3"; td[10].contentEditable = "false";td[43].textContent = "3"; td[43].contentEditable = "false";
    td[57].textContent = "3"; td[57].contentEditable = "false";td[4].textContent = "4"; td[4].contentEditable = "false";td[52].textContent = "4"; td[52].contentEditable = "false";td[66].textContent = "4"; td[66].contentEditable = "false";td[11].textContent = "5"; td[11].contentEditable = "false";td[25].textContent = "5"; td[25].contentEditable = "false";td[27].textContent = "5"; td[27].contentEditable = "false";td[19].textContent = "6"; td[19].contentEditable = "false";
    td[8].textContent = "6"; td[8].contentEditable = "false";td[36].textContent = "6"; td[36].contentEditable = "false";td[56].textContent = "6"; td[56].contentEditable = "false";td[76].textContent = "6"; td[76].contentEditable = "false";td[26].textContent = "7"; td[26].contentEditable = "false";td[34].textContent = "7"; td[34].contentEditable = "false";td[74].textContent = "7"; td[74].contentEditable = "false";td[21].textContent = "8"; td[21].contentEditable = "false";
    td[16].textContent = "8"; td[16].contentEditable = "false";td[45].textContent = "8"; td[45].contentEditable = "false";td[53].textContent = "9"; td[53].contentEditable = "false";td[54].textContent = "9"; td[54].contentEditable = "false";td[68].textContent = "9"; td[68].contentEditable = "false";
  }else if (game === 8) {
    td[11].textContent = "1"; td[11].contentEditable = "false";td[24].textContent = "1"; td[24].contentEditable = "false";td[30].textContent = "1"; td[30].contentEditable = "false";td[0].textContent = "2"; td[0].contentEditable = "false";td[44].textContent = "2"; td[44].contentEditable = "false";td[76].textContent = "2"; td[76].contentEditable = "false";td[10].textContent = "3"; td[10].contentEditable = "false";td[4].textContent = "3"; td[4].contentEditable = "false";
    td[51].textContent = "3"; td[51].contentEditable = "false";td[7].textContent = "4"; td[7].contentEditable = "false";td[35].textContent = "4"; td[35].contentEditable = "false";td[78].textContent = "4"; td[78].contentEditable = "false";td[12].textContent = "5"; td[12].contentEditable = "false";td[37].textContent = "5"; td[37].contentEditable = "false";td[72].textContent = "5"; td[72].contentEditable = "false";td[9].textContent = "6"; td[9].contentEditable = "false";
    td[41].textContent = "6"; td[41].contentEditable = "false";td[74].textContent = "6"; td[74].contentEditable = "false";td[67].textContent = "6"; td[67].contentEditable = "false";td[61].textContent = "6"; td[61].contentEditable = "false";td[36].textContent = "7"; td[36].contentEditable = "false";td[32].textContent = "7"; td[32].contentEditable = "false";td[53].textContent = "7"; td[53].contentEditable = "false";td[56].textContent = "7"; td[56].contentEditable = "false";
    td[66].textContent = "7"; td[66].contentEditable = "false";td[3].textContent = "8"; td[3].contentEditable = "false";td[42].textContent = "8"; td[42].contentEditable = "false";td[55].textContent = "8"; td[55].contentEditable = "false";td[18].textContent = "9"; td[18].contentEditable = "false";td[14].textContent = "9"; td[14].contentEditable = "false";
  }else if (game === 9) {
    td[0].textContent = "1"; td[0].contentEditable = "false";td[17].textContent = "1"; td[17].contentEditable = "false";td[68].textContent = "1"; td[68].contentEditable = "false";td[32].textContent = "2"; td[32].contentEditable = "false";td[64].textContent = "2"; td[64].contentEditable = "false";td[23].textContent = "3"; td[23].contentEditable = "false";td[53].textContent = "3"; td[53].contentEditable = "false";td[57].textContent = "3"; td[57].contentEditable = "false";
    td[69].textContent = "3"; td[69].contentEditable = "false";td[7].textContent = "4"; td[7].contentEditable = "false";td[45].textContent = "4"; td[45].contentEditable = "false";td[33].textContent = "4"; td[33].contentEditable = "false";td[75].textContent = "4"; td[75].contentEditable = "false";td[5].textContent = "5"; td[5].contentEditable = "false";td[28].textContent = "5"; td[28].contentEditable = "false";td[52].textContent = "5"; td[52].contentEditable = "false";
    td[54].textContent = "5"; td[54].contentEditable = "false";td[73].textContent = "6"; td[73].contentEditable = "false";td[61].textContent = "6"; td[61].contentEditable = "false";td[51].textContent = "7"; td[51].contentEditable = "false";td[70].textContent = "7"; td[70].contentEditable = "false";td[24].textContent = "8"; td[24].contentEditable = "false";td[30].textContent = "8"; td[30].contentEditable = "false";td[12].textContent = "9"; td[12].contentEditable = "false";
    td[77].textContent = "9"; td[77].contentEditable = "false";
  }else if (game === 10) {
    td[10].textContent = "1"; td[10].contentEditable = "false";td[6].textContent = "1"; td[6].contentEditable = "false";td[39].textContent = "1"; td[39].contentEditable = "false";td[76].textContent = "1"; td[76].contentEditable = "false";td[8].textContent = "2"; td[8].contentEditable = "false";td[45].textContent = "2"; td[45].contentEditable = "false";td[66].textContent = "2"; td[66].contentEditable = "false";td[7].textContent = "3"; td[7].contentEditable = "false";
    td[47].textContent = "3"; td[47].contentEditable = "false";td[72].textContent = "3"; td[72].contentEditable = "false";td[57].textContent = "4"; td[57].contentEditable = "false";td[70].textContent = "4"; td[70].contentEditable = "false";td[14].textContent = "5"; td[14].contentEditable = "false";td[30].textContent = "5"; td[30].contentEditable = "false";td[53].textContent = "5"; td[53].contentEditable = "false";td[79].textContent = "5"; td[79].contentEditable = "false";
    td[2].textContent = "6"; td[2].contentEditable = "false";td[16].textContent = "6"; td[16].contentEditable = "false";td[50].textContent = "6"; td[50].contentEditable = "false";td[54].textContent = "6"; td[54].contentEditable = "false";td[27].textContent = "7"; td[27].contentEditable = "false";td[44].textContent = "7"; td[44].contentEditable = "false";td[13].textContent = "8"; td[13].contentEditable = "false";td[65].textContent = "8"; td[65].contentEditable = "false";
    td[28].textContent = "9"; td[28].contentEditable = "false";
  }else if (game === 12) {
    td[26].textContent = "1"; td[26].contentEditable = "false";td[12].textContent = "2"; td[12].contentEditable = "false";td[32].textContent = "2"; td[32].contentEditable = "false";td[43].textContent = "2"; td[43].contentEditable = "false";td[10].textContent = "3"; td[10].contentEditable = "false";td[31].textContent = "3"; td[31].contentEditable = "false";td[61].textContent = "3"; td[61].contentEditable = "false";td[23].textContent = "4"; td[23].contentEditable = "false";
    td[72].textContent = "4"; td[72].contentEditable = "false";td[66].textContent = "4"; td[66].contentEditable = "false";td[25].textContent = "5"; td[25].contentEditable = "false";td[51].textContent = "5"; td[51].contentEditable = "false";td[74].textContent = "5"; td[74].contentEditable = "false";td[38].textContent = "6"; td[38].contentEditable = "false";td[58].textContent = "6"; td[58].contentEditable = "false";td[52].textContent = "7"; td[52].contentEditable = "false";
    td[63].textContent = "7"; td[63].contentEditable = "false";td[60].textContent = "7"; td[60].contentEditable = "false";td[22].textContent = "8"; td[22].contentEditable = "false";td[46].textContent = "8"; td[46].contentEditable = "false";td[2].textContent = "9"; td[2].contentEditable = "false";td[33].textContent = "9"; td[33].contentEditable = "false";td[79].textContent = "9"; td[79].contentEditable = "false";
  }
}
new_game_button.addEventListener ("click",create_game)