var w = 600
var h = 600

// select the svg container
var svg = d3.select('svg')

// create an event dispatcher
var dispatcher = d3.dispatch('my_event')

// wait for 2 seconds something
setTimeout(go, 2000)

function go () {
  // send the message with some arguments
  dispatcher.call('my_event', { context: 'object' }, { key: 'arguments' })
}

// if you listen the same event more than once, you must use a namespace (.one, .whatever)
// in order to have unique name

// listen for the event
dispatcher.on('my_event.one', function (res) {
  console.log('received 1', res, this)
})

// listen for the event
dispatcher.on('my_event.two', function (res) {
  console.log('received 2', res)
})
