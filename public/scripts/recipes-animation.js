$(document).ready(function () {
    var recipe_types = $('ul.dropdown-menu.recipes').children();
    var url = window.location.search;
    var meal_type = url.substring(url.indexOf('=') + 1);

    if (meal_type === "breakfast") {
        $(recipe_types[0]).addClass('active');
    }
    else if (meal_type === "lunch/dinner") {
        $(recipe_types[1]).addClass('active');
    }
    else if (meal_type === "starters/sides") {
        $(recipe_types[2]).addClass('active');
    }
    else {
        $(recipe_types[3]).addClass('active');
    }
});
