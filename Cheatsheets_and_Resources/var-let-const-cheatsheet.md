# Javascript `var`, `let`, `const`


*Note:* It's understood that everything created outside of a function or block is considered global and therefore accessible from anywhere.

### Var
`var liza = 'liza';`
- **Scope:** function-level
- **Mutable?** yes

```javascript
function hello() {
  var liza = 'liza';
  console.log(liza); // this works
}

console.log(liza); // this does not work

```


### Let
`let liza = 'liza';`
- **Scope:** block-level
- **Mutable?** yes, you can update the value of a `let`.

```javascript

function hello() {
  for (var i = 0; i < 'ethan'.length; i++) {
    let liza = 'liza';
    console.log(liza); // this works
  } // end loop
  console.log(liza); // this does not work
} // end fxn
console.log(liza); // this does not work

```


### Const
`const LIZA = 'liza';`
- **Scope:** block-level
- **Mutable?** Kind of, but you're not supposed to update these.
  - The *assignment* is not mutable; it cannot be reassigned. Therefore it is considered a *read-only* variable.
  - But *properties of the value* are mutable.

Scope:
```javascript
function hello() {
  for (var i = 0; i < 'ethan'.length; i++) {
    const LIZA = 'liza';
  }
  console.log(LIZA); // this works
}
console.log(LIZA); // this does not work

```

Mutability:
```javascript
var liza = { name: 'liza', size: 'small' }

liza['name'] = 'liza ramo'; // this works

liza = 'liza ramo'; // this does not  
```
