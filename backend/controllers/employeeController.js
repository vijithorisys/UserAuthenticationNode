const { user } = require("../sequelize")



const getAll = async (req, res)=>{
    try{
        const userData = await user.findAll()
        return res.status(200).json({userData})
    }catch(error){
        return res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports = {getAll}