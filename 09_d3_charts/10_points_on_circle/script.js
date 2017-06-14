


var w = 600;
var h = 600;
		
// select the svg container
var svg = d3.select('svg')
			.attr('width', w)
			.attr('height', h)

var num = 8;

var step = Math.PI*2/num;

var radius = 170;

var data = d3.range(num).map(function(d, i){
	return {
		pointOnMap:{
			x: (Math.random()*2-1)  * radius*.6,
			y: (Math.random()*2-1)  * radius*.6
		},
		pointOnCircle:{
			x:Math.cos(step*i) * radius,
			y:Math.sin(step*i) * radius
		}
	};
})

var g = svg.append('g')
		.attr('transform', 'translate(300,300)')



var circle = g.append('circle')
			.attr('r', radius)
			.style('fill', 'none')
			.style('stroke', 'ccc')



var conn = g.selectAll('.conn')
			.data(data)
			.enter()
			.append('line')
			.attr('class', 'conn')
			.attr('x1', function(d){
				return d.pointOnMap.x
			}) 			
			.attr('x2', function(d){
				return d.pointOnCircle.x
			})
			.attr('y1', function(d){
				return d.pointOnMap.y
			})
			.attr('y2', function(d){
				return d.pointOnCircle.y
			})
			.style('fill', 'none')
			.style('stroke', '#eee')
			
			

var dotsCircle = g.selectAll('.dot')
			.data(data)
			.enter()
			.append('circle')
			.attr('class', 'dot')
			.attr('cx', function(d){
				return d.pointOnCircle.x
			})
			.attr('cy', function(d){
				return d.pointOnCircle.y
			})
			.attr('r', 3)
			.style('fill', '#888')
			
			
	
	

var dotsMap = g.selectAll('.map')
			.data(data)
			.enter()
			.append('circle')
			.attr('class', 'map')
			.attr('cx', function(d){
				return d.pointOnMap.x
			})
			.attr('cy', function(d){
				return d.pointOnMap.y
			})
			.attr('r', 3)
			.style('fill', '#333')
			







var middles = g.selectAll('.mid')
			.data(data)
			.enter()
			.append('circle')
			.attr('class', 'mid')
			.attr('cx', function(d){
				return (d.pointOnMap.x+d.pointOnCircle.x)/2
			})
			.attr('cy', function(d){
				return (d.pointOnMap.y+d.pointOnCircle.y)/2
			})
			.attr('r', 3)
			.style('fill', 'none')
			.style('stroke', '#ccc')
			
						
			