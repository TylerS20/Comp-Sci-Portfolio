// HTML Tags/ JS Variables
var displayRound1 = document.getElementById('display1'),
    displayRound1Button = document.getElementById('display2'),
    displayRound2 = document.getElementById('display3'),
    displayRound2Button = document.getElementById('display4'),
    displayRound3 = document.getElementById('display5'),
    displayRound3Button = document.getElementById('display6'),
    displayRound4 = document.getElementById('display7'),
    displayRound4Button = document.getElementById('display8'),
    displayRound5 = document.getElementById('display9'),
    jungleButton = document.getElementById('r1Choice1'),
    islandButton = document.getElementById('r1Choice2');
    

//In the id's, "r" stands for round and "c" stands for choice

//In the comments, (x>y>z) is the route you take to access the button. 
//For example, you first clicked x then y then z in the example to the left.
//For each function text is displayed in the inner HTML and for most, buttons are added too(displayROundxButton...)


//Jungle Button Choice
jungleButton.addEventListener("click", runJungleButton);
function runJungleButton() {
    displayRound1.innerHTML = '<p>Congrats! You have just become stranded in the middle of the Jungle! <br> May the odds be ever in your favor. <br><br> As you walk around to find water, you find a baby gorilla. <br> As I see it, you have two options. <br> You can continue to look for water, <br> or you can say hi to the baby gorilla.</p>';
    displayRound1Button.innerHTML = '<input type="button" value="Gorilla" id="r2Choice1" /> <input type="button" value="Water" id="r2Choice2" />';

    //Runs when Gorilla Button is chosen from Jungle Button (Jungle>Gorilla)
    var gorillaButton = document.getElementById('r2Choice1');
    gorillaButton.addEventListener("click", runGorillaButton);
    function runGorillaButton() {
        displayRound2.innerHTML = '<p>Uh oh. You said hi to the baby... But now you have to deal with the mom. <br> You can either run away, <br> or stay where you are.</p>';
        displayRound2Button.innerHTML = '<input type="button" value="Run" id="r3Choice1" /> <input type="button" value="Stay" id="r3Choice2" />';
        
        //Runs when Run Button is chosen from Gorilla Button (Jungle>Gorilla>Run)
        var runButton = document.getElementById('r3Choice1');
        runButton.addEventListener("click", runRunButton);
        function runRunButton() {
            displayRound3.innerHTML = '<p>You ran hard. You ran as fast as you could.<br> But the mama was faster.<br> Your life was good while it lasted...<br> Right?<br><br> Game Over.</p>';
        }
        
        //Runs when Stay Button is chosen from Gorilla Button (Jungle>Gorilla>Stay)
        var stayButton = document.getElementById('r3Choice2');
        stayButton.addEventListener("click", runStayButton);
        function runStayButton() {
            displayRound3.innerHTML = '<p>The momma gorilla inches closer. <br> Just as she was about to attack, <br> Tarzan came to save the day.<br> He took you to a safe place and left you, <br> telling you to never go back there.<br> Should you go back anyway, or keep exploring?</p>';
            displayRound3Button.innerHTML = '<input type="button" value="Go Back" id="r4Choice1" /> <input type="button" value="Explore" id="r4Choice2" />';
        
            //Runs when Back Button is chosen from Stay Button (Jungle>Gorilla>Stay>Back)
            var backButton = document.getElementById('r4Choice1');
            backButton.addEventListener("click", runBackButton);
            function runBackButton() {
                displayRound4.innerHTML = '<p>You went back and were killed by the mother gorilla.<br> Just face it... You had it coming.<br><br> Game Over</p>';
            }
        
            //Runs when Explore Button is chosen from Stay Button (Jungle>Gorilla>Stay>Explore)
            var exploreButton = document.getElementById('r4Choice2');
            exploreButton.addEventListener("click", runExploreButton);
            function runExploreButton() {
                displayRound4.innerHTML = '<p>Do you want to look for a water source, <br> or a food source?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Water" id="r5Choice1" /> <input type="button" value="Food" id="r5Choice2" />';
            
                //Runs when Water Button is chosen Explore Button (Jungle>Gorilla>Stay>Explore>Water)
                var waterButton = document.getElementById('r5Choice1');
                waterButton.addEventListener("click", runWaterButton);
                function runWaterButton() {
                    displayRound5.innerHTML = '<p>You drank the water. Unfortunately, it was not good.<br> You died.<br><br> Game Over.</p>';
                }
            
                //Runs when Food Button is chosen Explore Button (Jungle>Gorilla>Stay>Explore>Food)
                var foodButton = document.getElementById('r5Choice2');
                foodButton.addEventListener("click", runFoodButton);
                function runFoodButton() {
                    displayRound5.innerHTML = '<p>You got food.<br> But you got it by swooping on a dangerous predator.<br> Obviously, you died.<br><br> Game Over.</p>';
                }
            }
        }
    }
    
    //Runs when Water Button is chosen Jungle Button (Jungle>Water)
    var waterButton2 = document.getElementById('r2Choice2');
    waterButton2.addEventListener("click", runWaterButton2);
    function runWaterButton2() {
        displayRound2.innerHTML = '<p>Good choice!<br> In about an hour, you were able to find a river of mostly drinkable water. <br> Eager to look for help, you want to move and stay near the water. <br> You can travel upsteam, <br> or you can travel downstream.</p>';
        displayRound2Button.innerHTML = '<input type="button" value="Upstream" id="r3Choice3" /> <input type="button" value="Downstream" id="r3Choice4" />';
    
        //Runs when Upstream Button is chosen from Water Button (Jungle>Water>Upstream)
        var upstreamButton = document.getElementById('r3Choice3');
        upstreamButton.addEventListener("click", runUpstreamButton);
        function runUpstreamButton() {
            displayRound3.innerHTML = '<p>You continue walking for hours until night falls.<br> You can keep walking through the night.<br> Or, you could set up a little shelter.</p>';
            displayRound3Button.innerHTML = '<input type="button" value="Walk" id="r4Choice3" /> <input type="button" value="Shelter" id="r4Choice4" />';
        
            //Runs when Walk Button is chosen from Upstream Button (Jungle>Water>Upstream>Walk)
            var walkButton = document.getElementById('r4Choice3');
            walkButton.addEventListener("click", runWalkButton);
            function runWalkButton() {
                displayRound4.innerHTML = '<p>You walked through the night.<br> You never saw the Jaguar coming.<br> How does it feel being a midnight snack?<br><br> Game Over.</p>';
            }
        
            //Runs when Shelter Button is chosen from Upstream Button (Jungle>Water>Upstream>Shelter)
            var shelterButton = document.getElementById('r4Choice4');
            shelterButton.addEventListener("click", runShelterButton);
            function runShelterButton() {
                displayRound4.innerHTML = '<p>You find a way to build a shelter to protect<br> yourself from animals. When you wake up,<br> you are hungry. Do you want to find fish?<br> Or, do you want to look for fruit?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Fish" id="r5Choice3" /> <input type="button" value="Fruit" id="r5Choice4" />';
            
                //Runs when Fish Button is chosen from Shelter Button (Jungle>Water>Upstream>Shelter>Fish)
                var fishButton = document.getElementById('r5Choice3');
                fishButton.addEventListener("click", runFishButton);
                function runFishButton() {
                    displayRound5.innerHTML = '<p>You were able to survive in the Jungle <br> and you made it your home.<br> Nice job living.<br><br> Game Over</p>';
                }
            
                //Runs when Fruit Button is chosen from Shelter Button (Jungle>Water>Upstream>Shelter>Fruit)
                var fruitButton = document.getElementById('r5Choice4');
                fruitButton.addEventListener("click", runFruitButton);
                function runFruitButton() {
                    displayRound5.innerHTML = '<p>The berries were poison.<br> I guess the odds were not in your favor.<br><br> Game Over.</p>';
                }
            }
        }
        
        //Runs when Downstream Button is chosen from Water Button (Jungle>Water>Downstream)
        var downstreamButton = document.getElementById('r3Choice4');
        downstreamButton.addEventListener("click", runDownstreamButton);
        function runDownstreamButton() {
            displayRound3.innerHTML = '<p>The more you walk, the more tired you get.<br> You feel like stopping and taking a break.<br> Should you stop or keep going?</p>';
            displayRound3Button.innerHTML = '<input type="button" value="Rest" id="r4Choice5" /> <input type="button" value="Fight On!" id="r4Choice6" />';
        
            //Runs when Rest Button is chosen from Downstream Button (Jungle>Water>Downstream>Rest)
            var restButton = document.getElementById('r4Choice5');
            restButton.addEventListener("click", runRestButton);
            function runRestButton() {
                displayRound4.innerHTML = '<p>You take a well deserved rest and find yourself looking at the sunset.<br> Do you set up shelter for the night? <br> Or do you walk through it?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Shelter" id="r5Choice5" /> <input type="button" value="Walk" id="r5Choice6" />';
            
                //Runs when Shelter Button is chosen from Rest Button (Jungle>Water>Downstream>Rest>Shelter)
                var shelterButton2 = document.getElementById('r5Choice5');
                shelterButton2.addEventListener("click", runShelterButton2);
                function runShelterButton2() {
                    displayRound5.innerHTML = '<p>Nice. You lived through the night.<br> You walked downstream in the morning and found a town.<br> You were rescued.<br><br> Game Over.</p>';
                }
            
                //Runs when Walk Button is chosen from Rest Button (Jungle>Water>Downstream>Rest>Walk)
                var walkButton2 = document.getElementById('r5Choice6');
                walkButton2.addEventListener("click", runWalkButton2);
                function runWalkButton2() {
                    displayRound5.innerHTML = '<p>You walked right into a jaguar... I mean, you could not see it.<br> But you still walked right into your death.<br> Nice job.<br><br> Game Over.</p>';
                }
            }
        
            //Runs when FIght On Button is chosen from Downstream Button (Jungle>Water>Downstream>Fight On)
            var fightOnButton = document.getElementById('r4Choice6');
            fightOnButton.addEventListener("click", runFightOnButton);
            function runFightOnButton() {
                displayRound4.innerHTML = '<p>You... Are... So... Tired...<br> You just did not have the strength to fend off the alligator.<br> Death by a purse... I mean reptile... Yeah... Reptile. <br> Game Over. </p>';
            }
        }
    }


}



