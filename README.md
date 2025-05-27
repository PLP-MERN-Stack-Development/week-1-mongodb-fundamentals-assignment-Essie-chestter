MongoDB Bookstore Project
This project demonstrates basic and advanced MongoDB operations using Node.js scripts to populate a sample plp_bookstore database with book data.
Project Structure
 * insert_books.js: A Node.js script responsible for connecting to MongoDB, creating the plp_bookstore database and books collection (if they don't exist), and inserting sample book data.
Prerequisites
Before you run the scripts, make sure you have the following installed:
 * Node.js: You can download it from nodejs.org.
 * MongoDB:
   * Local Installation: Install MongoDB Community Server on your machine. Follow the instructions on the MongoDB Documentation. Ensure your MongoDB daemon (mongod) is running. By default, it runs on mongodb://localhost:27017.
   * MongoDB Atlas (Cloud): Alternatively, you can set up a free tier cluster on MongoDB Atlas. If you use Atlas, you'll need to update the uri variable in insert_books.js with your connection string.
Getting Started
Follow these steps to set up and run the project:
1. Clone the Repository (or create the files)
If you received these files as part of a project, place insert_books.js in your desired project directory.
2. Install Dependencies
Navigate to your project directory in your terminal and install the MongoDB Node.js driver:
npm install mongodb

3. Run the Insertion Script
Execute the insert_books.js script to populate your MongoDB instance with sample book data. This script will automatically create the plp_bookstore database and the books collection if they don't already exist.
node insert_books.js

You should see output similar to this, indicating a successful connection and data insertion:
Connected to MongoDB server
Collection already contains X documents. Dropping collection... (This will appear if you run it multiple times)
Collection dropped successfully
12 books were successfully inserted into the database

Inserted books:
1. "To Kill a Mockingbird" by Harper Lee (1960)
... (list of inserted books)
Connection closed

Verifying the Data (Optional)
You can use the MongoDB Shell or a GUI tool like MongoDB Compass to verify that the data has been inserted correctly.
Using MongoDB Shell
 * Open your terminal and type mongosh to enter the MongoDB Shell.
 * Switch to the plp_bookstore database:
   use plp_bookstore

 * Find all documents in the books collection:
   db.books.find().pretty()

   This will display all the book documents you inserted.
Next Steps
Once the data is in your database, you can start exploring it using MongoDB queries! Refer to the comments within the insert_books.js file or any associated documentation for example queries to perform basic CRUD operations, advanced queries, and aggregation pipelines.
