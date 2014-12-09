$(document).ready(function() {
  var defaultData = {name: "", life: 20, poison: 0, commander: {}};
  var playerData = [{name: "Batman", life: 20},
                    {name: "The Joker", life: 10}];
  var svg = d3.select("svg");
  var players = svg.selectAll("circle").data(playerData)
  update();
  $("#player-add").click(function() {
    playerData.push({name: "new", life: 20});
    var newPlayer = svg.selectAll("circle").data(playerData)
        .enter()
        .append("circle");
    update();
  });
});

function update() {
  var svg = d3.select("svg");
  svg.selectAll("circle")
    .attr("cy", 300)
    .attr("cx", function(d, i) {return i * 100 + 100;})
    .attr("r", function(d) 100);
}
