$(document).ready(function() {
  var studente = {
    "nome" : "ben",
    "cognome" : "maggio",
    "eta" : 36
  };

  for (var key in studente) {
    console.log(studente[key]);
  }

  var arrayStudenti = [
    {
      "nome" : "andrea",
      "cognome" : "pacifico",
      "eta" : 35
    },
    {
      "nome" : "luca",
      "cognome" : "brolli",
      "eta" : 30
    },
    {
      "nome" : "lucia",
      "cognome" : "cataldo",
      "eta" : 25
    }
  ]

  for (var i = 0; i < arrayStudenti.length; i++) {
    $("#container").append("<p>" + arrayStudenti[i].nome + " " + arrayStudenti[i].cognome + "</p>");
  }

  var newStudent = {};
  newStudent.nome = prompt("inserisci il nome del nuovo studente");
  newStudent.cognome = prompt("inserisci il cognome del nuovo studente");
  newStudent.eta = parseInt(prompt("inserisci l'età del nuovo studente"));

  arrayStudenti.push(newStudent);
  for (var i = 0; i < arrayStudenti.length; i++) {
    for (var key in arrayStudenti[i]) {
      $("#container").append("<p>" + arrayStudenti[i][key] + "</p>");
    }
  }
});
