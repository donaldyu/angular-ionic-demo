/**
 * Created by donaldyu on 11/3/2016.
 */
(function (app) {
    app
        .controller('navMenuCtrl', function($scope) {
            $scope.navList = [
                {title: 'first page', id: 1},
                {title: 'second page', id: 2},
                {title: 'third page', id: 3}
            ];
        })
        .controller('bookListCtrl', function($scope, $ionicListDelegate) {
            $scope.bookList = [
                { title: 'A book', price: '$ 20'},
                { title: 'B book', price: '$ 20'},
                { title: 'C book', price: '$ 20'},
                { title: 'D book', price: '$ 20'},
                { title: 'E book', price: '$ 20'},
                { title: 'F book', price: '$ 20'},
                { title: 'G book', price: '$ 20'},
                { title: 'H book', price: '$ 20'},
                { title: 'I book', price: '$ 20'},
                { title: 'J book', price: '$ 20'},
                { title: 'K book', price: '$ 20'},
                { title: 'L book', price: '$ 20'},
                { title: 'M book', price: '$ 20'}
            ];

            $scope.options = {
                isShowDeleteButtons: false
            };

            $scope.showDeleteButtons = function() {
                console.log('Trigger ShowDeleteButtons');
                this.options.isShowDeleteButtons = !this.options.isShowDeleteButtons;
                $ionicListDelegate.showDelete(this.options.isShowDeleteButtons);
            };

            $scope.onItemDelete = function(book) {
                $scope.bookList.splice($scope.bookList.indexOf(book), 1);
            };
        });
})(app);