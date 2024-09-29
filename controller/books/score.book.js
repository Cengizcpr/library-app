import db from '../../models/index.js'; 
const UserBooks = db.UserBooks;
const Users = db.Users;
const Books = db.Books;

const points = async (req, res) => {
    const { score,userId, bookId } = req.body;

    try {
        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const book = await Books.findByPk(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found!" });
        }

        await UserBooks.create({
            user_id: userId,
            book_id: bookId,
            rating : score
        });

        const ratings = await UserBooks.findAll({
            where: { book_id: bookId}, 
            attributes: [[db.Sequelize.fn('AVG', db.Sequelize.col('rating')), 'averageRating']]
        });

        const averageRating = ratings[0].get('averageRating') || 0;

        book.average_rating = averageRating;
        await book.save();

        return res.status(200).json({
            message: "Book average rating updated.",
            averageRating: averageRating
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error rating the book!",
            error: error.message
        });
    }
}

export { points };