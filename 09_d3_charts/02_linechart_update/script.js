
var widthGraph = 600;
var heightGraph = 200;

var svg = d3.select('svg')

layer = svg.append('g')
				.attr('transform', 'translate(10, 10)')



layer.append('rect')
	.attr('width', widthGraph)
	.attr('height', heightGraph)
	.attr('fill', '#eee')

var data = d3.range(20).map(function(d){
	return Math.random();
})

var line_mapx = d3.scaleLinear()
				.domain([0, data.length])
				.range([0, widthGraph])

var line_mapy = d3.scaleLinear()
			.domain([0, 1])
			.range([0, heightGraph])

var simple_line = d3.line()
    .x(function(d,i) { return line_mapx(i); })
    .y(function(d) { return line_mapy(d); })
    .curve(d3.curveBasis)
			   
			   
layer.append("path")
    .attr("d", simple_line(data))
    .style('fill', 'none')
    .style('stroke', '#909')
    .style('stroke-width', 1)
			  
			    
layer.on('click', function(){

	var newdata = d3.range(20).map(function(){
		return Math.random();
	})
	
	d3.select(this).selectAll("path")
	    .data(newdata)
	.transition()
	    .duration(500)
	    .attr("d", simple_line(newdata));
	
});