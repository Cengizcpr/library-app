export default (sequelize, DataTypes) => {
    const userBooks = sequelize.define('user_books', {
        rating: { 
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 10,
            }
        }
    });
    return userBooks;
};
