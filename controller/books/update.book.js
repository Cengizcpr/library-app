import db from '../../models/index.js'; 
const Books = db.Books;

const update = async (req, res) => {
    try {
        const { name, author, year, book_type, barcode } = req.body;

        const book = await Books.findOne({ where: { barcode: barcode } });

        if (!book) {
            return res.status(404).json({ message: "Book not found!" });
        }

        book.name = name || book.name;
        book.author = author || book.author;
        book.year = year || book.year;
        book.book_type = book_type || book.book_type;

        await book.save();

        return res.status(200).json({
            message: "Book updated successfully.",
            book: book
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error updating book!",
            error: error.message
        });
    }
};

export { update };
