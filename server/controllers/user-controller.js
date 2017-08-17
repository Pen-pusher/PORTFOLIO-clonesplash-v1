module.exports = {
    // getCurrentUser:(req, res) => {
    //     let db = req.app.get('db');
    //     if(req.user) {
    //         db.queries.user.getUserByAuthId([req.user.authid])
    //         .then(user => {
    //             res.status(200).send(user[0])
    //         })
    //         .catch(err => res.send(req.user))
    //     }
    //     res.status(205).send('No user')
    // },
    getCurrentUser:(req, res) => {
        req.user ?
        res.status(200).send(req.user) :
        res.status(205).send('No user on session')
    },
    editUser:(req, res) => {
        let db = req.app.get('db');
        let {name, email, username, website, instagram, location, bio} = req.body;
        let {params} = req;
        db.queries.user.updateUser([params.id, name, email, username, website, instagram, location, bio])
        .then(user => res.status(200).send(user))
        .catch(err => {res.status(500).send('error')});
    }
}