//Island Button Choice
islandButton.addEventListener("click", runIslandButton);
function runIslandButton() {
    displayRound1.innerHTML = '<p>Great choice! You have just become stranded on a deserted island! Try not to die. <br> <br> You want to explore the island and see what you have to work with. <br> Do you climb a tree, <br> or climb the mountain you see in the distance?</p>';
    displayRound1Button.innerHTML = '<input type="button" value="Tree" id="r2Choice3" /> <input type="button" value="Mountain" id="r2Choice4" />';

    //Runs when Tree Button is chosen from Island Button (Island>Tree)
    var treeButton = document.getElementById('r2Choice3');
    treeButton.addEventListener("click", runTreeButton);
    function runTreeButton() {
        displayRound2.innerHTML = '<p>After climbing the tree, you can see the beach and the ocean. <br> You also can see the remains of a shipwreck. <br> Do you want to go to the beach? <br> Or, should you explore the shipwreck?</p>';
        displayRound2Button.innerHTML = '<input type="button" value="Beach" id="r3Choice5" /> <input type="button" value="Shipwreck" id="r3Choice6" />';
    
        //Runs when Beach Button is chosen from Tree Button (Island>Tree>Beach)
        var beachButton = document.getElementById('r3Choice5');
        beachButton.addEventListener("click", runBeachButton);
        function runBeachButton() {
            displayRound3.innerHTML = '<p>You go towards the beach and look at the deep ocean.<br> You want to try fishing, but you do not have any supplies.<br> Should you fish anyway?<br> Or go looking for other supplies?</p>';
            displayRound3Button.innerHTML = '<input type="button" value="Fish" id="r4Choice7" /> <input type="button" value="Supplies" id="r4Choice8" />';
        
            //Runs when Fish Button is chosen from Beach Button (Island>Tree>Beach>Fish)
            var fishButton2 = document.getElementById('r4Choice7');
            fishButton2.addEventListener("click", runFishButton2);
            function runFishButton2() {
                displayRound4.innerHTML = '<p>It was very difficult. You even tried using a branch to spear them.<br> And, after hours of work, you caught one.<br> Do you want to eat it raw? <br> Or cook it?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Raw" id="r5Choice7" /> <input type="button" value="Cook" id="r5Choice8" />';
            
                //Runs when Raw Button is chosen from Fish Button (Island>Tree>Beach>Fish>Raw)
                var rawButton = document.getElementById('r5Choice7');
                rawButton.addEventListener("click", runRawButton);
                function runRawButton() {
                    displayRound5.innerHTML = '<p>You ate the fish raw.<br> You were killed by a predator wanting that exact fish.<br><br> The End</p>';
                }
            
                //Runs when Cook Button is chosen from Fish Button (Island>Tree>Beach>Fish>Cook)
                var cookButton = document.getElementById('r5Choice8');
                cookButton.addEventListener("click", runCookButton);
                function runCookButton() {
                    displayRound5.innerHTML = '<p>The fire you started to cook the fish did not go well.<br> Get roasted.<br><br> Game Over</p>';
                }
            }
        
            //Runs when Supplies Buttin is chosen from Beach Button (Island>Tree>Beach>Supplies)
            var suppliesButton = document.getElementById('r4Choice8');
            suppliesButton.addEventListener("click", runSuppliesButton);
            function runSuppliesButton() {
                displayRound4.innerHTML = '<p>You were able to gather enough wood and branches to start a <br> fire and create a little shelter. <br> Now you need food.<br> Berries or fish?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Berries" id="r5Choice9" /> <input type="button" value="Fish" id="r5Choice10" />';
            
                //Runs when Berries Button is chosen from Supplies Button (Island>Tree>Beach>Supplies>Berries)
                var berriesButton = document.getElementById('r5Choice9');
                berriesButton.addEventListener("click", runBerriesButton);
                function runBerriesButton() {
                    displayRound5.innerHTML = '<p>The berries you ate were poisonous.<br> Unfortuante, right?<br><br> Game Over. </p>';
                }
            
                //Runs when Fish Button is chosen from Supplies Button (Island>Tree>Beach>Supplies>Fish)
                var fishButton3 = document.getElementById('r5Choice10');
                fishButton3.addEventListener("click", runFishButton3);
                function runFishButton3() {
                    displayRound5.innerHTML = '<p>The fish you were trying to catch was actually a shark.<br>Jaws 5.<br><br> Game Over.</p>';
                }
            }
        }
        
        //Runs when Shipwreck Button is chosen from Tree Button (Island>Tree>Shipwreck)
        var shipwreckButton = document.getElementById('r3Choice6');
        shipwreckButton.addEventListener("click", runShipwreckButton);
        function runShipwreckButton() {
            displayRound3.innerHTML = '<p>You walk up to the shipwreck and find <br> an opening where you could enter.<br> Do you want to go in?<br> Or, do you want to leave the wreck?</p>';
            displayRound3Button.innerHTML = '<input type="button" value="Explore" id="r4Choice9" /> <input type="button" value="Leave" id="r4Choice10" />';
        
            //Runs when Explore Button is chosen from Shipwreck Button (Island>Tree>Shipwreck>Explore)
            var exploreButton = document.getElementById('r4Choice9');
            exploreButton.addEventListener("click", runExploreButton);
            function runExploreButton() {
                displayRound4.innerHTML = '<p>You go through the hole in the ship and find the armory.<br> Do you check it out or ignore it?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Check It!" id="r5Choice11" /> <input type="button" value="Ignore" id="r5Choice12" />';
            
                //Runs when Check It Button is chosen from Explore Button (Island>Tree>Shipwreck>Explore>Check It)
                var checkItButton = document.getElementById('r5Choice11');
                checkItButton.addEventListener("click", runCheckItButton);
                function runCheckItButton() {
                    displayRound5.innerHTML = '<p>You were not the only one there.<br> I pirate killed you.<br> Nice job.<br><br> Game Over.</p>';
                }
            
                //Runs when Leave Button is chosen from Explore Button (Island>Tree>Shipwreck>Explore>Leave)
                var leaveButton = document.getElementById('r5Choice12');
                leaveButton.addEventListener("click", runLeaveButton);
                function runLeaveButton() {
                    displayRound5.innerHTML = '<p>You left but ended up dead.<br> A mystery animal got you. <br><br> Game Over.</p>';
                }
            }
        
            //Runs when Leave Button is chosen from Shipwreck Button (Island>Tree>Shipwreck>Leave)
            var leaveButton2 = document.getElementById('r4Choice10');
            leaveButton2.addEventListener("click", runLeaveButton2);
            function runLeaveButton2() {
                displayRound4.innerHTML = '<p>You leave the wreck and go to the beach.<br> You are hungry and want food, but also need a shelter.<br> Do look for fruit or get branches and supplies?</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Fruit" id="r5Choice13" /> <input type="button" value="Branches" id="r5Choice14" />';
            
                //Runs when Fruit Button is chosen from Leave Button (Island>Tree>Shipwreck>Leave>Fruit)
                var fruitButton2 = document.getElementById('r5Choice13');
                fruitButton2.addEventListener("click", runFruitButton2);
                function runFruitButton2() {
                    displayRound5.innerHTML = '<p>The fruit you ate was posionous.<br><br> Game Over.</p>';
                }
            
                //Runs when Branches Button is chosen from Leave Button (Island>Tree>Shipwreck>Leave>Branches)
                var branchesButton = document.getElementById('r5Choice14');
                branchesButton.addEventListener("click", runBranchesButton);
                function runBranchesButton() {
                    displayRound5.innerHTML = '<p>You got the branches and you survived on the island.<br> You were never rescued but you lived a long life on the island.<br> You even befriended a mystery creature.<br><br> Game Over.</p>';
                }
            }
        }
    }

    //Runs when Mountain Button is chosen from Island Button (Island>Mountain)
    var mountainButton = document.getElementById('r2Choice4');
    mountainButton.addEventListener("click", runMountainButton);
    function runMountainButton() {
        displayRound2.innerHTML = '<p>After a bit of a hike to the mountain and a little uphill walking,<br> you notice that the mountain is a volcano. <br> Do you want to keep hiking? <br> Or do you want to turn back around?</p>';
        displayRound2Button.innerHTML = '<input type="button" value="Hike" id="r3Choice7" /> <input type="button" value="Turn Back" id="r3Choice8" />';
    
        //Runs when Hike Button is chosen from Mountain Button (Island>Mountain>Hike)
        var hikeButton = document.getElementById('r3Choice7');
        hikeButton.addEventListener("click", runHikeButton);
        function runHikeButton() {
            displayRound3.innerHTML = '<p> You kept hiking up the slippery slope of the volcano.<br> You did fine, until you tripped on a rock.<br> Clumsy you. You rolled a little ways down,<br> then into a hole that led down, deep into the Earth.<br> At least you died rolling in the deep.<br> Adele would be proud.<br><br> Game Over.</p>';
        }
        
        //Runs when Go Back Button is chosen from Mountain Button (Island>Mountain>Go Back)
        var goBackButton = document.getElementById('r3Choice8');
        goBackButton.addEventListener("click", runGoBackButton);
        function runGoBackButton() {
            displayRound3.innerHTML = '<p>You go back down to the beach and look at the water.<br> You get hungry, and see fish in the water.<br>You can look for supplies,<br> or you can try fishing.</p>';
            displayRound3Button.innerHTML = '<input type="button" value="Supplies" id="r4Choice11" /> <input type="button" value="Fishing" id="r4Choice12" />';
        
            //Runs when Supplies Button is chosen from Go Back Button (Island>Mountain>Go Back>Supplies)
            var suppliesButton2 = document.getElementById('r4Choice11');
            suppliesButton2.addEventListener("click", runSuppliesButton2);
            function runSuppliesButton2() {
                displayRound4.innerHTML = '<p>You found branches and built a fire and a shelter.<br> Now you need to get food.<br> You can try to hunt or you can look for plants to eat.</p>';
                displayRound4Button.innerHTML = '<input type="button" value="Hunt" id="r5Choice15" /> <input type="button" value="Plants" id="r5Choice16" />';
            
                //Runs when Hunt Button is chosen from Supplies Button (Island>Mountain>Go Back>Supplies>Hunt)
                var huntButton = document.getElementById('r5Choice15');
                huntButton.addEventListener("click", runHuntButton);
                function runHuntButton() {
                    displayRound5.innerHTML = '<p>ARE YOU KIDDING!? YOU SUCK AT HUNTING!<br> Instead of hunting, you were hunted.<br><br> Game Over.</p>';
                }
            
                //Runs when Plants Button is chosen from Supplies Button (Island>Mountain>Go Back>Supplies>Plants)
                var plantsButton = document.getElementById('r5Choice16');
                plantsButton.addEventListener("click", runPlantsButton);
                function runPlantsButton() {
                    displayRound5.innerHTML = '<p>You cannot even tell the difference between plants.<br> You ate a poisonous berry.<br><br> Game Over.</p>';
                }
            }
        
            //Runs when Fishing BUtton is chosen from Go Back Button (Island>Mountain>Go Back>Fishing)
            var fishingButton = document.getElementById('r4Choice12');
            fishingButton.addEventListener("click", runFishingButton);
            function runFishingButton() {
                displayRound4.innerHTML = '<p>After hours of trying...<br> You finally caught one! <br> Do you want to... wait... what is that?<br> Death... by a mystery creature?<br><br> Game Over.</p>';
            }
        }
    }
}