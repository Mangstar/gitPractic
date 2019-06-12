function _addListener(target, event, callback){
	target.addEventLister(event, callback);
}

function _removeListener(target, event, callback){
	target.removeEventLister(event, callback);
}

_addListener(window, 'load', function(){

	console.log(`script started`);

});