module.exports = {
    getCurrentUser:(req, res) => {
        console.log('querying current user')
        req.user ?
        res.status(200).send(req.user) :
        res.status(205).send('No user on session')
    },
    editUser:(req, res) => {
        let db = req.app.get('db');
    }
}