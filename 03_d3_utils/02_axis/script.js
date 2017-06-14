var sc = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 400])

var format = d3.format('.1f')

var axis = d3.axisRight(sc)
    .ticks(5)
    .tickSize(1)
    .tickFormat(format)

d3.select('svg')
    .append('g')
    .attr('transform', 'translate(100,100)')
    .call(axis)