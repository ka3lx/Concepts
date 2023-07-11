# Javascript revision

### Difference between scripting and programming language.

Scripting language runs inside another program, for example inside a browser tab. Programming languages are tools used to create a specific output by feeding programs to a computer.

### What is just-in-time compilation?

Inside a browser, javascript code is compiled while the script is in use. This is called Just-In-Time compilation. However, JS is still treated as an interpreted language.

### Javascript loading strategies

There are two ways to load JS script efficiently: 1. Create an event listener to DOMContentLoaded event and place script inside <head> tag. 2. Use defer attribute of <script> to simultaneously load HTML and JS. This way JS is executed only after HTML and CSS has been downloaded.

### Difference between async and defer.

1. Async and defer both download the script in a separate thread.
2. Async will execute the scripts as soon as they are downloaded, in no specific order. This will block the thread and pause HTML parsing. Defer, on the other hand, will only execute the script once everything else is finished loading.

### var vs let

| Property | Var | Let
| Purpose | | It creates reassignable, block-scoped variables
| Scope | Entire enclosing function | The block in which they are created as well as any sub-blocks
| Redeclaration | Can be redeclared in the same scope | Redeclaration is not allowed in the same scope
| Temporal dead zone behavior | It has a value if initialized, otherwise it's undefined | Access to it results in a ReferenceError
| Hoisting | Var variables are hoisted | Let variables are not hoisted

### Hoisting
