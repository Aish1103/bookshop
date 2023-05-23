module.exports = (tell)=>{
    tell.on('hi', req => `I miss you more than I can bear. I love you  ${req.data.name}, earnestly, eternally......`
    )
}