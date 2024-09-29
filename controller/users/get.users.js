import db from '../../models/index.js'; 
const Users = db.Users;

const usersDetails = async (req, res) => {
    try {
        const users = await Users.findAll({
            order: [['id', 'ASC']]
        });

        const userDetails = users.map(async (user) => {

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                phone_number: user.phone_number
            };
        });

        const allUsers = await Promise.all(userDetails);

        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({
            message: "Error users details!",
            error: error.message
        });
    }
}

export { usersDetails };
