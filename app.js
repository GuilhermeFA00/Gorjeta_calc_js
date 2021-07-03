//Criando a função para calcular o valor da gorjeta

function gorjeta_calc() {
    var preço_tot = document.getElementById("preço_tot").value;
    var RatingServ = document.getElementById("RatingServ").value;
    var pessoas = document.getElementById("pessoas_tot").value;


    //Estrutura condicional p/ avaliar a entrada do usuário
    if (preço_tot === "" || RatingServ == 0) {
        alert("Coloque os valores");
        return;
    }

    if (pessoas === "" || pessoas <= 1) {
        pessoas = 1;
        //Se houver apenas uma pessoa,o display é não irá mostrar nada!
        document.getElementById("p_pess").style.display = "none";
    } else {
        document.getElementById("p_pess").style.display = "block";
    }

    //Calculando o valor da gorjeta
    var valor = (preço_tot * RatingServ) / pessoas;
    valor = Math.round(valor * 100) / 100;
    valor = valor.toFixed(2);
    document.getElementById("pag_p_pessoa").style.display = "block";
    document.getElementById("gorjeta").innerHTML = valor;

};

document.getElementById("pag_p_pessoa").style.display = "none";
document.getElementById("p_pess").style.display = "none";

//Chamando a função principal
document.getElementById("calcule").onclick = function () {
    gorjeta_calc();
};