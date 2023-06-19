const frm = document.querySelector("form");
const pre = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const palavras = String(frm.inPalavra.value);

    let texto = palavras.split(" ");
    let contador = [0,0,0,0,0];

    console.log(texto.length)
    if (texto.length >= 4){
        for(let i = 0; i < texto.length; i++){
            if(palavras[i] == "a" || palavras[i] == "A"){
                contador[0]++;
            } if (palavras[i] == "e" || palavras[i] == "E"){
                contador[1]++;
            } if (palavras[i] == "i" || palavras[i] == "I"){
                contador[2]++;
            } if (palavras[i] == "o" || palavras[i] == "O"){
                contador[3]++;
            } if (palavras[i] == "u" || palavras[i] == "U"){
                contador[4]++;
            }
            pre.innerText = "A quantidade de Vogais é: ";
            pre.innerText = "Vogal A: " + contador[0];
            pre.innerText = "Vogal E: " + contador[1];
            pre.innerText = "Vogal I: " + contador[2];
            pre.innerText = "Vogal O: " + contador[3];
            pre.innerText = "Vogal U: " + contador[4];
        }
    } else {
        pre.innerText = "Você não usou quatro palavras..."
    }
})