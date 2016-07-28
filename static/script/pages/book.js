var id = "";
$.get('/ajax/book?id=' + id,function(d){
	new Vue({
	  el: '#app',
	  data: d
	});
},'json');