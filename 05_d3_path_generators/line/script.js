var svg = d3.select('svg');

var width = 600;
var height = 100;

var data = d3.range(20).map(function(d){
	return Math.random()*20;
})

var mapx = d3.scaleLinear() // v4
			.domain([0, data.length])
			.range([0, width])
			
var mapy = d3.scaleLinear() // v4
			.domain([0, d3.max(data)])
			.range([0, height])
			
var line = d3.line()
			.x(function(d, i){
				return mapx(i);
			})
			.y(function(d, i){
				return mapy(d);
			})
            .curve( d3.curveBasis ) // v4
			
svg.append('path')
	.attr('d', line(data))
	.style('fill', 'none')
	.style('stroke', 'blue')
    .style('stroke-width', 3);
