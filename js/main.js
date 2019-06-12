function _addListener(target, event, callback){
	target.addEventListener(event, callback);
}

function _removeListener(target, event, callback){
	target.removeEventListener(event, callback);
}

_addListener(window, 'load', function(){

	console.log(`script started`);

});