/**
 * Created by bensmith on 31/05/15.
 */
(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .'
    }
})();
