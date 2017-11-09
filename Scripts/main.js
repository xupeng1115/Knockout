require.config({
	baseUrl: "",
	paths:{
		"jquery":["js/jquery-1.11.3.min"],
		"knockout":["js/knockout.min"],
		"vm":["Scripts/vm"]
	}
})
require(["jquery","knockout","vm"],function($,ko,vm){
	console.log(ko);
})
