var myData = [20, 40, 100, 23, 54, 56]

d3.select('svg')
    .selectAll('rect')
    .data(myData)
    .enter()
    .append('rect')
    .attr('width', (d, i) => d)
    .attr('height', 50)
    .attr('y', (d, i) => i * 55)
