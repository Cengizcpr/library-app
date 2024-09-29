import db from '../../models/index.js'; 
const Books = db.Books;
const remove = async (req, res) => {
    try {
        const { bookId } = req.params;

        const book = await Books.findByPk(bookId);

        if (!book) {
            return res.status(404).json({ message: "Book not found!" });
        }

        await book.destroy();

        return res.status(200).json({
            message: "Book deleted successfully."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting book!",
            error: error.message
        });
    }
};
export { remove };
