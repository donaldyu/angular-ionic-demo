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
        .controller('bookListCtrl', function($scope) {
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
                isShowDeleteButtons: false,
                isShowReorderButtons: false
            };

            $scope.showDeleteButtons = function() {
                this.options.isShowReorderButtons = false;
                this.options.isShowDeleteButtons = !this.options.isShowDeleteButtons;
            };

            $scope.showReorderButtons = function() {
                this.options.isShowDeleteButtons = false;
                this.options.isShowReorderButtons = !this.options.isShowReorderButtons;
            };

            $scope.moveItem = function(item, fromIndex, toIndex) {
                $scope.bookList.splice(fromIndex, 1);
                $scope.bookList.splice(toIndex, 0, item);
            };

            $scope.onItemDelete = function(book) {
                $scope.bookList.splice($scope.bookList.indexOf(book), 1);
            };
        });
})(app);