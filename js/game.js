  function revolver() {
    arrTarjetas = [
      'Marill', 'Eevee', 'Herdier', 'Pikachu',
      'Skitty', 'Tyranitar', 'Herdier-red', 'Marill-green',
      'Marill', 'Eevee', 'Herdier', 'Pikachu',
      'Skitty', 'Tyranitar', 'Herdier-red', 'Marill-green'
    ];

    for (t in arrTarjetas) {
      pivote = Math.floor(Math.random() * 16);
      auxTarjeta = arrTarjetas[t];
      arrTarjetas[t] = arrTarjetas[pivote];
      arrTarjetas[pivote] = auxTarjeta;
    }

    document.getElementById('0').innerHTML = `<img class="${arrTarjetas[0]}" onclick="myFunction(0)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="1) ${arrTarjetas[0]}">Pokemon</span>`;
    document.getElementById('1').innerHTML = `<img class="${arrTarjetas[1]}" onclick="myFunction(1)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="2) ${arrTarjetas[1]}">Pokemon</span>`;
    document.getElementById('2').innerHTML = `<img class="${arrTarjetas[2]}" onclick="myFunction(2)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="3) ${arrTarjetas[2]}">Pokemon</span>`;
    document.getElementById('3').innerHTML = `<img class="${arrTarjetas[3]}" onclick="myFunction(3)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="4) ${arrTarjetas[3]}">Pokemon</span>`;
    document.getElementById('4').innerHTML = `<img class="${arrTarjetas[4]}" onclick="myFunction(4)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="5) ${arrTarjetas[4]}">Pokemon</span>`;
    document.getElementById('5').innerHTML = `<img class="${arrTarjetas[5]}" onclick="myFunction(5)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="6) ${arrTarjetas[5]}">Pokemon</span>`;
    document.getElementById('6').innerHTML = `<img class="${arrTarjetas[6]}" onclick="myFunction(6)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="7) ${arrTarjetas[6]}">Pokemon</span>`;
    document.getElementById('7').innerHTML = `<img class="${arrTarjetas[7]}" onclick="myFunction(7)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="8) ${arrTarjetas[7]}">Pokemon</span>`;
    document.getElementById('8').innerHTML = `<img class="${arrTarjetas[8]}" onclick="myFunction(8)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="9) ${arrTarjetas[8]}">Pokemon</span>`;
    document.getElementById('9').innerHTML = `<img class="${arrTarjetas[9]}" onclick="myFunction(9)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="10) ${arrTarjetas[9]}">Pokemon</span>`;
    document.getElementById('10').innerHTML = `<img class="${arrTarjetas[10]}" onclick="myFunction(10)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="11) ${arrTarjetas[10]}">Pokemon</span>`;
    document.getElementById('11').innerHTML = `<img class="${arrTarjetas[11]}" onclick="myFunction(11)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="12) ${arrTarjetas[11]}">Pokemon</span>`;
    document.getElementById('12').innerHTML = `<img class="${arrTarjetas[12]}" onclick="myFunction(12)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="13) ${arrTarjetas[12]}">Pokemon</span>`;
    document.getElementById('13').innerHTML = `<img class="${arrTarjetas[13]}" onclick="myFunction(13)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="14) ${arrTarjetas[13]}">Pokemon</span>`;
    document.getElementById('14').innerHTML = `<img class="${arrTarjetas[14]}" onclick="myFunction(14)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="15) ${arrTarjetas[14]}">Pokemon</span>`;
    document.getElementById('15').innerHTML = `<img class="${arrTarjetas[15]}" onclick="myFunction(15)" src="img/Sonrisa.png" alt="tapada"><span class="w3-show w3-khaki" id="16) ${arrTarjetas[15]}">Pokemon</span>`;
  }

  function myFunction(i) {

    tarjetas = document.images;
    if (tarjetas[i].alt == 'ganada') return true;
    
    console.log(tarjetas[i].className);
    let j = i + 1; j = j + ') '+ tarjetas[i].className;
    pokemon = document.getElementById(j);

    tarjetaTapada = (tarjetas[i].alt == 'tapada');

    if (tarjetaTapada) {
      tarjetas[i].src = 'img/' + tarjetas[i].className + '.png';
      tarjetas[i].alt = 'destapada';
      pokemon.innerHTML = pokemon.id;

    } else {
      tarjetas[i].src = 'img/Sonrisa.png';
      tarjetas[i].alt = 'tapada';
      pokemon.innerHTML = 'Pokemon';
    }

    for (let x in tarjetas) {
      if (tarjetas[x].alt == 'destapada') {

        for (let y in tarjetas) {
          if ((y != x) && (tarjetas[y].alt == 'destapada')) {

            if (tarjetas[x].className == tarjetas[y].className) {
              tarjetas[x].alt = 'ganada';
              tarjetas[y].alt = 'ganada';
              tarjetas[x].style.opacity = 0.2;
              tarjetas[y].style.opacity = 0.2;
              // console.log(tarjetas[x]);
            }
          }
        }

      }
    }

  }
