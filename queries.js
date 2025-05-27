//TASK 1
use plp_bookstore

db.books.insertOne({
  title: "Example Book",
  author: "Jane Doe",
  genre: "Fiction",
  published_year: 2023,
  price: 15.00,
  in_stock: true,
  pages: 250,
  publisher: "Example Publisher"
})

//TASK 2:BASIC CRUD OPERATION
db.books.find({ genre: "Fiction" })

db.books.find({ published_year: { $gt: 1950 } })

db.books.find({ author: "George Orwell" })

db.books.updateOne(
  { title: "1984" },
  { $set: { price: 11.99 } }
)

db.books.deleteOne({ title: "Moby Dick" })

//TASK 3:ADVANCED QUERIES 
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// For all books
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Example with a filter (e.g., books by George Orwell)
db.books.find({ author: "George Orwell" }, { title: 1, author: 1, price: 1, _id: 0 })


// Ascending by price
db.books.find().sort({ price: 1 })

// Descending by price
db.books.find().sort({ price: -1 })


// Page 1 (first 5 books)
db.books.find().skip(0).limit(5)

// Page 2 (next 5 books)
db.books.find().skip(5).limit(5)

// Page 3 (next 5 books)
db.books.find().skip(10).limit(5)

//TASK 4:AGGREGATION PIPELINE 
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" }
    }
  }
])


db.books.aggregate([
  {
    $group: {
      _id: "$author",
      book_count: { $sum: 1 }
    }
  },
  {
    $sort: { book_count: -1 }
  },
  {
    $limit: 1
  }
])


db.books.aggregate([
  {
    $project: {
      _id: 0,
      title: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      book_count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 } // Sort by decade ascending
  }
])

//TASK 5:INDEXING
db.books.createIndex({ title: 1 })

db.books.createIndex({ author: 1, published_year: 1 })

//explain method
//example for title index

db.books.dropIndex({ title: 1 })

db.books.createIndex({ title: 1 })

db.books.find({ title: "1984" }).explain("executionStats")

// example for author and published year compound index

db.books.dropIndex({ author: 1, published_year: 1 })

db.books.createIndex({ author: 1, published_year: 1 })

db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats")









