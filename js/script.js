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
    console.log(arrayStudenti[i].nome);
    console.log(arrayStudenti[i].cognome);
  }

  var newStudent = {};
  newStudent.nome = prompt("inserisci il nome del nuovo studente");
  newStudent.cognome = prompt("inserisci il cognome del nuovo studente");
  newStudent.eta = parseInt(prompt("inserisci il nome del nuovo studente"));

  arrayStudenti.push(newStudent);
  console.log(arrayStudenti);
});
