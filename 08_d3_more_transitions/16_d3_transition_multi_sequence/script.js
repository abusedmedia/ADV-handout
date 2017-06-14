
var data = d3.range(10)


var svg = d3.select('svg')

var circles = svg.selectAll('g')
	.data(data)
	.enter()
		.append('g')
		.attr('transform', function(d, i){
            return 'translate(' + i*20+', 0)'
        })


		
circles.append('circle')		
		// initial properties
		.attr('cx', function(d){
			return d*10;
		})
		.attr('id', function(d, i){
			return 'c'+i
		})
		.attr('cy', 50)
		.attr('r', 10)
		
		// first transition
        .transition()
        // delay works only in the first transition call when using sequenced transition
        .delay(function(d, i){
        	return i*1000
        })
        .attr('r', 5)
        .on('end', endTransition)
		
		// second transition, sequenced
        .transition()
		.attr('cx', function(d){
		    return d*10+50
		})
        .on('end', endTransition)
		
		
		// third transition, sequenced
		.transition()
		.attr('r', 15)
        .on('end', endTransition)
		
		// fourth transition, sequenced
		.transition()
		.attr('cx', function(d){
		    return d*10
		})
        .on('end', finalTransition)
		
		
		
function endTransition(){
	console.log('endTransition', this);
}


function finalTransition(){
	d3.select(this)
		.attr('opacity', 1)
		.transition()
		.duration(2000)
		.attr('opacity', 0)
}