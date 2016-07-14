# Mongo Cheatsheet

### Install Mongo
- Make sure Homebrew & all packages are up to date first:
  - `brew update`
  - `brew upgrade`
  - `brew list --versions` to see what you have
  - If`mongodb` is listed, run `brew uninstall mongodb`
- Get Mongo DB:
  - `brew install mongodb`
- This installs Mongo DB at `/usr/local/Cellar/mongodb/3.2.4`
- And auto generates a config file here `/usr/local/etc/mongod.conf`
- Create this directory: `sudo mkdir -p /data/db`
- Then make sure you have the correct permissions:
  - `whoami`
  - `sudo chown LizaRamo /data/db`

### Run Mongo
- Start the mongod server: `mongod`
- If that throws an error, try typing the `mongod` command + the path to the mongod config file:
  - `mongod --config /usr/local/etc/mongod.conf`
- In a new Terminal tab, type `mongo` from anywhere to start the mongo shell.

----

# Mongo Basics

### Mongo Structure:
- Mongo
  - Databases
    - Collections
      - Documents (indexed)
        - Fields
- Cursors: when you ask MongoDB for data, it returns a pointer called a cursor to the result set, which we can do things to, such as counting or skipping ahead, before actually pulling down data.

### Differences between RDBs
- RDBs define `columns` at the `table` level
- Mongo defines `fields` at the `document` level
- Each `document` within a `collection` can have its own unique set of fields

---

### Helpful commands

Mongo level:
- `show dbs` Show all

DB level:
- `db` Which current db
- `db.stats()` Stats of current
- `use <name of db>` Switch to or create a db
- `show collections` Get names in strings
- `db.getCollectionNames()` Get array of collection names
- `db.getCollectionNames().length` or `db.stats().collections` Get num of collections in current db

Collection level:
- Creates collection if not already there: `db.unicorns.insert({name:'Aurora', gender:'f', weight:450})`
- `db.unicorns.count()`
- `db.unicorns.find()`
- Empty a collection (but keep the collection itself) `db.unicorns.remove({})`

Finding & removing stuff: (read & delete)
- Basic structure: `db.collectionName.find({ field.value })`
- && statement: `{field1: value1, field2: value2}`
- Exists statement: `db.unicorns.find({vampires: {$exists: false}})`
- In statement: `db.unicorns.find({loves: {$in:['apple','orange']}})`
- Or statement: find all female unicorns who either love apples or weigh less than 500 pounds: `db.unicorns.find({gender: 'f', $or: [{loves: 'apple'}, {weight: {$lt: 500}}]})`
- Special: `$lt, $lte, $gt, $gte and $ne` are used for less than, less than or equal, greater than, greater than or equal and not equal op
- Example: male unicorns that weigh more than 700 pounds: `db.unicorns.find({gender: 'm', weight: {$gt: 700}})`
- Finding by ID: `db.unicorns.find({_id: ObjectId("56f830ac39aaa174d7843dda")})`

Updating: Using `.update()` with `$set, $inc, $push`
- Change Roodles' weight: `db.unicorns.update({name: 'Roooooodles'}, {$set: {weight: 590}})`
- Decrement num of vampires: `db.unicorns.update({name: 'Pilot'},{$inc: {vampires: -2}})`
- `db.unicorns.update({name: 'Aurora'},{$push: {loves: 'sugar'}})`

Upsert using `{upsert:true}`: Insert or update  
`db.hits.update({page: 'unicorns'}, {$inc: {hits: 1}}, {upsert:true});`
db.hits.find();

Updating multiple at once:
- Set a property on all unicorns' `vaccinated` to `true` : `db.unicorns.update({}, {$set: {vaccinated: true }}, {multi:true});`
