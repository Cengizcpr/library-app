import db from '../../models/index.js'; 
const Books = db.Books;

const add = async (req, res) => {
    try {
        const { name, author,year,book_type,barcode } = req.body;
        const existingBook = await Books.findOne({ where: { barcode: barcode } });

        if (existingBook) {
            return res.status(400).json({ message: "Book with the same barcode already exists!" });
        }

        const createdBook = await Books.create({
            name,
            author,
            year,
            book_type,
            barcode

        });

        return res.status(200).json({
            message: "Book successfully.",
            book: createdBook
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Error creating book!",
            error: error.message
        });
    }
}

export { add };