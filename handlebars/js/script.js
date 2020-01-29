$(document).ready(function() {
  $("button").click(function() {
    var testo = $("#input").val();
    var data = new Date();
    var minuti = data.getMinutes();
    var ore = data.getHours();
    var orario = ore + ":" + minuti;
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
      messaggio: testo,
      orario: orario,
      inviatoRicevuto: "inviato"
    };
    var html = template(context);
    $("#container").append(html);


    setTimeout(function() {
      var source = document.getElementById("entry-template").innerHTML;
      var template = Handlebars.compile(source);
      var context = {
        messaggio: "ok",
        orario: orario,
        inviatoRicevuto: "ricevuto"
      };
      var html = template(context);
      $("#container").append(html);

    }, 1000);
  })
});
