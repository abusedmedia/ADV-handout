
		
var data = [[10,  20, 30],
			[20,  10, 40],
			[80,  5, 10]]

var chord = d3.chord(data)
	.padding(.1)
	.sortSubgroups(d3.descending)
	.sortChords(d3.descending);
		

var arc = d3.svg.arc()
	.innerRadius(100)
	.outerRadius(150)

var crd = d3.svg.chord()	
	.radius(150)

var cols = d3.scaleOrdinal( d3.schemeCategory10 )

d3.select('svg').append('g')
	.attr('transform', 'translate(300,300)')
	.selectAll('path')
	.data(chord.groups)
	.enter()
	.append('path')
	.attr('d', arc)
	.style('fill', function(d, i){
		return cols(i)
	})
	.style('stroke', 'none')

