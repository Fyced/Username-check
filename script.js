var currentlyOn = false;

function crearInicioSesion(){
  if(currentlyOn == false){
    var divN = document.createElement('div');
    divN.id = "divN";
    var divP = document.createElement('div');
    divP.id = "divP";
    var divH = document.createElement('div');
    divH.id = "divH";
    var divT = document.createElement('div');
    divT.id = "divT";

    var form = document.createElement('form');
    form.id = 'myform';
    form.method = 'POST';
    form.onsubmit = comprobarUsuario;

    var header = document.createElement('h2');
    header.textContent = 'Welcome';
    divH.appendChild(header);

    var name = document.createElement('input');
    name.id = 'name';
    name.type = 'text';
    name.style.width = '200px';
    divN.appendChild(name);

    var password = document.createElement('input');
    password.id = 'password';
    password.type = 'password';
    password.style.width = '200px';
    divP.appendChild(password);

    var button = document.createElement('input');
    button.id = 'button';
    button.type = 'submit';
    button.textContent = 'Continue';

    divT.appendChild(divH);
    divT.appendChild(divN);
    divT.appendChild(divP);
    divT.appendChild(button);

    form.appendChild(divT);

    document.body.appendChild(form);
  }

changeCurrentlyOnValue(true);
}

function comprobarUsuario(event){
event.preventDefault();

changeCurrentlyOnValue(false);

var name = document.getElementById('name');
var password = document.getElementById('password');

if((name.value == "root")&&(password.value == "admin")){
  removePasswordWindow();
  changeRootValue();
  //Funcion especifica de la pagina web
  createHeader(true);
}
}

function removePasswordWindow(){
  document.getElementById('myform').remove();
}

function changeCurrentlyOnValue(valor){
  if(valor == true){
    currentlyOn = true;
  } else {
    currentlyOn = false;
  }
}
