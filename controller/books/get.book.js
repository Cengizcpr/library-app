import db from '../../models/index.js'; 
const Books = db.Books;

const getBook = async (req, res) => {
    const { bookId } = req.params;

    try {
        const books = await Books.findByPk(bookId);
        if (!books) {
            return res.status(404).json({ message: "Book not found!" });
        }
        return res.status(200).json(books);
   
    } catch (error) {
        return res.status(500).json({
            message: "Error book list!",
            error: error.message
        });
    }
}

export { getBook };
