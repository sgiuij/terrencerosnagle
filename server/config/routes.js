var event = require('../controllers/eventController.js')
var admin = require('../controllers/adminController.js')
var user = require('../controllers/userController.js')
var service = require('../controllers/serviceController.js')
var sample = require('../controllers/sampleController.js')

module.exports = function (app) {
  app.get('/events',event.allEvents)
  app.get('/event/:id',event.thisEvent)
  app.post('/event/new', event.newEvent)
  app.post('/event/delete/:id', event.deleteEvent)
  app.get('/users',user.allUsers)
  app.post('/users/new', user.newUser)
  app.post('/users/:id', user.deleteUser)
  app.post('/users/deactivate/:id',user.deactivateUser)
  app.post('/users/activate/:id',user.activateUser)
  app.get('/admin',admin.allAdmins)
  app.post('/admin/new',admin.newAdmin)
  app.post('/admin/delete/:id',admin.deleteAdmin)

  app.get('/service',service.getService)
  app.post('/service/new',service.newService)
  app.post('/service/delete',service.deleteService)

  app.get('/sample',sample.allSample)
  app.post('/sample/new',sample.newSample)
  app.post('/sample/:id',sample.deleteSample)

}