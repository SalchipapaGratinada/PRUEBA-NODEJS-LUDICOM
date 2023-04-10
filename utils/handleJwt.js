const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET


const tokenSing = async (usuario) => {
    const sing = jwt.sign(
        {
            _id:usuario.idUsuario,
            role:usuario.nombre
        },
        JWT_SECRET,
        {
            expiresIn:"1h"
        }
    );
    return sing
}


const verifyToken = async (tokenJwt) =>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (err) {
        console.log(err);
        return null;
    }
}


module.exports = {tokenSing, verifyToken}