var myData = [20, 40, 100, 23, 54, 56];

d3.select('svg')
    .selectAll('rect')
    .data(myData)
    .enter()
    .append('rect')
    .attr('width', function(d, i){
        return d;
    })
    .attr('height', 50)
    .attr('y', function(d, i){
        return i * 55;
    })

