// module.exports.home = function(req,res) {
//     return res.end('<h1>Express is up for face_book</h1>')
// }
module.exports.home = function(req,res) {
    return res.render('home', {title: 'Home'});
    
}