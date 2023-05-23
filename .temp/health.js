module.exports = (health) =>{

    health.on('BMI' , function (req){
       return req.data.weight/req.data.height
       
    })

    health.on('brief' , function (req){
    return  `your weight and height is ${req.data.weight} & ${req.data.height}`
    }
    )
}