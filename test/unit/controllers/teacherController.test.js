var request = require('supertest'),
                 should = require('should');
             describe('teacher Controller', function () {
                 before(function (done) {
                     done(null, sails);
                 });
                 it('should get teacher', function (done) {
                     request(sails.hooks.http.app)
                         .get('/teacher')
                         .send({ someOtherParam: 'something'})
                         .expect(200)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
                 it('should post teacher', function (done) {
                     request(sails.hooks.http.app)
                         .post('/teacher')
                         .send({ someOtherParam: 'something'})
                         .expect(201)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
                 it('should update teacher', function (done) {
                     request(sails.hooks.http.app)
                         .put('/teacher/1')
                         .send({username:'new',password:'new',someOtherParam: 'something'})
                         .expect(200)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
                 it('should delete teacher', function (done) {
                     request(sails.hooks.http.app)
                         .delete('/teacher/1')
                         .send({someOtherParam: 'something'})
                         .expect(200)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
             });