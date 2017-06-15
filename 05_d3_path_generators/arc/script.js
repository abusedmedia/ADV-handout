var svg = d3.select('svg')

var arc = d3.arc()
            .innerRadius(80)
            .outerRadius(130)
            .startAngle(Math.PI/4)
            .endAngle(Math.PI)
            
svg.append('path')
    .attr('transform', 'translate(300,300)')
    .attr('d', arc)
    .style('fill', 'orange')
