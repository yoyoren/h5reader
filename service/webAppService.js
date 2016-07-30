var fs = require('fs');
exports.get_index_data = function(){
	var content = fs.readFileSync('./mock/home.json','utf-8');
	return content;
}

exports.get_book_data = function(id){
	if(!id){
		id = "18218";
	}
	var content = fs.readFileSync('./mock/book/'+id+'.json','utf-8');
	return content;
}

//阅读器改造代码
exports.get_reader_content_data = function(chapterId){
	var content = fs.readFileSync('./mock/reader/data'+ chapterId +'.json','utf-8');
	return content;
}

exports.get_reader_chapter_data = function(){
	var content = fs.readFileSync('./mock/reader/chapter.json','utf-8');
	return content;
}