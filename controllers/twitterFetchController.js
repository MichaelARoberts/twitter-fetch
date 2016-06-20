'use strict'
var twitterApp = angular.module('twitterApp', [])
var utility = require('../utility/utility.js')
var Twitter = require('twitter')

var client =  new Twitter({
  consumer_key : '6U2uVgxGuXRYl8quR0zvdPyVl',
  consumer_secret : 'fP2LqomYBVUQr8tOnoquMecFHkE3CGhFRlgfVdkBQs6TMsH9Ab',
  access_token_key: '525789865-MOExQZhsLFcba69ih2iN0yyD3OTL1UYImJbkrpij',
  access_token_secret: 'WBiLdQfrubPeNpKuxj5kpqsWo2HGnAlBWgpjIAM5Kl7yP'
})

twitterApp.controller('twitterController', function($scope){
  $scope.init = function(){
    $scope.numberOf = 10;
    $scope.retweets = false;
  }


  $scope.fetchTweets = function(){
    $scope.tweets = []
    var params = {screen_name:$scope.username,count:$scope.numberOf,retweets:$scope.retweets}

    client.get('statuses/user_timeline', params, function(err, tweets, response){
      if(err)
        console.log(err)

      $scope.tweets = tweets
      $scope.$apply()
    })
  }
})
