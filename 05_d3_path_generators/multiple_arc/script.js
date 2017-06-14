var svg = d3.select('svg')
		
var data = d3.range(10).map(function(d){
	return Math.random()*50
});

var arc = d3.arc()
			.innerRadius(60)
			.outerRadius(function(d){
				return 100+d;
			})
			.startAngle(function(d, i){
				return d * 0.11
			})
			.endAngle(function(d, i){
				return (i+1) * 0.11
			})

var colors = d3.scaleOrdinal( d3.schemeCategory20 )
					
svg.selectAll('path')
	.data(data)
	.enter()
	.append('path')
	.attr('transform', 'translate(300,300)')
	.attr('d', arc)
	.style('fill', function(d, i){
		return colors(i)
	})
	.style('stroke', 'none')