// What is Currying?
    // a functional programming technique
    // translates the evluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument

    // Why care about Currying?
        // Implementing currying relies on interesting features of JS (closures)
        // Therefore, currying is a common interview question
        // It is also used in other languages, so it's good to know!

// Iheritance Intro
    // One object gets access to the properties and functions defined on another object
        // Same idea as Ruby (think pieces from chess)

    // Constructor Functions
        // Special type of function meant to create an object
        // Made to be used with the new keywor
        // Accepts arguments to set the new object's properties
        // Paired with a prototype object

    // The new Keyword
        // 1. Make a new object
        // 2. Assign the __proto__ and constructor of the new object to Constructor. prototype and Constructor, respectively
        // 3. Make this point to the newly created object
        // 4. Call the constructor function in the context of that new object
        // 5. Automatically returns the newly created object

    // Prototypes
        // Every object is associated with a prototype object
            // Access through __proto__, but Object.getPrototypeOf(obj) preferred
        // If an object doesn't have a property it looks at its prototype through __proto__
            // keeps looking up its prototype chain
        // The prototype is a property on a constructor function that sets what will become the __proto__ property on the constructed object.

    // Prototpal Inheritance Example
        // Want to make a rectangle and a circle that both inheir t from the shape
        // Both rectangle and circle need shape's prototype
        //...

        // Naive Solution 1
            // reassign the __proto__ property of the Child.prototype to point directly to the Parent.prototype
            // This is bad
            // Removes some of JavaScript's built in optimization

        // Naive Solution 2
            // reassign Child.prototype to point directly to the Parent.prototype
            // Also bad
            // Any method defined on Child.prototype will now also be on Parent.prototype

        // Niave Solution 3
            // reassign Child.prototype to point directly to a new instance of Parent
            // Child.prototype = new Paren ()
            // Again, this is bad
            // Requires the creation of a new Parent every time you are setting up inheritance
            // This can be expensive!

        // Correct Way 1
            // Surogates
            // function Surrogate () {}
            // Surrogate.prototype = Parent.prototype;
            // Child.prototype = new Surrogate();
            // Child.prototype.constructor = Child;

