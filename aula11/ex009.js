<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NACIONALIDADE</title>
</head>
<style>
    body {
        font: normal 16pt Arial;
        color: #ffff;
        background-color: rgb(78, 145, 144); 
    }
    inpçut {
            font: normal 18pt Arial;
            width: 100px;
        }
        div#res {
            margin-top: 20px;
        }
</style>
<body>
    <h1>Verificador de Nacionalidade</h1>
    Em qual país você nasceu? <input type="text" id="pais">
    <input type="button" value="Verificar" onclick="verificar()">
    <div id="na">

    </div>
    <script>
        function verificar() {
            var país = document.getElementById('pais')
            pais_origem = String(país.value)
            na.innerHTML = `<p>Seu país de origem é <strong>${pais_origem}</strong></p>`
            if (pais_origem == 'Brasil') {
                na.textContent = `Você é Brasileiro!`;
            } else {
                na.innerHTML += `Você é estrangeiro!`;
            }
        }
    </script>
</body>

</html>
