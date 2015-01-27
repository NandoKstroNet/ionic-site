angular.module('ions', [])

.directive('feature', [function() {
  return {
    restrict: 'E',
    scope: {
      img: '@',
      title: '@',
      desc: '@',
    },
    template: '<div class="feature"><img src="{{img}}"><div class="info"><span class="title">{{title}}</span><p>{{desc}}</p></div></div>'
  }
}]);
