/* 
With https://en.wikipedia.org/wiki/Nontransitive_dice#Efron.27s_dice
what is the probability that C beats D? How about D beats A? Can you
make a universal function that takes two dice (represented as arrays)
as parameters, and does n experiments to estimate the probability that
the first beats the second? Example:
dice_battle([6,6,6,6,0,0],[5,4,3,2,1],1000) == 0.762823 (or whatever)
