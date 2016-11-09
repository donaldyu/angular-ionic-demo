/**
 * Created by donaldyu on 11/3/2016.
 */
(function(app) {
    //设置全局的路由导航
    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when("", "/home");  //设置默认显示的模版

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../tpls/home.html',
                controller: function($scope) {
                    console.log('this is home page -.-');
                }
            })
            .state('pages', {
                url: '/pages/:id',
                templateUrl: function($stateParams) {
                    console.log($stateParams);
                    var url = "";
                    switch($stateParams.id) {
                        case "1": url = '../tpls/firstPage.html'; break;
                        case "2": url = '../tpls/secondPage.html'; break;
                        case "3": url = '../tpls/thirdPage.html'; break;
                    }
                    return url;
                },
                controller: function($scope) {
                    console.log('Enter New Page -.-');
                }
            });
    });
})(app);