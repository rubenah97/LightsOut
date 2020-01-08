
				// hjelpe variabler
                let playAgain = document.getElementById('playAgain');
                let moves = document.getElementById('moves');
                let btn2 = document.getElementById('btn2');
                let btn3 = document.getElementById('btn3');
                let btn4 = document.getElementById('btn4');
                let færrestTrekk = document.getElementById('trekkText');
                let lvlOneReplay = document.getElementById('lvlOneReplay');
                let lvlTwoReplay = document.getElementById('lvlTwoReplay');
                let lvlThreeReplay = document.getElementById('lvlThreeReplay');
                let lvlFourReplay = document.getElementById('lvlFourReplay');
        
        
                    // Model
                let teller = 0;
                let size = '';
                let isPlaying = false;
                let winner = false;
                let Text;
                let replay = false;
                    // View
                function show() {
                    if (isPlaying === true){
                        moves.style.width = '310px';
                        moves.style.padding = '10px';
                        moves.style.color = 'salmon';
                        moves.innerHTML = 'Gjør alle sirklene røde ' + 'Du har gjort ' + teller + ' trekk';
                        færrestTrekk.innerHTML = '';
                    }	
                    else if (winner === true && isPlaying === false) {
                        moves.innerHTML = 'Du vant med ' + teller + ' trekk';
                        færrestTrekk.innerHTML = 'Færrest mulig trekk på dette nivået er ' + Text;
                    }
        
                }
                tableBox();
                function tableBox() {
                    let html = '';
                    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
                        html += '<tr>';
                        for (let columnIndex = 0; columnIndex < size; columnIndex++) {
                            html += `<td id="light${rowIndex}${columnIndex}"onclick="trykk(this, ${rowIndex}, ${columnIndex})"class="divx"></td>`;
                        }
                        html += '</tr>';
                    }
                    html = '<table>' + html + '</table>';
                    document.getElementById('lys').innerHTML = html;
                    
                }
        
                    // Controller
        
                let lvlOne = false;
                function levelOne() {
                    lvlOneReplay.hidden = true;
                    lvlTwoReplay.hidden = true;
                    lvlThreeReplay.hidden = true;
                    lvlFourReplay.hidden = true;
                    lvlOneReplay.hidden = false;
                    lvlOne = true;
                    lvlTwo = false;
                    lvlThree = false;
                    lvlFour = false;
                    size = 3;
                    teller = 0;
                    isPlaying = true;
                    if (lvlOne) {Text = 3}
                    tableBox();
                    show();
                    document.getElementById(`light00`).classList.add('lightOn');
                    document.getElementById(`light02`).classList.add('lightOn');
                    document.getElementById(`light10`).classList.add('lightOn');
                }
        
                let lvlTwo = false;
                function levelTwo() {
                    lvlOneReplay.hidden = true;
                    lvlTwoReplay.hidden = true;
                    lvlThreeReplay.hidden = true;
                    lvlFourReplay.hidden = true;
                    lvlTwoReplay.hidden = false;
                    lvlOne = false;
                    lvlTwo = true;
                    lvlThree = false;
                    lvlFour = false;
                    size = 4;
                    teller = 0;
                    isPlaying = true;
                    if (lvlTwo) {Text = 4}
                    tableBox();
                    show();			
                    document.getElementById(`light00`).classList.add('lightOn');
                    document.getElementById(`light03`).classList.add('lightOn');
                    document.getElementById(`light10`).classList.add('lightOn');
                    document.getElementById(`light12`).classList.add('lightOn');
                    document.getElementById(`light20`).classList.add('lightOn');
                    document.getElementById(`light22`).classList.add('lightOn');
                    document.getElementById(`light23`).classList.add('lightOn');
                    document.getElementById(`light32`).classList.add('lightOn');
                    document.getElementById(`light33`).classList.add('lightOn');
                }
        
                let lvlThree = false;
                function levelThree(){
                    lvlOneReplay.hidden = true;
                    lvlTwoReplay.hidden = true;
                    lvlThreeReplay.hidden = true;
                    lvlFourReplay.hidden = true;
                    lvlThreeReplay.hidden = false;
                    lvlOne = false;
                    lvlTwo = false;
                    lvlThree = true;
                    lvlFour = false;
                    size = 5;
                    teller = 0;
                    isPlaying = true;
                    if (lvlThree) {Text = 11}
                    tableBox();
                    show();
                    document.getElementById(`light00`).classList.add('lightOn');
                    document.getElementById(`light01`).classList.add('lightOn');
                    document.getElementById(`light03`).classList.add('lightOn');
                    document.getElementById(`light04`).classList.add('lightOn');
                    document.getElementById(`light12`).classList.add('lightOn');
                    document.getElementById(`light13`).classList.add('lightOn');
                    document.getElementById(`light20`).classList.add('lightOn');
                    document.getElementById(`light21`).classList.add('lightOn');
                    document.getElementById(`light22`).classList.add('lightOn');
                    document.getElementById(`light23`).classList.add('lightOn');
                    document.getElementById(`light30`).classList.add('lightOn');
                    document.getElementById(`light34`).classList.add('lightOn');
                    document.getElementById(`light42`).classList.add('lightOn');
                    document.getElementById(`light43`).classList.add('lightOn');
        
                }
                
                let lvlFour = false;
                function levelFour(){
        
                    lvlOneReplay.hidden = true;
                    lvlTwoReplay.hidden = true;
                    lvlThreeReplay.hidden = true;
                    lvlFourReplay.hidden = true;
                    lvlFourReplay.hidden = false;
                    lvlOne = false;
                    lvlTwo = false;
                    lvlThree = false;
                    lvlFour = true;
                    size = 6;
                    teller = 0;		
                    isPlaying = true;
                    if (lvlFour) {Text = 18}
                    tableBox();
                    show();
                    document.getElementById(`light00`).classList.add('lightOn');
                    document.getElementById(`light01`).classList.add('lightOn');
                    document.getElementById(`light02`).classList.add('lightOn');
                    document.getElementById(`light04`).classList.add('lightOn');
                    document.getElementById(`light05`).classList.add('lightOn');
                    document.getElementById(`light12`).classList.add('lightOn');
                    document.getElementById(`light14`).classList.add('lightOn');
                    document.getElementById(`light20`).classList.add('lightOn');
                    document.getElementById(`light22`).classList.add('lightOn');
                    document.getElementById(`light23`).classList.add('lightOn');
                    document.getElementById(`light25`).classList.add('lightOn');
                    document.getElementById(`light30`).classList.add('lightOn');
                    document.getElementById(`light33`).classList.add('lightOn');
                    document.getElementById(`light41`).classList.add('lightOn');
                    document.getElementById(`light43`).classList.add('lightOn');
                    document.getElementById(`light45`).classList.add('lightOn');
                    document.getElementById(`light50`).classList.add('lightOn');
                    document.getElementById(`light53`).classList.add('lightOn');
                    document.getElementById(`light55`).classList.add('lightOn');
                    
                }
        
                function trykk(element, rowIndex, columnIndex) {
                    if (isPlaying){
        
                    teller++;
                    element.classList.toggle('lightOn');
                    if (document.getElementById(`light${rowIndex}${columnIndex + 1}`) != null) {
                        document.getElementById(`light${rowIndex}${columnIndex + 1}`).classList.toggle('lightOn')
                    }
                    if (document.getElementById(`light${rowIndex}${columnIndex - 1}`) != null) {
                        document.getElementById(`light${rowIndex}${columnIndex - 1}`).classList.toggle('lightOn')
                    }
                    if (document.getElementById(`light${rowIndex - 1}${columnIndex}`) != null) {
                        document.getElementById(`light${rowIndex - 1}${columnIndex}`).classList.toggle('lightOn')
                    }
                    if (document.getElementById(`light${rowIndex + 1}${columnIndex}`) != null) {
                        document.getElementById(`light${rowIndex + 1}${columnIndex}`).classList.toggle('lightOn')
                    }
                    }
                    if (lvlOne){
        
                    let lvlOneWinner = document.getElementById(`light00`).classList.contains('lightOn') &&
                        document.getElementById(`light01`).classList.contains('lightOn') &&
                        document.getElementById(`light02`).classList.contains('lightOn') &&
                        document.getElementById(`light10`).classList.contains('lightOn') &&
                        document.getElementById(`light11`).classList.contains('lightOn') &&
                        document.getElementById(`light12`).classList.contains('lightOn') &&
                        document.getElementById(`light20`).classList.contains('lightOn') &&
                        document.getElementById(`light21`).classList.contains('lightOn') &&
                        document.getElementById(`light22`).classList.contains('lightOn');
        
                    if (lvlOneWinner) {
                        isPlaying = false;
                        winner = true;
                        btn2.disabled = false;
        
                        show();
                        
                    }
                    }
                    if (lvlTwo) {
        
                    let lvlTwoWinner = document.getElementById('light00').classList.contains('lightOn') &&
                                       document.getElementById('light01').classList.contains('lightOn') &&
                                       document.getElementById('light02').classList.contains('lightOn') &&
                                       document.getElementById('light03').classList.contains('lightOn') &&
                                       document.getElementById('light10').classList.contains('lightOn') &&
                                       document.getElementById('light11').classList.contains('lightOn') &&
                                       document.getElementById('light12').classList.contains('lightOn') &&
                                       document.getElementById('light13').classList.contains('lightOn') &&
                                       document.getElementById('light20').classList.contains('lightOn') &&
                                       document.getElementById('light21').classList.contains('lightOn') &&
                                       document.getElementById('light22').classList.contains('lightOn') &&
                                       document.getElementById('light23').classList.contains('lightOn') &&
                                       document.getElementById('light30').classList.contains('lightOn') &&
                                       document.getElementById('light31').classList.contains('lightOn') &&
                                       document.getElementById('light32').classList.contains('lightOn') &&
                                       document.getElementById('light33').classList.contains('lightOn');
        
                    if (lvlTwoWinner){
                        isPlaying = false;
                        winner = true;
                        btn3.disabled = false;
                        show();
                    }
                    }
                    if (lvlThree) {
        
                    let lvlThreeWinner = document.getElementById('light00').classList.contains('lightOn') &&
                                         document.getElementById('light01').classList.contains('lightOn') &&
                                         document.getElementById('light02').classList.contains('lightOn') &&
                                         document.getElementById('light03').classList.contains('lightOn') &&
                                         document.getElementById('light04').classList.contains('lightOn') &&
                                         document.getElementById('light10').classList.contains('lightOn') &&
                                         document.getElementById('light11').classList.contains('lightOn') &&
                                         document.getElementById('light12').classList.contains('lightOn') &&
                                         document.getElementById('light13').classList.contains('lightOn') &&
                                         document.getElementById('light14').classList.contains('lightOn') &&
                                         document.getElementById('light20').classList.contains('lightOn') &&
                                         document.getElementById('light21').classList.contains('lightOn') &&
                                         document.getElementById('light22').classList.contains('lightOn') &&
                                         document.getElementById('light23').classList.contains('lightOn') &&
                                         document.getElementById('light24').classList.contains('lightOn') &&
                                         document.getElementById('light30').classList.contains('lightOn') &&
                                         document.getElementById('light31').classList.contains('lightOn') &&
                                         document.getElementById('light32').classList.contains('lightOn') &&
                                         document.getElementById('light33').classList.contains('lightOn') &&
                                         document.getElementById('light34').classList.contains('lightOn') &&
                                         document.getElementById('light40').classList.contains('lightOn') &&
                                         document.getElementById('light41').classList.contains('lightOn') &&
                                         document.getElementById('light42').classList.contains('lightOn') &&
                                         document.getElementById('light43').classList.contains('lightOn') &&
                                         document.getElementById('light44').classList.contains('lightOn');
                
                    if (lvlThreeWinner){
                        isPlaying = false;
                        winner = true;
                        btn4.disabled = false;
                        show();
                    }
                    }
                    if (lvlFour) {
        
                    let lvlFourWinner = document.getElementById('light00').classList.contains('lightOn') &&
                                        document.getElementById('light01').classList.contains('lightOn') &&
                                        document.getElementById('light02').classList.contains('lightOn') &&
                                        document.getElementById('light03').classList.contains('lightOn') &&
                                        document.getElementById('light04').classList.contains('lightOn') &&
                                        document.getElementById('light05').classList.contains('lightOn') &&
                                        document.getElementById('light10').classList.contains('lightOn') &&
                                        document.getElementById('light11').classList.contains('lightOn') &&
                                        document.getElementById('light12').classList.contains('lightOn') &&
                                        document.getElementById('light13').classList.contains('lightOn') &&
                                        document.getElementById('light14').classList.contains('lightOn') &&
                                        document.getElementById('light15').classList.contains('lightOn') &&
                                        document.getElementById('light20').classList.contains('lightOn') &&
                                        document.getElementById('light21').classList.contains('lightOn') &&
                                        document.getElementById('light22').classList.contains('lightOn') &&
                                        document.getElementById('light23').classList.contains('lightOn') &&
                                        document.getElementById('light24').classList.contains('lightOn') &&
                                        document.getElementById('light25').classList.contains('lightOn') &&
                                        document.getElementById('light30').classList.contains('lightOn') &&
                                        document.getElementById('light31').classList.contains('lightOn') &&
                                        document.getElementById('light32').classList.contains('lightOn') &&
                                        document.getElementById('light33').classList.contains('lightOn') &&
                                        document.getElementById('light34').classList.contains('lightOn') &&
                                        document.getElementById('light35').classList.contains('lightOn') &&
                                        document.getElementById('light40').classList.contains('lightOn') &&
                                        document.getElementById('light41').classList.contains('lightOn') &&
                                        document.getElementById('light42').classList.contains('lightOn') &&
                                        document.getElementById('light43').classList.contains('lightOn') &&
                                        document.getElementById('light44').classList.contains('lightOn') &&
                                        document.getElementById('light45').classList.contains('lightOn') &&
                                        document.getElementById('light50').classList.contains('lightOn') &&
                                        document.getElementById('light51').classList.contains('lightOn') &&
                                        document.getElementById('light52').classList.contains('lightOn') &&
                                        document.getElementById('light53').classList.contains('lightOn') &&
                                        document.getElementById('light54').classList.contains('lightOn') &&
                                        document.getElementById('light55').classList.contains('lightOn');
                                    
                    if (lvlFourWinner){
                        isPlaying = false;
                        winner = true;
                        show();	
                    }
                    }
                    show();
                }
        
        