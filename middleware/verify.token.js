import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
dotenv.config();
const { JWT_SECRET } = process.env; 

const verifyToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if (!header) {
        return res.status(403).json({ message: "No token provided" });
    }
    
    const token = header.split(' ')[1]; 

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.userId = decoded.id; 
        next();
    });
};

export { verifyToken }; 
