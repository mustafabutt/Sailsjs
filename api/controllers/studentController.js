module.exports = {
                     create: function(req, res, next) {
                         var params = req.params.all();
                         student.create(params, function(err, data) {
                             if (err) return next(err);
                             res.status(201);
                             res.json(data);
                         });
                     },
                     find: function (req, res, next) {
                       var id = req.param('id');
                       var idShortCut = isShortcut(id);
                       if (idShortCut === true) {
                           return next();
                       }
                        if (id) {
                           student.findOne(id, function(err, data) {
                               if(data === undefined) return res.notFound();
                               if (err) return next(err);
                               res.json(data);
                           });
                       }else {
                          var where = req.param('where');
                           if (_.isString(where)) {
                                   where = JSON.parse(where);
                           }
                           var options = {
                             limit: req.param('limit') || undefined,
                             skip: req.param('skip')  || undefined,
                                       sort: req.param('sort') || undefined,
                                       where: where || undefined
                               };
                               console.log("This is the options", options);
                               student.find(options, function(err, data) {
                               if(data === undefined) return res.notFound();
                               if (err) return next(err);
                               res.json(data);
                           });
                       }
                       function isShortcut(id) {
                           if (id === 'find'   ||  id === 'update' ||  id === 'create' ||  id === 'destroy') {
                             return true;
                           }
                       }
                     },
                     // an UPDATE action
                         update: function (req, res, next) {
                             var criteria = {};
                             criteria = _.merge({}, req.params.all(), req.body);
                             var id = req.param('id');
                             if (!id) {
                                 return res.badRequest('No id provided.');
                             }
                             student.update(id, criteria, function (err, data) {
                                 if(data.length === 0) return res.notFound();
                                 if (err) return next(err);
                                 res.json(data);
                             });
                         },  
                     };
                     