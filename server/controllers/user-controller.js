module.exports = {
    getCurrentUser:(req, res) => {
        console.log('querying current user')
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