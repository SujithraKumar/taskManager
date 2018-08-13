	angular
		.module('MainApp')
		.directive('addnewlist', function () {
		return {
			restrict: "E",
			scope: false,
			template:   '<div class="card">'+
							'<div class="card-header card-header-color" ng-show="!addListItem" id="headingOne">'+
								'<h5 class="mb-0">'+
					    			 '<button class="btn btn-primary set-padding text-center" ng-click="addList()">'+
					    				'+Add New List'+
					    			 '</button>'+
								'</h5>'+
							'</div>'+
							'<div class="card-body" ng-show="addListItem">'+
									'<div class="row">'+
									    '<input type="text" class="form-control" id="listName" ng-model="listName"  placeholder="Enter list title">'+
									'</div>'+
									'<div class="row pt-3">'+
									    '<button class="btn btn-success" ng-click="addingList(listName)">Add List</button>'+
									    '<button type="button" class="close pl-1" data-dismiss="modal" aria-label="Close">'+
									        '<span aria-hidden="true">&times;</span>'+
									    '</button>'+
									'</div>'+
								'</div>'+

						'</div>',
			link: function ($scope, element, attrs, toaster) {
			}
		}
		})

		.directive('showlist', function () {
		return {
			restrict: "E",
			scope: false,
			template:   '<div class="card">'+
							'<div class="card-header card-header-color"  id="headingOne">'+
								'<h5 class="mb-0">'+
									'<span  class="listTitle pb-4"><strong>{{list.listName}}</strong></span>'+
									'<div class="row" ng-repeat="item in list.cardTitles"><span ng-show="!item.updateItem" class=" col-md-10 listItem">{{item.title}} <button class="editStyle" ng-click="edittedCard(list.listName,$index,item.title)">&#9998;</button><span class="editStyle" ng-click="removeItem(list.listName,$index)" aria-hidden="true" >&times;</span></span>'+
									'<div class="card-body"  ng-show="item.updateItem" >'+
									'<div class="row">'+
									    '<input type="text" class="form-control" id="listName" value="item.title" ng-model="item.title" placeholder="Update card title">'+
									'</div>'+
									'<div class="row pt-3">'+
									    '<button class="btn btn-success" ng-click="updateCard(list.listName,$index,item.title)">Update</button>'+
									    '<button type="button" ng-click="closeItem(list.listName,$index,item.title)" class="close pl-1" data-dismiss="modal" aria-label="Close">'+
									        '<span aria-hidden="true" >&times;</span>'+
									    '</button>'+
									'</div>'+
								'</div>'+
								'</div>'+
								'<div class="row">'+
					    			 '<button ng-show="!list.addItem" ng-click="addCard($index)" class="btn btn-primary ml-5 text-center" data-toggle="collapse" data-target="#collapseList" aria-expanded="true" aria-controls="collapseList">'+
					    				'+Add a card'+
					    			 '</button>'+
					    		'</div>'+
								'</h5>'+
							'</div>'+
							'<div class="card-body" ng-show="list.addItem" >'+
									'<div class="row">'+
									    '<input type="text" class="form-control" id="listName" ng-model="list.cardName" placeholder="Add card title">'+
									'</div>'+
									'<div class="row pt-3">'+
									    '<button class="btn btn-success" ng-click="addingCard($index,list.cardName)">Add Card</button>'+
									    '<button type="button" ng-click="closeUpdate($index)" class="close pl-1" data-dismiss="modal" aria-label="Close">'+
									        '<span aria-hidden="true" >&times;</span>'+
									    '</button>'+
									'</div>'+
								'</div>'+

						'</div>',
			link: function ($scope, element, attrs, toaster) {
			}
		};
	})
	.directive('addlistname', function () {
		return {
			restrict: "E",
			scope: false,
			template:   '<div class="card">'+
							'<div class="card-body card-header-color">'+
									'<div class="row">'+
									    '<input type="text" class="form-control" id="listName"  placeholder="Enter list title">'+
									'</div>'+
									'<div class="row pt-3">'+
									    '<button class="btn btn-success">Add List</button>'+
									    '<button type="button" class="close pl-1" data-dismiss="modal" aria-label="Close">'+
									        '<span aria-hidden="true">&times;</span>'+
									    '</button>'+
									'</div>'+
								'</div>'+

						'</div>',
			link: function ($scope, element, attrs, toaster) {
			}
		};
	});