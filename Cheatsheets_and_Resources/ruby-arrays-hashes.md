# Ruby Arrays & Hashes cheatsheet


## Arrays
Create:
- `liza = ['liza','hayes', 'ramo']`

Access:
- `liza[0]` => `liza`
- `liza[1]` => `hayes`
- `liza[2]` => `ramo`

Add:
- `liza[3] = 'the great'`
- `liza.push('the wonderful')`
- `liza << 'the beautiful'` => shovel method
- `unshift`

Remove:
- `shift`
- `pop`
- `delete`
- etc.

---


## Hashes
- Key:value pairs
- A lot like JS `objects`
- In other languages they're also called `dictionaries` or `associative arrays`

```ruby
my_first_hash = {first_name: 'liza', last_name: 'ramo'}

my_first_arr_of_hashes = [
  { first_name: 'liza', last_name: 'ramo' },
  { first_name: 'Ethan', last_name: 'Friedman' }
]
```
- Access the values using the keys:
  - `my_first_hash[:first_name]` => 'liza'
  - `my_first_arr_of_hashes[0][:first_name]` => 'liza'
- Cool methods: .keys & .values
  - `my_first_hash.keys => [:first_name, :last_name]`
  - `my_first_hash.values => ["liza", "ramo"]`
- Delete a key-val pair:
  - `hash.delete(key)`
- Add:
  - `my_first_hash[:middle_name] = 'hayes'`
  - *Careful:* It's easy to add it as a string, but you'll run into some accessing issues later, so it's proper to add it as a symbol.


An example of improper adding to hash:


```rb
#-- added properly: --#
my_first_hash[:middle_name] = "hayes"

# inspect it:
my_first_hash
=> {:first_name=>"liza",
 :last_name=>"ramo",
 :middle_name=>"hayes"}

my_first_hash[:middle_name]
=> "hayes"


#-- improper add using string: --#
my_first_hash["middle_name"] = "hayes"

# inspect it:
my_first_hash
=> {:first_name=>"liza",
 :last_name=>"ramo",
 "middle_name"=>"hayes"}

# now you can only access it using a string
my_first_hash['middle_name']
=> "hayes"

# you can't access it with a symbol like you can the other keys
my_first_hash[:middle_name]
=> nil
```



### Hash gotchas:
- In hashes, keys turn into symbols upon creation, so when you bracket in, use the symbol like above    
- Can only `bracket` in, can't `dot` in
- Does not work: `my_first_hash.liza` --> Why? Because 'liza' is not a property of 'my_first_hash' the way it is in JS.
