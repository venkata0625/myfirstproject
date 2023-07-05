angular.module('myApp', [])
  .controller('myController', ['$scope', '$http', function($scope, $http) {
    $scope.items = [];
  
    $http.get('/api/items')
      .then(function(response) {
        $scope.items = response.data;
      })
      .catch(function(error) {
        console.log('Error fetching items:', error);
      });
  
    $scope.addItem = function() {
      if ($scope.newItem) {
        $http.post('/api/items', { name: $scope.newItem })
          .then(function(response) {
            $scope.items.push(response.data);
            $scope.newItem = '';
          })
          .catch(function(error) {
            console.log('Error adding item:', error);
          });
      }
    };
  
    $scope.deleteItem = function(item) {
      $http.delete('/api/items/' + item.id)
        .then(function() {
          var index = $scope.items.indexOf(item);
          if (index !== -1) {
            $scope.items.splice(index, 1);
          }
        })
        .catch(function(error) {
          console.log('Error deleting item:', error);
            });
        };
      }]);
