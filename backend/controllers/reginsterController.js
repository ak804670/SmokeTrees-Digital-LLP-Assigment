const { User, Address } = require('../models');



const register = async (req, res) => {
    try {
        const {username,password,addresses } = req.body;

        const user = await User.create({
            username,
            password,
            Addresses: addresses,
        }, {
            include: [ 
                { 
                    model: Address, 
                    as: 'Addresses'  
                } 
            ]
        });

            return res.status(200).json({
                message:"Registered successfully",
                status:200,
                data:user
            });
        }

    catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
};

module.exports= {register}