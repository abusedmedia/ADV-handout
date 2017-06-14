var w = 600;
var h = 600;

// select the svg container
var svg = d3.select('svg')


// v4
var data = d3.range(40).map(function(d){
    return {a:Math.random(), b:Math.random(), c:Math.random(), d:Math.random()}
})

var mapx = d3.scaleLinear()
            .domain([0,data.length])
            .range([0,w])

var mapy = d3.scaleLinear()
            .domain([0,1])
            .range([0,50])

// create the stack layout function
var stack = d3.stack()
            .keys(['a', 'b', 'c', 'd'])


// transform the dataset
var newdata = stack(data);
console.log(newdata)

// create the area path generator
var area = d3.area()
            .x(function(d, i){
                return mapx(i);
            })
            .y0(function(d){
                return 200-mapy(d[0])
            })
            .y1(function(d){
                return 200-mapy(d[1])
            })
            .curve(d3.curveBasis)

// some colors
var cols = d3.scaleOrdinal( d3.schemeCategory20 )


// draw the paths
var graph = svg.selectAll('path')
    .data(newdata)
    .enter()
    .append('path')
    .attr('d', function(d){
        return area(d)
    })
    .style('fill', function(d, i){
        return cols(i)
    })



