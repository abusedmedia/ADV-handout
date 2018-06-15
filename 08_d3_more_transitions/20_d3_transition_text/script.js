var t = d3.select('svg')
    .append('text')
    .attr('x', 100)
    .attr('y', 100)
    .text('Hei')

console.log(t)

t.text('The value is: 0')
  .transition()
  .duration(3000)
  .attrTween('text', () => {
    var that = d3.select(this)
    var i = d3.interpolate(that.text(), 'The value is: 100')

    return (t) => {
      that.text(i(t))
    }
  })
