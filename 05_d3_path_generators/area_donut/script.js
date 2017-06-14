
var svg = d3.select('svg');

var data = d3.range(12).map(function(d){
  return {value:Math.random()*3-1}	
});

var scaler = d3.scaleLinear()
  .domain([-1, 1])
  .range([-15,15])


var r = 120;
var pad = 60

var pathGen = d3.area()
  .x1(function(d, i){
	  var ang = (Math.PI * 2) / data.length;
	  var x = Math.cos(ang*i) * r+scaler(d.value);
	  return x
  })
  .x0(function(d, i){
	  var ang = (Math.PI * 2) / data.length;
	  var x = Math.cos(ang*i) * (r+scaler(d.value) - pad)
	  return x
  })
  .y1(function(d, i){
	  var ang = (Math.PI * 2) / data.length;
	  var y = Math.sin(ang*i) * r+scaler(d.value)
	  return y
  })
  .y0(function(d, i){
	  var ang = (Math.PI * 2) / data.length;
	  var y = Math.sin(ang*i) * (r+scaler(d.value) - pad)
	  return y
  })
  //.interpolate('basis-closed')
  .curve(d3.curveBasisClosed) // v4
  


svg.append('g')
  .attr('transform', 'translate(300,300)')
  .append('path')
  .attr('d', pathGen(data))
  .style('stroke', 'black')
  .style('fill', 'orange')


