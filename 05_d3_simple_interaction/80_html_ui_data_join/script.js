
// the dataset
var data_selector = [{id:1, label:"Label 1", color:'#000', radius:20},
					 {id:2, label:"Label 2", color:'#f00', radius:30},
					 {id:3, label:"Label 3", color:'#0f0', radius:40},
					 {id:4, label:"Label 4", color:'#00f', radius:50},
					 {id:5, label:"Label 5", color:'#555', radius:60}]

// create buttons based on the dataset
d3.select('body')
		.selectAll('input')
		.data(data_selector)
		.enter()
		.append('input')
		.attr('type', 'button')
		.attr('value', function(d){
			return d.label;
		})
		
		.on('click', function(d){

			// note I'm using 'd' instead 'this' used in previous example
			changeStatus(d);
		})
		





var w = 600;
var h = 600;
		
// select the svg container
var svg = d3.select('svg')
			.attr('width', w)
			.attr('height', h)


var myCircle = svg.append('circle')
				.attr('r', 50)
				.attr('cx', w/2)
				.attr('cy', h/2)


function changeStatus(d){
	myCircle.transition()
		.style('fill', d.color)
		.attr('r', d.radius)
}