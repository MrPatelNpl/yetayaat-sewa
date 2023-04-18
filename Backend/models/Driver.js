const validate = require('validator');

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("Driver",{
        driver_id:{
            type:DataTypes.INTEGER,
            allowNull :false,
            validate:{
                notEmpty : true
            }
        },
        username:{
            type:DataTypes.STRING,
            allowNull :false,
            validate:{
                notEmpty : true
            }
        },
        fullname:{
            type:DataTypes.STRING,
            allowNull :false,
            validate:{
                notEmpty : true
            }
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull :false,
            validate:{
                notEmpty : true
            }
        },
        image:{
            type:DataTypes.STRING,
            allowNull :false,
            validate:{
                notEmpty : true
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull :false,
            validate(value){
                if(!validate.isEmail(value)){
                    throw new Error("Email is Invalid")
                }
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull :false,
            validate:{
                notEmpty : true
            }
        },
    })
    return User;
}