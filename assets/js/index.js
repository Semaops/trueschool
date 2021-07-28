//our_direction_carousel

class Carousel {
    constructor(options) {
        const {
            carouselSelector,
            carouselItemSelector,
            leftControlSelector,
            rightControlSelector,
            visibleCount,
        } = options;

        this.carouselElem = document.querySelector(carouselSelector);
        this.leftControlElem = document.querySelector(leftControlSelector);
        this.rightControlElem = document.querySelector(rightControlSelector);
        this.itemsLength = this.carouselElem.querySelectorAll(carouselItemSelector).length;
        this.itemSize = this.carouselElem.querySelector(carouselItemSelector).clientWidth;

        this.index = 0;
        this.visibleCount = visibleCount;
        this.moveDirection = 'right';
        this.margin = (this.carouselElem.scrollWidth - this.itemsLength * this.itemSize) / (this.itemsLength - 1);

        this.leftControlElem.addEventListener('click', this.handleStepLeft);
        this.rightControlElem.addEventListener('click', this.handleStepRight);

        this.addInterval();
    }

    updatePosition = () => {
        this.carouselElem.style = `transform: translateX(-${this.index * (this.itemSize + this.margin)}px)`;
    }

    handleStepLeft = () => {
        clearInterval(this.interval);

        if (this.index === 0) return;
        this.index--;
        this.updatePosition();
        this.addInterval();
    }

    handleStepRight = () => {
        clearInterval(this.interval);

        if (this.index >= this.itemsLength - this.visibleCount) return;
        this.index++;
        this.updatePosition();
        this.addInterval();
    }

    addInterval = () => {
        this.interval = setInterval(this.intervalCallback, 4000)
    }

    intervalCallback = () => {
        if ((this.index >= this.itemsLength - this.visibleCount) && this.moveDirection === 'right') this.moveDirection = 'left';
        else if (this.index === 0 && this.moveDirection === 'left') this.moveDirection = 'right';
        
        if (this.moveDirection === 'right') this.handleStepRight();
        else if (this.moveDirection === 'left') this.handleStepLeft();
    }
}

const ourDirectionCarousel = new Carousel({
    carouselSelector: '.our_direction_carousel',
    carouselItemSelector: '.our_direction_card',
    leftControlSelector: '.our_direction_arrow_left',
    rightControlSelector: '.our_direction_arrow_ride',
    visibleCount: 4,
});
