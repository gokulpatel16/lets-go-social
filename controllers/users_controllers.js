// module.exports.profile = function(req,res){
//     res.end('<h1>Users Profile</h1>');
// };

const User = require('../models/user');

module.exports.likes = function(req,res){
    res.end('<h1>10 Likes</h1>');
}

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title : "Home"
    });
}

// Render the Sign Up page
module.exports.signUp = function(req,res){
    return res.render('users_sign_up',{
        title : "Codiel | Sign-Up"
    });
};

// Render the Sign In Page
module.exports.signIn = function(req,res){
    return res.render('users_sign_in',{
        title : "Codiel | Sign-In"
    });
};

// Get the Sign Up Data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email : req.body.email},
    )
    .then(function(user){
        if(!user){
            User.create(req.body,
            )
            .catch(function(err){
                console.log("Error while finding the user during Sign Up");
                return;
            })

            return res.redirect('/users/sign-in');
        }
        else{
            res.redirect('back');
        }
    })
    .catch(function(err){
        console.log("Error while finding the user during Sign Up");
        return;
    }) 


        
};

// Get the Sign In Data
module.exports.createSession = function(req,res){
    // ToDo Later
};


