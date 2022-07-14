function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var dia = data.getDay();
    var mes = data.getMonth();
    var estacao = '';
    
    if (minuto < 10) {
        minuto = "0" + minuto
    }

    if (mes == '12' || mes == '1' || mes == '2') {
        estacao = 'Verão'
    } else if (mes == '3' || mes == '4' || mes == '5') {
        estacao = 'Outono'
    } else if (mes == '6' || mes == '7' || mes == '8') {
        estacao = 'Inverno' 
    } else {
        estacao = 'Primavera'
    }
    
    var lista_dia = ["Domingo","Segunda","Terça","Quarta ","Quinta","Sexta","Sabádo"];
    msg.innerHTML = `Estação do ano no momento: ${estacao} <br>
    Dia da semana: ${lista_dia[dia]}-feira. <br>
    Agora são ${hora}:${minuto} horas.`
    
    if (hora >= 0 && hora < 12) {
      img.src = 'fotomanha.jpg'
      document.body.style.background = '#ADC0DB'
    } else if (hora >= 12 && hora <= 18) {
      img.src = 'fototarde.jpg'
      document.body.style.background = '#7B84A9'
    } else {
      img.src = 'fotonoite.jpg'
      document.body.style.background = '#322436'
    }

  }

    
    
