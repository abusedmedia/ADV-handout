
var w = 500;
var h = 400;
		
// select the svg container
var svg = d3.select('svg')
			.attr('width', w)
			.attr('height', h)



	
// create a dataset
var data = d3.range(20).map((d) => Math.random())

// the x mapper
var mapx = d3.scaleLinear()
			.domain([0, data.length])
			.range([0, w])

// the y mapper
var mapy = d3.scaleLinear()
			.domain([0, 1])
			.range([0, h])

// bind the data with element
var circles = svg.selectAll('circle')
				.data(data)

// the enter selection with the incoming transition
circles.enter()
	.append('circle')
	.attr('r', 0) // initial radius
	.transition()
	.delay((d, i) => i*300)
	.attr('r', 10) // final radius
	.attr('cx', (d, i) => mapx(i))
	.attr('cy', (d, i) => mapy(d))
	.style('fill', 'orange')




// the click listener with the transition override
// here we define the new transition
d3.select('body')
	.select('#btn')
	.on('click', () => {
        
        // v4, selections are immutable
        var circles = svg.selectAll('circle')
				.data(data)
        
		// on click the running transitions will be overridden
		// a new transition for each element will begin
		circles.transition()
			.duration(500) 
			.attr('r', 10)
			.attr('cx', (d, i) => mapx(i))
			.attr('cy', (d, i) mapy(d))
			.style('fill', 'orange')

	})
