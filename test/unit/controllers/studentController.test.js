var request = require('supertest'),
                 should = require('should');
             describe('student Controller', function () {
                 before(function (done) {
                     done(null, sails);
                 });
                 it('should get student', function (done) {
                     request(sails.hooks.http.app)
                         .get('/student')
                         .send({ someOtherParam: 'something'})
                         .expect(200)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
                 it('should post student', function (done) {
                     request(sails.hooks.http.app)
                         .post('/student')
                         .send({ someOtherParam: 'something'})
                         .expect(201)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
                 it('should update student', function (done) {
                     request(sails.hooks.http.app)
                         .put('/student/1')
                         .send({username:'new',password:'new',someOtherParam: 'something'})
                         .expect(200)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
                 it('should delete student', function (done) {
                     request(sails.hooks.http.app)
                         .delete('/student/1')
                         .send({someOtherParam: 'something'})
                         .expect(200)
                         .end(function (err, res) {
                             if (err) return done(err);
                             should.exist(res.body);
                             done();
                         });
                 });
             });