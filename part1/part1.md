## Part 1a

Question 1) num1 + num2 is printed by line 9

Question 2) num1 + num2 is printed by line 13 if the else statement isn't executed.

Question 3) num1 + num2 is printed by line 9

Question 4) An error is printed because we're using the let notation for the variable result which will cause it to be block scoped so if it is called outside of the if statement that starts on line 3 then the program will not know what is the variable result. 

Question 5) An error would occur because in line 7 we're trying to reassign the value of result but result is a const.

Question 6) An error would occur because in line 7 we're trying to reassign the value of result but result is a const.

## Part 1b

Question 1) The value of prices.length is printed out. 

Question 2) The value: 
"prices[prices.length - 1] * (1 - discount)" is printed out which is 150

Question 3) The value  "Math.round(discountedPrice * 100) / 100" where discountedPrice has the value "prices[prices.length - 1] * (1 - discount)". The value 150 will be printed.

Question 4) It will return the variable discounted which will be an array with values of finalPrice from each iteration in the for loop. [50,100,150] will be returned.

Question 5) An error will occur because the variable i is a let variable which means after the for loop block the program will not be able to find a variable called i

Question 6) An error will occur because the variable discountedPrice is a let variable which means after the for loop block the program will not be able to find a variable called discountedPrice

Question 7) The value of finalPrice will be printed which is "Math.round(prices[prices.length - 1] * (1 - discount) * 100) / 100" which will be 150. 

Question 8) The function will return the array for discounted which has the stored values of finalPrice from each iteration of the for loop. The function will return [50,100,150].

Question 9) An error will be caused because at line 11 (which is after the for loop) the program will not have visibility to the declared i variable in line 6.

Question 10) The value prices.length will be printed which is 3.

Question 11) It will return an error because discounted is a const and in line 8 we're trying to change const by pushing values into it.

Question 12)
A) student.name
B) student["Grad Year"]
C) student.greeting
D) student["Favorite Teacher"].name
E) student.courseLoad[0]

Question 13)
A) The output '32' will be outputted because 2 will be converted into it's string counter part '2' and so '3' + '2' will give us '32'

B) The output 1 will be outputted because '3' will be converted to an int and so 3 - 2 = 1

C) 3 will be outputted because null will be treated as a 0 in this case

D) The output '3null' will be outputted because in this case null will be converted to its string counterpart 'null' and so '3' + 'null' is '3null'

E) 4 will be outputted because in this case true is converted to the int value 1 so 1 + 3 = 4

F) 0 because false will be converted to be int value 0 and null will be converted to be int value 0 so 0 + 0 = 0

G) '3undefined' because in this case undefined is converted to its string counterpart 'undefined' so '3' + 'undefined' is '3undefined'

H) NaN because in this case we can't convert undefined to its string counterpart and '3' can't be converted to the same type as undefined therefore resulting in NaN

Question 14)
A) True because in this case '2' is converted to int value 2 and 2 > 1 is true.

B) False because with string comparison we compare the first character and if they're equal then we compare the next character and so on. In this case '2' > '1' so '2' < '12' will give us false.

C) True because in this case '2' is converted to int value 2 and 2 == 2 will return true.

D) False because 2 and '2' are not the same value type so this will return false.

E) False because true and 2 are not the same value type

F) True because true and Boolean(2) are the same value type and they both have a value of true.

Question 15) The difference between == and === operators is that === is a strict comparison meaning if the left side and right side value don't have the same data type then this will automatically return false and == will still compare two values even if they are not the same data type but it will convert one of the values to be the same data type as the other value and then perform the comparison.

Question 16) Solution in file part1b-question16.js

Question 17) The result will be [2,4,6] because for modifyArray we pass in the list [1,2,3] and the function doSomething on line 13 then if we take a look at what modifyArray does is it creates a new array called newArr and for each element in array it will call the function doSomething which will return the 2 * num in which num is the number you pass into it.

Question 18) Solution in file part1b-question18.js
Question 19) 
"1
4
3
2"
will be the output of the code
