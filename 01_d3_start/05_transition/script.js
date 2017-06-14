var svg = d3.select('svg');
		
svg.append('circle')		
		// initial properties
		.attr('cx', 50)
		.attr('cy', 50)
		.attr('r', 40)
		.transition()
        .duration(2000)
        .ease(d3.easeBounceInOut) // v4 version, no more literal string
		.attr('r', 20)
		//.each('end', endTransition) // v3 version
        .on('end', endTransition) // v4 version



function endTransition(){
	console.log('endTransition');
}
