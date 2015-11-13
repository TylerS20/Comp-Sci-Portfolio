// JavaScript File
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

item1.addEventListener("click", function(){
    info1.innerHTML = "Soccer is usually played in 90 minute games(45 minute halves).";
    info2.innerHTML = "There are 11 players per team on the field.";
    info3.innerHTML = "Fun Fact: Soccer is the most played sport in the world.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "NFL Football is played in 15 minute quarters.";
    info2.innerHTML = "There are 11 players per team on the field.";
    info3.innerHTML = "Fun Fact: The superbowl is one of the most watched events on television in the USA.";
});

item3.addEventListener("click", function(){
    info1.innerHTML = "Hockey is played in 20 minute periods (3 periods).";
    info2.innerHTML = "There are 5 players per team (and a goalie) on the ice.";
    info3.innerHTML = "Fun Fact: The fastest slapshot recorded is 118 mph by Bobby Hull.";
});

item4.addEventListener("click", function(){
    info1.innerHTML = "Basketball is played in 12 minute quarters.";
    info2.innerHTML = "There are 5 players per team on the court.";
    info3.innerHTML = "Fun Fact: Stephen Curry holds the most 3-point field goals in a season with 286 made shots.";
});
                       