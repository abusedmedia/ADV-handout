
var toggle=false;

d3.select('body')
  .on('click', function(){
    
	var cls = (toggle) ? null : 'url(#mask)';
	d3.select('#target')
      .style('clip-path', cls)
	
	toggle=!toggle;

})