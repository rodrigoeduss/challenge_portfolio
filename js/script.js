




function habilitaBotao(){
    
    const input_nome = document.querySelector("#nome");
    const input_email = document.querySelector("#email");
    const input_assunto = document.querySelector("#assunto") ;
    const botao = document.querySelector("#btn");

    if(input_nome.value.length == 0 || input_email.value.length == 0 || input_assunto.value.length == 0){
        botao.disabled = true;
        botao.classList.remove("ativo")
        return
    }else{
        botao.disabled = false;
        botao.classList.add("ativo")
    }

}