'use strict'
var twitterApp = angular.module('twitterApp', ['ngSanitize'])
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
    var params = {screen_name:$scope.tweetUsername,count:$scope.numberOf,retweets:$scope.retweets}

    client.get('statuses/user_timeline', params, function(err, tweets, response){
      if(err)
        console.log(err)

      var newTweet = ""
      $scope.tweets = []

      for(var tweet of tweets){
        for(var w of tweet.text.split(" ")){
          if(w.slice(0,5) === "https"){
            newTweet += '<a target="_blank" href="'+ w +'">'+ w +'</a> '
          } else {
            newTweet += w + " "
          }
        }
        $scope.tweets.push(newTweet)
        newTweet = ""
        $scope.$apply()
      }
    })


  }

  $scope.fetchUser = function(){
    var params = {screen_name:$scope.userUsername}
    client.get('users/show', params,function(err, user, response){
      if(err)
        console.log(err)

      $scope.userData = user
    })
  }
})
