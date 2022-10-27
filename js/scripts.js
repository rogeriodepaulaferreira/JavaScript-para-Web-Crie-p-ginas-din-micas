function cliqueBotaoSom(classe){ 
    const botao = document.querySelectorAll(`.${classe}`); 
    if(botao){
        botao.forEach(element => { 
            const teclaClass = element.classList.value.replace(`${classe} `,'');   
            const tecla = document.querySelector(`#som_${teclaClass}`)
            if(tecla){
                element.addEventListener("click", () => {  
                    tecla.play();
                });
                element.addEventListener("keydown", function(event) {
                    if (event.key === "Enter" || event.key === "Space") {
                        this.classList.add("ativa");
                    }
                });
                element.addEventListener("keyup", function(event) {
                    if (event.key === "Enter" || event.key === "Space" ) {
                        this.classList.remove("ativa");
                    }
                });
            } 
        }); 
    }
    
}
cliqueBotaoSom('teclado');