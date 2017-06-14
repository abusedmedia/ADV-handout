
		
var data = [[10,  20, 30],
			[20,  10, 40],
			[80,  5, 10]]

var chord = d3.chord()
	.matrix(data)
	.padding(.1)
	.sortSubgroups(d3.descending)
	.sortChords(d3.descending);
		

var arc = d3.arc()
	.innerRadius(20)
	.outerRadius(50)

var crd = d3.ribbon()	
	.radius(150)

var cols = d3.scaleOrdinal( d3.schemeCategory10 )

d3.select('svg').append('g')
	.attr('transform', 'translate(300,300)')
	.selectAll('path')
	.data(chord.chords)
	.enter()
	.append('path')
	.attr('d', crd)
	.style('fill', function(d, i){
		return cols(i)
	})
	.style('stroke', 'none')

