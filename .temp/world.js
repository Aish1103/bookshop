
module.exports = (say)=>{
    say.on ('hello', req => `what's up ${req.data.country}!`
    )
  }