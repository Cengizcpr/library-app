import db from '../../models/index.js'; 
const Books = db.Books;

const getBooks = async (req, res) => {
    try {
        const books = await Books.findAll({
            order: [['id', 'ASC']]
        });

        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({
            message: "Error books list!",
            error: error.message
        });
    }
}

export { getBooks };