module.exports = {

  register: async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')
    let takenUserName = await db.check_username({username})
    console.log(takenUserName[0])
    takenUserName = +takenUserName[0].count

    if(takenUserName !== 0 ){
      return res.sendStatus(409)
    }

    let user = await db.register({username, password})
    user = user[0]
    console.log(user)
    res.status(200).send(user)
  },

  login: async (req, res) => {
    const {username, password} = req.body
    // console.log(111111, req.body)
    const db = req.app.get('db')
    let user = await db.login({username, password})
    console.log(1111111, user)
    user = user[0]
    console.log(22222222, user)
    delete user.password
    res.status(200).send(user)
    console.log(3333333, user)
  },
  getUser: async (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    const {id} = req.params

    let profile = await db.get_User({id})
    profile = profile[0]
    console.log(333333, profile)
      res.status(200).send(resp[0])
    
  }
}