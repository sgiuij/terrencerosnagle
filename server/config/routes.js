var event = require('../controllers/eventController.js')
var admin = require('../controllers/adminController.js')
var user = require('../controllers/userController.js')
 
module.exports = function (app) {
  app.get('/events',event.allEvents)
  app.get('/session',event.session)
  app.get('/event',event.thisEvent)
  app.post('/event', event.newEvent)
  app.post('/event/delete', event.deleteEvent)
  app.get('/users',user.allUsers)
  app.post('/users/new', user.newUser)
  app.post('/users/delete', user.deleteUser)
  app.post('/users/deactivate',user.deactivateUser)
  app.post('/users/activate',user.activateUser)
  app.get('/admin',admin.allAdmins)
  app.post('/admin/new',admin.newAdmin)
  app.post('/admin/delete',admin.deleteAdmin)
}