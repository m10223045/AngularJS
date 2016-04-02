( function(){
	var app = angular.module('todoList', []);

	app.controller('ListController', function(){
		this.list = scopelist;
		this.newItem ={};

		this.addItem = function(){
			if (this.newItem) {
				this.newItem.isFinished=false;
				this.list.push(this.newItem);
				this.newItem = {};
			};

		};

		this.delItem = function(item){
			
			item.isFinished = true;
		};


		this.edit = function(item){
			item.editing = true;
		};

		this.save = function(item){
			delete item.editing;
		};

	});

	app.directive('textexample', function(){
		return {
			restrict: 'E',
			templateUrl: "example.html"
		};
	});

	app.directive('scalse', function(){
		return {
			restrict: 'E',
			templateUrl: "example2.html"
		};
	});

	scopelist = [{ label: "Eat Dinner", isFinished: false } , { label: "Go To Run", isFinished: false }];

})();