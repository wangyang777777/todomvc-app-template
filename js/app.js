(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!

	angular.module('TodoApp',[])
		.controller('mainController',function ($scope) {
			$scope.title='任务liebiao'
			$scope.todoText=''
			$scope.toggleAll = false;
			$scope.toggle = function () {
				$scope.todos.forEach(function (todo) {
					todo.completed = $scope.toggleAll
				})
			}
			$scope.todos=[
				{id:1, title:'吃饭',completed:false},
				{id:2, title:'睡觉',completed:true},
				{id:3, title:'打豆豆',completed:false}
			]
			$scope.addTodo=function () {
				if($scope.todoText.trim() === ''){
				   return
				}
				var id = 0
				$scope.todos.forEach(function (todo) {
					todo.id > id && (id = todo.id)
				})
				$scope.todos.push({
					id: id + 1,
					title:$scope.todoText,
					completed:false
				})
				$scope.todoText=''
				console.log($scope.todos)
			}
			$scope.destroyById = function (id) {
				var index
				$scope.todos.forEach(function (todo, i) {
					todo.id === id && (index = i)
				})
				$scope.todos.splice(index, 1)
			}
		})
})(window.angular);
