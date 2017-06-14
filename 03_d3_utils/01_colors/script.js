var svg = d3.select('svg')

var data = d3.range(10)



var scale = d3.scaleLinear() // v4
  .domain([0, data.length-1])
  .range([0, 100])

// var colorsa = d3.scale.category20() // v3
var colorsa = d3.scaleOrdinal(d3.schemeCategory20); // v4

svg.append('g')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', function(d, i){
    return scale(d);	
  })
  .attr('y', function(d, i){
	return i*10;
  })
  .style('fill', function(d, i){
    return colorsa(i)  
  })





var colorsb = d3.scaleLinear() // v4
    .domain([0, 10])
    .range(['red', 'green'])

svg.append('g')
  .attr('transform', 'translate(120,0)')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', function(d, i){
    return scale(d);	
  })
  .attr('y', function(d, i){
	return i*10;
  })
  .style('fill', function(d, i){
    return colorsb(i)  
  })



