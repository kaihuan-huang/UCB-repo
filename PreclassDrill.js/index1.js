/*Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.

Ex:
Input: Tammer Galal
Output: tammergalal

Input:    favorite tree    ever
Output: favoritetreeever

Input: one word
Output: oneword
*/
const noSpace = str => str.toLowerCase().replaceAll(" ", "");

console.log('    favorite tree ever   ', noSpace("    favorite tree    ever"));

//way2

