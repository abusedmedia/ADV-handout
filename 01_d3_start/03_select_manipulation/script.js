// select the svg, then set its width and height attributes
d3.select('svg')
    .attr('width', 500)
    .attr('height', 600)

// select all the rects and set their width and height attributes
d3.selectAll('rect')
    .attr('width', 100)
    .attr('height', 50)

// select all the elements with id 'r1' and set their fill style and y attribute
d3.selectAll('#r1')
    .style('fill', 'purple')
    .attr('y', 100)
