import db from '../../models/index.js'; 
const Users = db.Users;

const userDetails = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await Users.findOne({where : {id : userId}});
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone_number: user.phone_number
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error user details!",
            error: error.message
        });
    }
}

export { userDetails };
