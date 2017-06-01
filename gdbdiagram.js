var dataGdb = [
  {letter: 0, frequency: 0},
  {letter: 0, frequency: 1},
  {letter: 1, frequency: 1},
  {letter: 1, frequency: 2},
  {letter: 2, frequency: 2},
  {letter: 2, frequency: 3},
  {letter: 3, frequency: 3},
  {letter: 3, frequency: 4},
  {letter: 4, frequency: 4},
  {letter: 4, frequency: 5},
  {letter: 5, frequency: 5},
  {letter: 5, frequency: 1},
  {letter: 6, frequency: 1},
  {letter: 6, frequency: 2},
  {letter: 7, frequency: 2},
  {letter: 7, frequency: 3},
  {letter: 8, frequency: 3},
  {letter: 8, frequency: 4},
  {letter: 9, frequency: 4},
  {letter: 9, frequency: 5},
  {letter: 10, frequency: 5},
  {letter: 10, frequency: 1},
  {letter: 11, frequency: 1},
  {letter: 11, frequency: 2},
  {letter: 12, frequency: 2},
];

var svg = d3.select("svg"),
    margin = {top: 50, right: 10, bottom: 100, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");



var x = d3.scaleLinear()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);



var line = d3.line()
    .x(function(d) { return x(d.letter); })
    .y(function(d) { return y(d.frequency); });

  x.domain(dataGdb.map(function(d) { return d.letter; }));
  y.domain(dataGdb.map(function(d) { return d.frequency; }));

  g.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(0)")
      .attr("y", 4)
      .attr("dy", "2.21em")
      .style("text-anchor", "start")
      .text("Instant");
   




  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .style("text-anchor", "end")
      .text("Sequence ID");

  g.append("path")
      .datum(dataGdb)
      .attr("class", "line")
      .attr("d", line);



  g.selectAll(".dot")
    .data(dataGdb)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", line.x())
    .attr("cy", line.y())
    .attr("r", 0.9);


