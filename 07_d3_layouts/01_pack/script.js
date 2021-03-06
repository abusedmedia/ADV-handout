
var w = 600
var h = 600

// select the svg container
var svg = d3.select('svg')

// create the dataset
var data = d3.range(50).map((d) => {
  return { amount: 2 + Math.random() * 20 }
})

// create the data structure
var structure = d3.hierarchy({ root: 'root', children: data })
// .sort(null) // by default it order the set by the specified value
  .sum((d) => d.amount)

// create the pack layout
var pack = d3.pack()
  .size([w, h])
  .padding(1.5)
// .radius(() => 10) // to use a fixed radius

// convert the structure with the layout
var nodes = pack(structure)
console.log(nodes)

// reference the selection to a variable
svg.selectAll('circle')
  .data(nodes.children)
  .enter()
  .append('circle')
  .style('fill', 'skyblue')

  .attr('cx', (d) => d.x)
  .attr('cy', (d) => d.y)

  .attr('r', 0) // initial radius
  .transition()
  .delay((d, i) => i * 50)

// final radius
  .attr('r', (d) => d.r)
