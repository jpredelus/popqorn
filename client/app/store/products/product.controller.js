'use strict';

class ProductController {
    constructor(lodash, MockStore,$anchorScroll) {

        // Variables for size selection animations and toggle
        this.show = false;
        this.fadeInOut = ()=> { return this.show ? 'fadeInDown' : 'fadeOutUp'; };
        this.selectSize = (size) => {
            this.show = false;
            this.size = size;
        };
        
        // Get Reviews and review score
        this.reviews = MockStore.createReviews(6);
        this.reviewAvg = 0.0;
        for (let x of this.reviews) {
            this.reviewAvg += x.score;
        }
        this.reviewAvg = this.reviewAvg/ this.reviews.length;
        
        // Get screen with and height to calculate carousel dimensions
        const elemPos = angular.element(document.body)[0].getBoundingClientRect();
        this.caroWidth = elemPos.width * 0.60;
        this.caroHeight = elemPos.height * 0.85;
        
        // get images for carousel
        const _ = lodash;
        this.images = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg',
    'blackman.jpg','blacktux.jpg','bluesuit.jpg','redtie.jpg','whitesuit.jpg'];
        // seems like there is a bug with the carousel so images are chunked
        this.slides = _.chunk(this.images,1);


    }
}

angular.module('paquetApp.store')
.component('product',{
    templateUrl: 'app/store/products/product.html',
    controller: ProductController,
    controllerAs: 'product'
});