angular.module('myApp')
    .controller('mainCtrl', function($scope){
      $scope.images = ['../images/2017-02-11_0001.jpg',
      '../images/2017-02-11_0002.jpg',
      '../images/2017-02-11_0003.jpg',
      '../images/2017-02-11_0004.jpg',
      '../images/2017-02-11_0005.jpg',
      '../images/2017-02-11_0006.jpg',]

      $scope.person = {
        'image': [
          '../images/2017-02-11_0010.jpg',
          '../images/2017-02-11_0011.jpg']
      }

    })
