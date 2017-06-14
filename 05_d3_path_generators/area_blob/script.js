var svg = d3.select('svg');

var width = 600;
var height = 300;

var ddarea = d3.range(12).map(function(d){
	return -Math.PI/2 + (Math.PI*2 / 12) * d;
});

var blob = svg.append("path")
    .attr('transform', 'translate(300,300)')
    .style('stroke-width', 1)
    .style('fill', 'orange')
    

function trans(){

	var areablob = d3.line()
	    .x(function(d) { return Math.sin(d) * 100+Math.random()*20; })
	    .y(function(d) { return Math.cos(d) * 100+Math.random()*20; })
        .curve(d3.curveBasisClosed) // v4

	blob.transition()
		.duration(2000)
		.ease(d3.easeElasticInOut) // v4
		.attr("d", areablob(ddarea))
		.on('end', function(){ // v4
			trans();
		});
}

trans();

