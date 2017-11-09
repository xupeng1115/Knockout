define(["knockout"],function(ko){
	function Product(name,rating){
		this.name=name;
		this.userRating=ko.observable(rating||null);
	}
	
	function Vm(){
		this.products=[
			new Product('Garlic bread'),
			new Product('Pain au chocolat'),
			new Product('Seagull spaghetti','like')
		];
		this.AddProducts=ko.observableArray();
	}
	
	Vm.prototype.addProduct=function(){
		var name='Product' + (this.AddProducts().length+1);
		this.AddProducts.push(new Product(name));
	}
	
	ko.components.register('like-widget',{
		viewModel:function(params){
			this.chosenValue=params.value;
			
			this.like=function(){
				this.chosenValue('like');
			}.bind(this);
			this.dislike=function(){
				this.chosenValue('dislike');
			}.bind(this);
		},
		template:
			'<div class="like-or-dislike" data-bind="visible:!chosenValue()">\
				<button data-bind="click:like">Like it</button>\
				<button data-bind="click:dislike">Dislike it</button>\
			</div>\
			<div class="result" data-bind="visible:chosenValue">\
				You <strong data-bind="text:chosenValue"></strong> it\
			</div>'
	});
	
	ko.applyBindings(new Vm());
})