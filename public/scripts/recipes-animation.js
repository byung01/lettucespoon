$(document).ready(function () {
    var recipe_types = $('ul.dropdown-menu.recipes').children();
    var url = window.location.search;
    var meal_type = url.substring(url.indexOf('=') + 1);

    var index = 0;
    switch(meal_type) {
        case "breakfast":
            index = 0;
            break;
        case "lunch/dinner":
            index = 1;
            break;
        case "starters/sides":
            index = 2;
            break;
        case "desserts":
            index = 3;
            break;
    };

    $(recipe_types[index]).addClass('active');
});
