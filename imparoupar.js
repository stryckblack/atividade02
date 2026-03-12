<!DOCTYPE html>
<html>
<head>
    <title>Verificador de Nota</title>
</head>
<body>
    <h1>Verificador de Situação do Aluno</h1>
    <p>Insira a nota do aluno:</p>
    <input type="text" id="nota">
    <button id="verificarBotao">Verificar</button>

    <script type="text/javascript">
        document.getElementById("verificarBotao").addEventListener("click", function() {
            
            let nota = document.getElementById("nota").value;
            nota = parseFloat(nota)
            if (isNaN(nota)) {
            alert("Por favor, insira uma nota válida.");
            } else if (nota === 10) {
            alert("Parabéns! Você tirou 10, nota máxima!");
            } else if (nota >= 7) {
              alert("O aluno está aprovado com nota " + nota + ".");
            } else if (nota >= 4 && nota <= 6) {
             alert("O aluno está de recuperação com nota " + nota + ".");
            } else {
               alert("O aluno está reprovado com nota " + nota + ".");
            }
        });
    </script>
</body>
</html>
