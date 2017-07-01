
var widthGraph = 200;
var heightGraph = 100;

var svg = d3.select('svg')

layer = svg.append('g')
				.attr('transform', 'translate(45,50)')


var transitObj = layer.append('circle')
			.attr('r', 20)
			.style('fill', 'orange')
			
layer.append('text')
	.text('CLICK')
	.attr('y', 5)
	.style('font-family', 'arial')
	.style('font-size', 11)
	.attr('text-anchor', 'middle') // yes! this means align:center
	.style('fill', '#fff')
			
layer.on('click', chainTransition)
			
// chain transitions, one after another
function chainTransition()
{
	transitObj.transition()
		.duration(2000)
		.attr('r', 100)
		.attr('cx', 100)
		.on('end', () => {
			d3.select(this)
				.transition()
				.duration(1000)
				.ease(d3.easeBounceInOut)
				.attr('cx', 200)
				.on('end', () => {
					d3.select(this)
						.transition()
						.duration(1000)
						.attr('r', 20)
						.attr('cx', 0)
				})
		})
}