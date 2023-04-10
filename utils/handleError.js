const handleHttpError = (res, message='Error en alguna parte', code=403) =>{
    res.status(code);
    res.send({error:message});
}

module.exports = {handleHttpError}