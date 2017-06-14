var svg = d3.select('svg');
		
svg.append('rect')
        .attr('width', 100)
        .attr('height', 0)

    .transition()
        .duration(1000)
        .style('fill', 'orange')
        .attr('height', 100)

    .transition()
        .attr('width', 200)
        .style('fill', 'red')
        .style('opacity', .5)

    .transition()
        .attr('transform', 'rotate(45),scale(.5)')
