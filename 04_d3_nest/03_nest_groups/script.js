d3.csv('dataset.csv', (error, data) => {
    
    var res = d3.nest()
		.key((d) => {
			if( d.Age < 15 ){
				return " - 15";
			}else if( 15 <= d.Age && d.Age < 20 ){
				return "15 - 20";
			}else if( 20 <= d.Age && d.Age < 30 ){
				return "20 - 30";
			}else if( 30 <= d.Age && d.Age < 40 ){
				return "30 - 40";
			}else if( 40 <= d.Age  ){
				return "40 - ";
			}else{
				return "Unknown";
			}
		})
		.sortKeys(d3.ascending) // sort the  keys
		.sortValues( (a, b) => (a.Age - b.Age)>0 ? -1 : 1 ) // sort the values (leafs) by Age
		.entries(data)
    
    
    console.log(res)
    
})