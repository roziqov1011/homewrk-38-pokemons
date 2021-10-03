

    var elCard = document.querySelector('.card');
for (var i = 0; i < pokemons.length; i++){
    var elDiv = document.createElement('div');
    var elImg = document.createElement('img');
    var elB = document.createElement('b');
    var elP = document.createElement('p');
    elImg.setAttribute('src', pokemons[i].img);
    elB.textContent = pokemons[i].name;
    elP.textContent = pokemons[i].type;

    
    elDiv.appendChild(elImg);
    elDiv.appendChild(elB);
    elDiv.appendChild(elP);
    elCard.appendChild(elDiv);
    console.log(elImg);
}
