
var w = 600;
var h = 600;
		
// select the svg container
var svg = d3.select('svg')

// create the dataset
var data = d3.range(50).map(function(d){
	return {amount:2+Math.random()*20}
})

// create the data structure
var structure = d3.hierarchy({root:'root', children:data})
    .sum(function(d){
        return d.amount  
    })

// create the pack layout
var pack = d3.pack()
			//.sort(null) // by default it order the set by the specified value
			.size([w, h])
			.padding(1.5)

// convert the structure with the layout
var nodes = pack(structure)
console.log(nodes)


// reference the selection to a variable
var nodes = svg.selectAll('circle')
	.data( nodes.children )
	.enter()
	.append('circle')
	.style('fill', 'skyblue')

	.attr("cx", function(d) { 
		return d.x; 
	})
	 .attr("cy", function(d) { 
	 	return d.y; 
	})

	.attr('r', 0) // initial radius
	.transition()
	.delay(function(d, i){
		return i*50
	})

	// final radius
	.attr('r', function(d){
		return d.r
	})
	