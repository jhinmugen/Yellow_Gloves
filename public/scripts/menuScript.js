var mainMenu = $("#main-menu");
var starters = $("#starters");
var wines = $("#wines");
var reccomendations = $("#recommendations")
var startersButton = $("#starters-button");
var mainDishButton = $("#main-dish-button");
var winesButton =$("#wines-button");
var recommendationsButton = $("#recommendations-button");

startersButton.click(function(){
    mainMenu.addClass("isVisible");
    starters.removeClass("isVisible");
    wines.addClass("isVisible");
    reccomendations.addClass("isVisible");
});

mainDishButton.click(function(){
    mainMenu.removeClass("isVisible");
    starters.addClass("isVisible");
    wines.addClass("isVisible");
    reccomendations.addClass("isVisible");
});

winesButton.click(function(){
    mainMenu.addClass("isVisible");
    starters.addClass("isVisible");
    wines.removeClass("isVisible");
    reccomendations.addClass("isVisible");
});

recommendationsButton.click(function(){
    mainMenu.addClass("isVisible");
    starters.addClass("isVisible");
    wines.addClass("isVisible");
    reccomendations.removeClass("isVisible");
})