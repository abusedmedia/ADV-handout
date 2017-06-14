var svg = d3.select('svg');

var data = [
    {
        a: 10,
        b: 50
    }
]



function addExtra(d) {
    d.pts = (d.pts) ? d.pts : [];
    d.pts[0] = {
        x: 0,
        y: d.a
    };
    var maxy = (d.b < d.a) ? d.a : d.b;
    var miny = (d.b < d.a) ? d.b : d.a;
    d.pts[1] = {
        x: 100,
        y: maxy
    };
    d.pts[2] = {
        x: 200,
        y: d.b
    };
}

data.forEach(function (d) {
    addExtra(d);
});



var mapy = d3.scaleLinear()
    .domain([0, 220])
    .range([20, 300])

var leftGr = svg.append('g')
    .attr('transform', 'translate(20,0)')





var rightGr = svg.append('g')
    .attr('transform', 'translate(220,0)')


var lineGr = svg.append('g')
    .attr('transform', 'translate(20,0)')


var path = d3.line()
    .x(function (d) {
        return d.x;
    })
    .y(function (d) {
        return mapy(d.y);
    })
    .curve(d3.curveBasis);

function update() {
    console.log('update');

    var left = leftGr.selectAll('circle')
        .data(data)

    var entrL = left.enter()
        .append('circle')
        .attr('r', 2)
        .style('opacity', 0)

    var allL = left.merge(entrL)

    allL.transition().duration(1500)
        .attr('cy', function (d, i) {
            return mapy(d.a)
        })
        .style('opacity', 1)



    var right = rightGr.selectAll('circle')
        .data(data)

    var entrR = right.enter()
        .append('circle')
        .attr('r', 2)
        .style('opacity', 0)

    var allR = right.merge(entrR)

    allR.transition().duration(1500)
        .attr('cy', function (d, i) {
            return mapy(d.b)
        })
        .style('opacity', 1)




    var lines = lineGr.selectAll('path')
        .data(data)

    var lineEnter = lines.enter()
        .append('path')
        .style('opacity', 0)
    
    var allLines = lineEnter.merge(lines)

    allLines.on('mouseenter', function () {
            d3.select(this)
                .style('opacity', 1)
        })
        .on('mouseleave', function () {
            d3.select(this)
                .style('opacity', .1)
        })


    allLines.transition().duration(1500)
        .attr('d', function (d) {
            return path(d.pts)
        })
        .style('stroke', 'black')
        .style('fill', 'none')
        .style('opacity', .1)



}





update();


svg.on('click', function () {

    data.forEach(function (d) {
        d.a = Math.random() * 200;
        d.b = Math.random() * 200;
        addExtra(d);
    })

    var d = {
        a: Math.random() * 200,
        b: Math.random() * 200
    };
    data.push(d);
    addExtra(d);


    update();
})