angular.module('myApp', [])
  .controller('myController', ['$scope', '$http', function($scope, $http) {
    $scope.items = [];

    // Fetch the items from the REST API endpoint
    $http.get('/api/items')
      .then(function(response) {
        $scope.items = response.data;
      })
      .catch(function(error) {
        console.log('Error fetching items:', error);
      });

    // Function to add a new item
    $scope.addItem = function() {
      if ($scope.newItemName) {
        const newItem = {
          name: $scope.newItemName
        };
        $http.post('/api/items', newItem)
          .then(function(response) {
            $scope.items.push(response.data);
            $scope.newItemName = '';
          })
          .catch(function(error) {
            console.log('Error adding item:', error);
          });
      }
    };

    // Function to delete an item
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

