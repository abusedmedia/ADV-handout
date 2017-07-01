
var widthGraph = 600;
var heightGraph = 250;

var svg = d3.select('svg')

var layer = svg.append('g')
	.attr('transform', 'translate(10,10)')

layer.append('rect')
	.attr('width', widthGraph)
	.attr('height', heightGraph)
	.attr('fill', '#eee')

// create a dataset, an array of arrays
function createDataset()
{
	var dd = d3.range(3).map( () => d3.range(10).map( () => Math.random() ) )
	return dd;
}
data = createDataset();
console.log(data);


// create the map functions
var area_mapx = d3.scaleLinear()
			.domain([0, 9]) // why it needs 9 instead 10 ??
			.range([0, widthGraph])
			
var area_mapy = d3.scaleLinear()
			.domain([0, 1])
			.range([0, heightGraph])
    
var area = d3.area()
    .x((d,i) => area_mapx(i) )
    .y1((d) => area_mapy(d) )
    .y0(heightGraph)
    .curve(d3.curveBasis)
    
    
var col_scale = d3.scaleOrdinal(d3.schemeCategory10);

var areas = layer.selectAll('path')
		.data(data)
		.enter()
			.append('path')
			.attr("d", (d) => area(d))
			.style('fill', (d,i) => col_scale(i))
			.style('opacity', .9)


layer.on('click', function(){

	var newdata = createDataset();
	
	d3.select(this).selectAll("path")
	    .data(newdata)
	.transition()
	    .duration(1000)
	    .ease(d3.easeExpInOut)
	    .attr("d", (d) => area(d))
	
});