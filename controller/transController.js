const {sequelize} =require('../database')
const appConst=require('../router/constants')
const Student =require('../model/transcation')
const { response } = require('express')

const bulkTransOperations = async(req,res) =>{
    const t =await sequelize.transaction()
    try{
        console.log(req.body)
        await Student.bulkCreate(req.body,{
            transaction:t
        })
        await Student.findOne({ id: req.body.id },{
            transaction:t
        })
        await Student.findAll({
            transaction:t
        })
        await Student.update(req.body,{
            where:{
                id:req.body.id
            }
        },{
            transaction:t
        })
        await t.commit()
        res.status(202).json({
            status:appConst.status.success,
            response:null,
            message:"success"

        })
    }
    catch(error){
        await t.rollback()
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed!..."
        })
    }

}
module.exports ={bulkTransOperations}