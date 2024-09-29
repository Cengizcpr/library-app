export default (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        name: {
            type: DataTypes.STRING(100),
        },
        email: {
            type: DataTypes.STRING(50),
        },
        phone_number: {
            type: DataTypes.STRING(50),
        },
        password: {
            type: DataTypes.STRING(150),
        }
    });
    return users;
};
