var data = d3.range(5).map( (d, i) => {
    return {
        id: i,
        value: Math.random(),
        arr: d3.range( parseInt(Math.random()*6) + 1 )
    }
})


var cols = d3.scaleOrdinal(d3.schemeCategory10)


var svg = d3.select('svg')

// we use this technique to move each group based on the amount of elements in itself
var currenty = 0
var groups = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', (d, i) => {
        var y = currenty
        currenty += d.arr.length*21 + 10
        return `translate(0, ${y})`
    })
    
    

// here the rect color has been specified using the parent datum
groups.selectAll('rect')
    .data(d => d.arr)
    .enter()
    .append('rect')
    .attr('width', 100)
    .attr('height', 20)
    .attr('y', (d, i) => i*21)
    