'use strict';

// angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
// 	function($scope, $stateParams, $location, Authentication, Articles) {
// 		$scope.authentication = Authentication;

// 		this.abilityName="What do you want to cast?";
// 		this.syntax="Syntax";

// 		$scope.create = function() {
// 			var article = new Articles({
// 				title: this.title,
// 				content: this.content
// 			});
// 			article.$save(function(response) {
// 				$location.path('articles/' + response._id);

// 				$scope.title = '';
// 				$scope.content = '';
// 			}, function(errorResponse) {
// 				$scope.error = errorResponse.data.message;
// 			});
// 		};

// 		$scope.remove = function(article) {
// 			if (article) {
// 				article.$remove();

// 				for (var i in $scope.articles) {
// 					if ($scope.articles[i] === article) {
// 						$scope.articles.splice(i, 1);
// 					}
// 				}
// 			} else {
// 				$scope.article.$remove(function() {
// 					$location.path('articles');
// 				});
// 			}
// 		};

// 		$scope.update = function() {
// 			var article = $scope.article;

// 			article.$update(function() {
// 				$location.path('articles/' + article._id);
// 			}, function(errorResponse) {
// 				$scope.error = errorResponse.data.message;
// 			});
// 		};

// 		this.generate = function() {
// 			syntax = "#showtooltip " + abilityName +
// 					 "/n//cast " + abilityName
// 		};

// 		$scope.find = function() {
// 			$scope.articles = Articles.query();
// 		};

// 		$scope.findOne = function() {
// 			$scope.article = Articles.get({
// 				articleId: $stateParams.articleId
// 			});
// 		};
// 	}
// ]);

angular.module('articles', [])
  .controller('ArticlesController', function() {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };

    this.total = function total(outCurr) {
      return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
      window.alert("Thanks!");
    };
  });