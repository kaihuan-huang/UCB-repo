const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        //Get all projects and JOIN with user data
        const projectData = await Project.findAll({
            inlude: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        //Serialize data so the template can read it 
        const projects = projectData.map((project) => project.get( {plain:true}));
        //pass serialized data and session flag into template 
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in
        });
    }catch(err) {
        res.status.json(err);
    }
});

router.get('/project/:id', async (req, res) => {
    try{
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                    module: User,
                    attributes: ['name'],
                }
            ]
        });
        const project = projectData.get( { plain: true});

        res.render('project', {
            ...Project,
            logged_in: req.session.logged_in
        });
    }catch (err) {
        res.status.json(err);
    }
});

//Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res ) => {
    try{
        //find the logged in user based on the session Id
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ module: Project}]
        });
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        })
    }catch (err) {
        res.status.json(err);
    }
});

router.get('/login', (req,res) => {
    //if the user is already loggedin, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login')
});

module.exports = router;