// populate a selector and listen for change
var data_selector = [{id:1, label:"Label 1", color:'#000'},
					 {id:2, label:"Label 2", color:'#f00'},
					 {id:3, label:"Label 3", color:'#0f0'},
					 {id:4, label:"Label 4", color:'#00f'},
					 {id:5, label:"Label 5", color:'#555'}]

d3.select('body')
		.select('#selector')
		.on('change', function(){
			// trig some action here
			console.log(this.value);

			// function defined below
			changeCircleColor(this.value);
		})
		.selectAll('option')
		.data(data_selector)
		.enter()
		.append('option')
		.attr('value', function(d){
			return d.color;
		})
		.text(function(d){
			return d.label
		});




// listen for button click, will add a new element
d3.select('body')
	.select('#btn')
	.on('click', function(){
		// trig some action here
		console.log('clicked me');

		// function defined below
		changeCircleRadius()
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


function changeCircleColor(val){
	myCircle.transition()
		.style('fill', val)
}


function changeCircleRadius(){
	myCircle.transition()
		.attr('r', 20+Math.random()*50)
}