// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value) {
    if (value === null) {
        return "null";
    } else if (Array.isArray(value)) {
        return "array";
    } else {
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
 // If the input is not an array, return []
  // If number is not provided or not a number, return just the first element
    // If number is negative, return []
// If number is 0 or greater, return the first <number> elements
_.first = function(array, number) { 
    if (!Array.isArray(array)) {
        return [];
    } 
    if (number === undefined || typeof number !== "number") {
        return array[0];
    }
    if (number < 0) {
        return [];
    }   
    return array.slice(0, number);
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// If the input is not an array
// If number is not provided or not a number, return just the last , return []eleme
// If number is negative, return []
// If number is greater than array length, return full array  
// Otherwise return last <number> elements
_.last = function(array, number) {   
    if (!Array.isArray(array)) {
        return [];
    }
    if (number === undefined || typeof number !== "number") {
        return array[array.length - 1];
    }
    if (number < 0) {
        return [];
    }
    if (number > array.length) {
        return array.slice();
    }
 return array.slice(array.length - number);
    
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//

// Return the index if a match is found
// If no match is found, return -1

_.indexOf = function(array, value) {
    // Loop through the array and check for the first occurrence of the value
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i; 
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    return array.indexOf(value) !== -1? true: false;
    };



/** _.each
* Arguments:e4 /1jkl1
*   1) A collection
*   2) A function
* Objectives:54
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
// If collection is an array, loop through with index

_.each = function(collection, func) {
    if (Array.isArray(collection)) {  
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {`d   `
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                func(collection[key], key, collection);
            }
        }
    }
};

/** _.unique584*,fdxdxr122+203
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        // Only add the value if it's not already in result
        if (_.indexOf(result, array[i]) === -1) {
            result.push(array[i]);
        }
    }

    return result;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
    let result = [];

    _.each(array, function(element, index, collection) {
        if (func(element, index, collection)) {
            result.push(element);
        }
    });

    return result;
};
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/_.reject = function(array, func) {
    return _.filter(array, function(element, index, collection) {
        return !func(element, index, collection);
    });
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
 
}
*/_.partition = function(array, func) {
    let truthy = [];
    let falsy = [];

    _.each(array, function(element, index, collection) {
        if (func(element, index, collection)) {
            truthy.push(element);
        } else {
            falsy.push(element);
        }
    });

    return [truthy, falsy];
};



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
    let result = [];

    _.each(collection, function(value, key, coll) {
        result.push(func(value, key, coll));
    });

    return result;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property) {
    return _.map(array, function(obj) {
        return obj[property];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func) {
    // If no function is provided, check if all values are truthy
    if (typeof func !== 'function') {
      for (let key in collection) {
        if (!collection[key]) return false;
      }
      return true;
    }
  
    // If collection is an array
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (!func(collection[i], i, collection)) return false;
      }
    } 
    // If collection is an object
    else {
      for (let key in collection) {
        if (!func(collection[key], key, collection)) return false;
      }
    }
  
    return true;
  };

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func) {
    if (typeof func !== 'function') {
      // No function provided: return true if any element is truthy
      for (let key in collection) {
        if (collection[key]) return true;
      }
      return false;
    }
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (func(collection[i], i, collection)) return true;
      }
    } else {
      for (let key in collection) {
        if (func(collection[key], key, collection)) return true;
      }
    }
    return false;
  };

 
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
      let source = sources[i];
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}