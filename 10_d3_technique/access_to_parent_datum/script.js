var data = d3.range(5).map(function (d, i) {
    return {
        id: i,
        value: Math.random(),
        arr: d3.range(4)
    }
})


var cols = d3.scaleOrdinal(d3.schemeCategory10)


var svg = d3.select('svg')


var groups = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', function(d, i){
        return 'translate(0, '+i*100+')'
    })


// here the rect color has been specified using the parent datum
groups.selectAll('rect')
    .data(function (d) {
        return d.arr
    })
    .enter()
    .append('rect')
    .attr('width', 100)
    .attr('height', 20)
    .attr('y', function(d, i){
        return i*21
    })
    .style('fill', function (d, i) {
        var parent = d3.select(this.parentNode)
        var dd = parent.datum();
        return cols(dd.id)
    })