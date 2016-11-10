module.exports = function badRequest(data, options) {
   var req = this.req;
   var res = this.res;
   var sails = req._sails;
   res.status(400);
   if (data !== undefined) { 
     sails.log.verbose('Sending 400 ("Bad Request") response',data);
   }
  else sails.log.verbose('Sending 400 ("Bad Request") response');
   if (sails.config.environment === 'production') {
     data = undefined;
   }
   if (req.wantsJSON) {
     return res.jsonx(data);
   }
   options = (typeof options === 'string') ? { view: options } : options || {};
   if (options.view) {
     return res.view(options.view, { data: data });
   }
   else return res.guessView({ data: data }, function couldNotGuessView () {
     return res.jsonx(data);
   });
 };
 