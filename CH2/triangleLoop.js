/*Write a loop that makes seven calls to a console.log to output the following triangle:
#
##
###
####
#####
######
#######
It is helpful to know you can find the length of a string with .length
*/

for (let number = "#"; number.length <= 7; number += "#") {
    console.log(number);
}
