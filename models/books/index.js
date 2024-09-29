export default (sequelize, DataTypes) => {
    const books = sequelize.define('books', {
        barcode: {
            type: DataTypes.STRING(100),
        },
        name: {
            type: DataTypes.STRING(100),
        },
        author: {
            type: DataTypes.STRING(50),
        },
        book_type: {
            type: DataTypes.STRING(50),
        },
        year: {
            type: DataTypes.STRING(5),
        },
        average_rating: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        }
    });
    return books;
};
