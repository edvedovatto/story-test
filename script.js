var currentPage = 1;
var totalPages = 24;
var pages = [
  {
    content: 'Sua descrição de trabalho: <br> 1) Sentar em uma sala vazia com apenas um botão vermelho por 8 horas por dia. <br> 2) NUNCA pressionar o botão vermelho, aconteça o que acontecer. <br> 3) Não falar com ninguém sobre o trabalho. <br><br> Depois de muitos anos sem incidentes, seu telefone toca e uma voz severa e ligeiramente em pânico diz: <br> \"Aperte o botão. <b>AGORA!!</b>\".',
    buttonText: 'BOTAO'
  },
  {
    content: 'O telefone na minha mesa tocou. Naturalmente, eu atendi.<br>"Alô?"',
    buttonText: 'PROXIMO'
  },
  {
    content: '<b>"Aperte o botão!"</b> disse uma voz severa.',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Olhei para baixo para o botão vermelho embutido no topo da minha mesa. <br> "Posso saber com quem estou falando?" perguntei. Não que importasse - poderia ser o papa, eu ainda não apertaria aquele botão. <br> Minha descrição de trabalho era bastante clara, afinal.',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Você será designado para uma sala vazia com uma mesa e uma cadeira. No meio da mesa, haverá um grande botão vermelho. 2. Não importa o que aconteça, nunca aperte o botão vermelho. 3. Não fale com ninguém sobre seu trabalho. <br> E eu era bem pago para fazer meu trabalho - basicamente, não fazer nada. <br> Dispositivos eletrônicos não eram permitidos além da segurança, mas qualquer outra coisa que eu quisesse trazer para passar o tempo enquanto "trabalhava" estava tudo bem; livros, revistas, caça-palavras, o que quer que eu gostasse.',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Eu tinha estado lá por pouco mais de sete anos e eles nunca me testaram antes. Nunca lhes dei motivo para duvidar de mim. Mas hoje era o dia, suponho.',
    buttonText: 'PROXIMO'
  },
  {
    content: '"Não há tempo! Eu estou com a Agência! <b>VOCÊ TEM QUE APERTAR O BOTÃO!!"</b>',
    buttonText: 'PROXIMO'
  },
  {
    content: 'A Agência? Eu sempre me perguntei se isso era algum tipo de experimento secreto da CIA. Estranho, que eles acabassem de sair e dizer isso depois de todo esse tempo, no entanto. <br> Claro, isso também não importava. Se eles quisessem que eu apertasse o botão, deveriam ter me dito que havia alguma circunstância em que eu pudesse ter que apertar. Em lugar algum na regra dois a palavra "a menos que" aparece.',
    buttonText: 'PROXIMO'
  },
  {
    content: '<b>"AGORA!!"</b> a voz gritou, em misto de raiva e desespero',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Ocorreu-me que se falasse com quem me testava tempo suficiente, eles poderiam me enganar e fazer eu quebrar a regra três, de alguma forma. Então simplesmente desliguei.',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Alguns minutos depois, dois homens de terno entraram na sala. Um deles era meu chefe. Sem dizer uma palavra, ele me entregou um pedaço de papel.',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Era um aviso de rescisão. No começo, fiquei chocado ... até que percebi a linha sobre indenização. E a sobre continuar com a pensão e os benefícios de saúde. A rescisão foi mais como uma promoção; eu iria de basicamente não fazer nada, para literalmente não fazer nada, e ainda assim receberia pagamento. Era difícil reclamar.',
    buttonText: 'PROXIMO'
  },
  {
    content: 'Mas ainda assim, já que fui demitido de qualquer maneira, eu tinha que saber. <br> "O que isso faz?" eu perguntei.',
    buttonText: 'PROXIMO'
  },
  {
    content: '"Não posso lhe dar todos os detalhes, mas... isso abre uma porta", disse meu chefe.',
    buttonText: 'PROXIMO'
  },
  
  {
    content: '"Então... eu só estava me certificando de que uma porta não se abrisse?"',
    buttonText: 'PROXIMO'
  },
  
  {
    content: '"Mas como..." ele disse, pausando para pensar. "Você estava ativamente não a abrindo. Isso é tudo que posso dizer."',
    buttonText: 'PROXIMO'
  },
  
  {
    content: 'Eu concordei com a cabeça. Eu não tinha ideia do que aquilo significava, mas acho que nunca esperei uma resposta direta mesmo. <br> Peguei meu casaco e me levantei da cadeira. O cara com meu chefe ocupou meu lugar pelo botão.',
    buttonText: 'PROXIMO'
  },
  
  {
    content: '"Uma coisa que eu não entendo", disse, enquanto ele começava a me escoltar para fora. "Por que me deixar ir agora? Eu nunca falei sobre meu trabalho -- e com certeza nunca apertei aquele botão."',
    buttonText: 'PROXIMO'
  },
  
  {
    content: '"Não", concordou meu chefe. "Mas sua habilidade de continuar fazendo seu trabalho foi comprometida -- acontece às vezes, não há nada do que se envergonhar. De qualquer forma, seu problema não era a regra dois, nem a regra três. Regra um, Sr. João."',
    buttonText: 'PROXIMO'
  },
  
  {
    content: 'Franzi a testa. "Mas isso é apenas uma descrição da sala, não é?" <br> Ele concordou, conforme nos aproximávamos da segurança. <br> "Você será designado para uma sala vazia com uma mesa e uma cadeira. No meio da mesa, haverá um grande botão vermelho", citou. <br> "Eu não entendo", admiti.',
    buttonText: 'PROXIMO'
  },
  
  {
    content: '"Uma sala vazia, Sr. João, exceto pelos objetos listados."',
    buttonText: 'PROXIMO'
  },
  
  {
    content: 'Eu ainda estava confuso, quando chegamos na segurança e entreguei meu crachá de funcionário ao guarda. Meu ex-chefe me levou além do ponto de controle até a porta de saída. <br> "Eu... ainda não entendo", admiti, enquanto meu ex-empregador apertava minha mão.',
    buttonText: 'PROXIMO'
  },
  
  {
    content: '"Uma mesa, uma cadeira e um botão." <br> Eu pisquei.',
    buttonText: 'PROXIMO'
  },
  
  {
    content: 'Quando ele falou novamente, suas palavras me arrepiaram. "A sala em que você trabalhou não contém, e nunca conteve, um telefone."',
    buttonText: 'PROXIMO'
  }
  
];

document.getElementById("next-button").addEventListener("click", function() {
  if (currentPage < totalPages) {
    currentPage++;
  }
  showPage(currentPage);
});



document.getElementById("back-button").addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
  }
  showPage(currentPage);
});

function showPage(pageNumber) {
  var pageContent = document.getElementById("page-content");
  var nextButton = document.getElementById("next-button");
  var backButton = document.getElementById("back-button");
  var currentPageData = pages[pageNumber-1];
  
  pageContent.innerHTML = currentPageData.content;
  nextButton.innerHTML = currentPageData.buttonText;
  
  if (pageNumber == 1) {
    backButton.style.display = 'none';
  } else {
    backButton.style.display = 'inline-block';
  }
  if (pageNumber === totalPages) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

showPage(currentPage); // Show the first page initially
