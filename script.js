let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
        habilidades[10].classList.add("javascript");
        habilidades[11].classList.add("htmlcss");
        habilidades[12].classList.add("photoshop");
        habilidades[13].classList.add("wordpress");
        habilidades[14].classList.add("drupal");
        habilidades[15].classList.add("comunicacion");
        habilidades[16].classList.add("trabajo");
        habilidades[17].classList.add("creatividad");
        habilidades[18].classList.add("dedicacion");
        habilidades[19].classList.add("proyect");
        habilidades[20].classList.add("javascript");
        habilidades[21].classList.add("htmlcss");
        habilidades[22].classList.add("photoshop");
        habilidades[23].classList.add("wordpress");
        habilidades[24].classList.add("drupal");
        habilidades[25].classList.add("comunicacion");
        habilidades[26].classList.add("trabajo");
        habilidades[27].classList.add("creatividad");
        habilidades[28].classList.add("dedicacion");
        habilidades[29].classList.add("proyect");
        habilidades[30].classList.add("drupal");
        habilidades[31].classList.add("comunicacion");
        habilidades[32].classList.add("trabajo");
        habilidades[33].classList.add("creatividad");
        habilidades[34].classList.add("dedicacion");
        habilidades[35].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 