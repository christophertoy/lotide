# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @christophertoy/lotide`

**Require it:**

`const _ = require('@christophertoy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual...)`: compares 2 arrays and prints out a message tellin us if they match
* `assertEqual(...)`: compares the 2 values it takes in and prints out a message telling us if they match
* `assertObjectsEqual(...)`: compares 2 objects and prints out a message tellus us if they match
* `countLetters(...)`: takes a string and outputs an object with counts of each letter
* `countOnly(...)`: takes an array and an object and will return an object with counts of everything the object listed
* `eqArrays(...)`: compares 2 arrays and returns true or false, depending on the match
* `eqObjects(...)`: takes 2 objects and returns true or false, depending on the match
* `findKey(...)`: takes an object and call back, scans the object and returns the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: takes in an object and value, returns first key given the value
* `head(...)`: retrives the first element from the array
* `letterPositions(...)`: takes a string and will return all the indices where each letter is found
* `map(...)`: creates new array with the results of calling a provided function on each element
* `middle(...)`: takes an array and returns the middle elements
* `tail(...)`: returns the all the elements of the array except for the first element
* `takeUntil(...)`: return a slice of the array of elements until the callback returns true
* `without(...)`: compares 2 arrays and filters unwanted items 