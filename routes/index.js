const express = require ('express');
const router = express.Router ( );
router.get ('/', function(reg, res) {
res.send( 'It works!');
});
module.exports = router;