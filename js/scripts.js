document.getElementById('btnEnviar').addEventListener('click', function() {
 
    var nome = document.getElementById('inNome').value;
    var cargo = document.getElementById('inCargo').value;
    var depto = document.getElementById('inDepto').value;

    
    document.getElementById('spNome').innerText = nome;
    document.getElementById('spCargo').innerText = cargo;
    document.getElementById('spDepto').innerText = depto;

    // Exibe a foto do funcionário
    var foto = document.getElementById('inImg').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        var imgElement = document.createElement('img');
        imgElement.src = reader.result;
        imgElement.id = 'foto';
        imgElement.style.width = '100px'; 
        document.getElementById('area-foto').innerHTML = ''; 
        document.getElementById('area-foto').appendChild(imgElement);
    }
    if (foto) {
        reader.readAsDataURL(foto); 
    } else {
        document.getElementById('area-foto').innerHTML = 'Sem foto';
    }

    
    var qrData = `Nome: ${nome}, Cargo: ${cargo}, Depto: ${depto}`;
    document.getElementById('qrCode').innerHTML = ''; 
    
   
    var qrcode = new QRCode(document.getElementById("qrCode"), {
        text: qrData,
        width: 128,
        height: 128
    });
});
