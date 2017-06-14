		
var data = {
  source:{startAngle:-Math.PI/2-.01, endAngle:-Math.PI/2+.01}, 
  target:{startAngle:Math.PI/2-.3, endAngle:Math.PI/2+.3}
}

d3.select('svg').append('g')
	.attr('transform', 'translate(300,300)')
	.append('path')
	.datum(data)
	//.attr('d', d3.svg.chord().radius(150)) // v3
	.attr('d', d3.ribbon().radius(150)) // v4, need to import the microlib
	.style('fill', 'orange')
	.style('stroke', '#f00')
