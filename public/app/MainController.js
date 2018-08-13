	angular
		.module('MainApp')
		.controller('MainController', ['$scope', '$rootScope','$location', 'MainService', MainController]);

function MainController($scope, $rootScope, $location, MainService) {

	// ****variable declaration*****

	$scope.lists=[];
	// Function Declaration
	

	$scope.getlists = function () {
		$scope.loading=true;
		MainService.getlists().then(function (result) {
			if (result.data) {
				$scope.lists = result.data;
				$scope.loading=false;
			}

		}, function (error) {
		
		});


	}

	$scope.addList = function(){
		$scope.addListItem = true;
	}

	$scope.addingList = function(listName){

		$scope.lists.push({"id":$scope.lists.length+1,"listName":listName,"cardTitles":[]});
		$scope.addListItem = false;
	}
	
	$scope.addCard = function(index){

		$scope.lists[index].addItem = true;

	}

	$scope.edittedCard=function(listName,index,cardName){
	var listIndex = $scope.validateIndex(listName, index,cardName);

		if(listIndex !=-1){
			$scope.lists[listIndex].cardTitles[index].updateItem = true;
		}
	}

	$scope.updateCard = function(listName, index,cardName){
		
		var listIndex = $scope.validateIndex(listName, index,cardName);
		if(listIndex != -1){
			$scope.lists[listIndex].cardTitles[index].updateItem = false;
			$scope.lists[listIndex].cardTitles[index].title=cardName;
		}
		
	}

	$scope.validateIndex=function(listName, index,cardName){
		for(let i=0;i<$scope.lists.length ;i++){
			if($scope.lists[i].listName == listName){
				return i;
				break;
			}
		}
	}
	$scope.closeItem = function(listName,index,cardName){
		var listIndex = $scope.validateIndex(listName, index,cardName);
		if(listIndex != -1){
			$scope.lists[listIndex].cardTitles[index].updateItem = false;
		}
	}

	$scope.addingCard = function(index,cardName){
		if(cardName){
			$scope.lists[index].cardTitles.push({title:cardName});
			$scope.lists[index].addItem= false;
		}
		else{
			return;
		}
		

	}



	$scope.closeUpdate= function(index){
		$scope.lists[index].addItem= false;

	}
	
	$scope.getlists();

};