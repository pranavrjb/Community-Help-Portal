const {createHelpRequest,getAllHelpRequests,getHelpRequestById,updateHelpRequest,deleteHelpRequest} = require('../Controllers/helpController.js');
const router = require('express').Router();

router.post('/help-request', createHelpRequest);
router.get('/help-requests', getAllHelpRequests);
router.get('/help-request/:id', getHelpRequestById);
router.put('/help-request/:id', updateHelpRequest);
router.delete('/help-request/:id', deleteHelpRequest);

module.exports = router;