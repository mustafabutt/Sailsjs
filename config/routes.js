module.exports.routes = { 
                 'post /teacher': 'teacherController.create', 
               'get /teacher/:id?': 'teacherController.find', 
              'put /teacher/:id?': 'teacherController.update', 
               'delete /teacher/:id?': 'teacherController.destroy', 
             'post /student': 'studentController.create', 
               'get /student/:id?': 'studentController.find', 
              'put /student/:id?': 'studentController.update', 
               'delete /student/:id?': 'studentController.destroy', 
             
             }; 
  