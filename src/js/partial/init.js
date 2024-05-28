app.header.init()
const toggleBackground = document.getElementById('background');
const toggleLatest = document.getElementById('latest');
const togglePopular = document.getElementById('popular');

var tabItems = document.querySelectorAll('.filters-tab .tab-item');
var filterItems = document.querySelectorAll('.filters-wrapper .filter-item');
toggleLatest.addEventListener('click', () =>{
    toggleBackground.classList.add('latest');
    toggleBackground.classList.remove('popular');
    togglePopular.classList.remove('active');
    toggleLatest.classList.add('active');

});
togglePopular.addEventListener('click', () =>{
    toggleBackground.classList.add('popular');
    toggleBackground.classList.remove('latest');
    togglePopular.classList.add('active');
    toggleLatest.classList.remove('active');
    
});

tabItems.forEach(function(tabItem){
    tabItem.addEventListener('click', function(){
        tabItems.forEach(function(item){
            item.classList.remove('active');
        });
        this.classList.add('active');
    })
})
filterItems.forEach(function(filterItem){
    filterItem.addEventListener('click', function(){
        filterItems.forEach(function(item){
            item.classList.remove('active');
        });
        this.classList.add('active');
    })
});

document.addEventListener('DOMContentLoaded', function () {
        var filterButtons = document.querySelectorAll('.filter-btn');
        var cards = document.querySelectorAll('.card');

            filterButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    // Remove active class from all buttons
                    filterButtons.forEach(function (btn) {
                        btn.classList.remove('active');
                    });
                    // Add active class to the clicked button
                    this.classList.add('active');

                    var filter = this.getAttribute('data-filter');

                    // Show or hide cards based on the filter
                    cards.forEach(function (card) {
                        if (filter === 'all' || card.classList.contains(filter)) {
                            card.classList.add('visible');
                        } else {
                            card.classList.remove('visible');
                        }
                    });
                });
            });
        });

const searchBox = document.querySelector('.search-box-dropdown');
const searchArrow = document.querySelector('.search-box-dropdown .icon');

searchBox.addEventListener('click', () =>{
    searchBox.classList.toggle('active');
    searchArrow.classList.toggle('active');
});

var dropdownItem1 = document.getElementById('item1');
var dropdownItem2 = document.getElementById('item2');
var dropdownItem3 = document.getElementById('item3');
var searchValue = document.getElementById('search-value');


dropdownItem1.addEventListener('click',() =>{
    searchValue.textContent = dropdownItem1.textContent;
});
dropdownItem2.addEventListener('click',() =>{
    searchValue.textContent = dropdownItem2.textContent;
});
dropdownItem3.addEventListener('click',() =>{
    searchValue.textContent = dropdownItem3.textContent;
});


document.addEventListener('DOMContentLoaded', function () {
    var filterItems = document.querySelectorAll('.filter-item');
    var cards = document.querySelectorAll('.card-item');

    filterItems.forEach(function (filterItem) {
        filterItem.addEventListener('click', function () {
            // Remove active class from all filter items
            filterItems.forEach(function (item) {
                item.classList.remove('active');
            });
            // Add active class to the clicked filter item
            this.classList.add('active');

            var filter = this.getAttribute('data-filter');

            cards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.add('visible');
                    card.classList.remove('hidden');
                } else {
                    card.classList.remove('visible');
                    card.classList.add('hidden');
                }
            });
        });
    });

    document.querySelector('.filter-item.active').click();
});
