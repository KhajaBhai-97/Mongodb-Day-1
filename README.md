In this repository describes step by step instructions about how to create database, collections and then import the data to the collections.

Here **Queries.js** consist of basic queries like to fetch the records based on the conditions and delete operations performed

Download the mongodb community (Compass) and shell to access and manage the database.

**using mangodb shell**

Open Command prompt and then connect mongodb with the command of ***mongosh***

Using **show dbs** command which is used to list out all the database.

Now we are creating one database with the name of ***mongodb-tasks*** by using below commands.

        use mongodb-tasks

After creating the database, It will be connected with the newly created database. then create a collection to store the documents of the data. Here we using ***products*** collections.

        db.createCollection("collection_name");

        Ex:
            db.createCollection("products");

**Using Mongodb Compass**

Here we have used mongodb compass to import the data from the URL of ***https://github.com/rvsp/database/blob/master/mongodb/product.json***

Queries were executed in mongodb shell and those queries has stored in ***Queries.js*** file.
