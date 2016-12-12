## HOW TO RUN:

# Method 1 (Windows) :

First run the "Start Mongo.bat" 

Then run the "Start Servers.bat"

# Method 2 (Universal) :

Open 3 command prompt windows

from the first command prompt type
mongod

from the second command prompt in folder makingApi type
npm start

from the third command prompt in folder makingClient type
npm start


Website is on
localhost:9000

Api is on 
localhost:3000

## Other Notes
This is just a base look at how a UserDatabase could function. This doesn't include User sessions, just storing the username and password into the database. 
Inside makingApi/routes/index.js I have added hashcode function for strings. This is based on Java's hashcode function, if you were to find a way to hash strings that you prefer you can replace the code inside that function. 
Hashing the password is necessary, because it makes it so that if someone were to access your database, they couldn't figure out what the passwords were of the users.
