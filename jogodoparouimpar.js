<!DOCTYPE html>
<html>
<head>
    <title>Jogo Par ou Ímpar</title>
</head>
<body>
    <h1>Jogo de Par ou Ímpar</h1>
    
    <p>Escolha Par ou Ímpar:</p>
    <input type="text" id="escolha">

    <p>Digite um número entre 1 e 9:</p>
    <input type="text" id="numero">

    <button id="jogarBotao">Jogar</button>

    <script type="text/javascript">
        document.getElementById("jogarBotao").addEventListener("click", function() {
            let escolha = document.getElementById("escolha").value;
            let numero = document.getElementById("numero").value;
            numero = parseInt(numero);
            let numeroAleatorio = Math.floor(Math.random() * 9) + 1;
            let soma = numero + numeroAleatorio;
            if (isNaN(numero) || numero < 1 || numero > 9) {
                alert("Por favor, digite um número válido entre 1 e 9.");
            } else if (escolha.toLowerCase() === "par") {

              
                if (soma % 2 === 0) {
                    alert("Você escolheu PAR.\nSeu número: " + numero + 
                          "\nNúmero do computador: " + numeroAleatorio +
                          "\nSoma: " + soma +
                          "\nResultado: PAR\nVocê venceu!");
                } else {
                    alert("Você escolheu PAR.\nSeu número: " + numero + 
                          "\nNúmero do computador: " + numeroAleatorio +
                          "\nSoma: " + soma +
                          "\nResultado: ÍMPAR\nVocê perdeu!");

                  
                }
            } else if (escolha.toLowerCase() === "impar") {

                if (soma % 2 !== 0) {
                    alert("Você escolheu ÍMPAR.\nSeu número: " + numero + 
                          "\nNúmero do computador: " + numeroAleatorio +
                          "\nSoma: " + soma +
                          "\nResultado: ÍMPAR\nVocê venceu!");
                } else {
                    alert("Você escolheu ÍMPAR.\nSeu número: " + numero + 
                          "\nNúmero do computador: " + numeroAleatorio +
                          "\nSoma: " + soma +
                          "\nResultado: PAR\nVocê perdeu!");
                  
                }
            } else {
                alert("Digite 'par' ou 'impar'.");
            }

  });
    </script>
</body>
</html>
