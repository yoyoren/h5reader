$.get('/ajax/index',function(d){
	new Vue({
	  el: '#app',
	  data: {
	    top : d.items[0].data,
	    hot:d.items[1].data.data,
	    recommend:d.items[2].data
	  }
	});
},'json');