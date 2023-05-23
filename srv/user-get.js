module.exports = (user) => {

    user.on('signIn',  request => {
        let  userInfo = request.data  

        if (userInfo) {
            console.log('userInfo', userInfo) 
        }
        return userinfo 
    })

}   
