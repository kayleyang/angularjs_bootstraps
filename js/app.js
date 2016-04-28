var myModule = angular.module('MyModule', []);
myModule.controller('SetTheme', ['$scope', 
	function($scope){
		$scope.theme = "default";
		$scope.setDefault = function(){
			$scope.theme = "default";
		};
		$scope.setPrimary = function(){
			$scope.theme = "primary";
		};
		$scope.setSuccess = function(){
			$scope.theme = "success";
		};
		$scope.setInfo = function(){
			$scope.theme = "info";
		};
	}
]);

myModule.controller('FormControl', ['$scope', 
	function($scope){
		$scope.userInfo = {name: ""};
		$scope.listPane = new Object();
		$scope.listPane.panels = [{key: new Date().getTime(), 
									pName: "",
									pType: "",
									schema: "",
									filed: ""
								  }];
		$scope.listPane.addPanel = function(){
			// alert('test');
			// $scope.listPane.panels数组中添加一个对象
			$scope.listPane.panels.push({key: new Date().getTime(),
										pName: "",
										pType: "",
										schema: "",
										filed: ""
										});
		};
		$scope.listPane.removePanel = function(){
			if($scope.listPane.panels.length <= 1){
				alert('至少保留一个面板!');
			}else{
				// $scope.listPane.panels数组中删除最后一个对象
				$scope.listPane.panels.pop();
			}
		};
		$scope.listPane.combinePanels = function(){
			var cr = new Object();
			cr.name = $scope.userInfo.name;
			cr.panels = [];
			for(var i = 0; i < $scope.listPane.panels.length; i++){
				cr.panels.push({pName: $scope.listPane.panels[i].pName,
								pType: $scope.listPane.panels[i].pType,
								schema: $scope.listPane.panels[i].schema,
								filed: $scope.listPane.panels[i].filed
								});
			}
			console.log(cr);
		};
	}
]);