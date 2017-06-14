d3.csv('dataset.csv', function (data) {

    var svg = d3.select('svg')


    // creating 3 level of nesting
    dt = d3.nest()
        .key(function (d) {
            return d.Country
        })
        .key(function (d) {
            return d.Age
        })
        .rollup(function (d) {
            return {
                num: d.length,
                male: d3.sum(d, function (c) {
                    return (c.Sex == 'M') ? 1 : 0;
                }),
                female: d3.sum(d, function (c) {
                    return (c.Sex == 'F') ? 1 : 0;
                })
            }
        })
        .entries(data)

    console.log(dt);


    // first level
    var groups = svg.selectAll('g')
        .data(dt)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {

            dt.push(d.key);

            return 'translate(0, ' + i * 50 + ')'
        })

    groups.append('rect')
        .attr('width', 500)
        .attr('height', 49)
        .style('fill', '#eee')


    // second level
    var ages = groups.selectAll('g')
        .data(function (d) {
            return d.values
        })
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            return 'translate(' + i * 20 + ', 0)'
        })

    ages.append('rect')
        .attr('width', 19)
        .attr('height', 40)
        .style('fill', '#ddd')


    // third level
    var female = ages.append('g')

    female.selectAll('circle')
        .data(function (d) {
            return d3.range(d.value.female) // v4, was .values in v3
        })
        .enter()
        .append('circle')
        .attr('r', 2)
        .attr('cx', 5)
        .style('fill', '#999')
        .attr('cy', function (d, i) {
            return i * 3
        })

    var male = ages.append('g')

    male.selectAll('circle')
        .data(function (d) {
            return d3.range(d.value.male) // v4, was .values in v3
        })
        .enter()
        .append('circle')
        .attr('r', 2)
        .style('fill', '#555')
        .attr('cx', 10)
        .attr('cy', function (d, i) {
            return i * 3
        })

})