/**
 * Created by bensmith on 31/05/15.
 */
(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'This is the dodecahedron gem',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!',
                    author: 'ben@ben.com'
                },
                {
                    stars: 4,
                    body: 'It\'s pretty good!',
                    author: 'nicola@ben.com'
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Here is the Pentagonal Gem',
            canPurchase: false,
            soldOut: false,
            reviews: [
                {
                    stars: 1,
                    body: 'This gen sucks',
                    author: 'Kimberly@ben.com'
                }
            ]
        }
    ];
})();
