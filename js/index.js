var app = angular.module("myApp",[]);

		app.controller("myCtrl",function($scope){

			$scope.incomplete = false;//判断输入框是否有输入
			$scope.myInput = "";//输入的值

			$scope.$watch("myInput",function(){$scope.test()});//监视输入框输入值的变化
			$scope.test = function(){
				$scope.incomplete = false;
				if(!$scope.myInput.length){
					$scope.incomplete = true;
				}
			}

			//创建数组对象
			$scope.items = [
				{
					myText:'这是我的第一条留言',
					done:false,
					editing:false

				}
			];
			//添加node
			$scope.add = function(){

				$scope.items.push(
					{
						myText:$scope.myInput,
						done:false
					}
				);
				$scope.myInput = "";
			}
			//修改node
			$scope.modify = function(){
				$scope.edit = !$scope.edit;
			}
			//删除node
			$scope.remove = function(){
				var olditem = $scope.items;
				$scope.items = [];
				angular.forEach(olditem,function(x){
					if(!x.done){
						$scope.items.push(x);
					}
				})
			}
		});	

		app.filter("reverse",function(){
			return function(items){
				return items.slice().reverse();
			}
		})