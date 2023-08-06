const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

courses = [
    {id : 1, name : 'course 1'},
    {id : 2, name : 'course 2'},
    {id : 3, name : 'course 3'},
]

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/api/courses', function(req, res) {
    res.send(courses);
});

app.get('/api/courses/:id', function(req, res) {
   let course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) return res.status(404).send('Course Not Found');

   res.send(course);
});

app.post('/api/courses',function(req, res) {

    const result = validateCourse(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    courses.push({id : courses.length + 1, name : req.body.name});
    res.send(courses);
});


app.put('/api/courses/:id', function (req, res) {

    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Course Not Found');

    const result = validateCourse(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    course.name = req.body.name;

    res.send(courses);
});

app.delete('/api/courses/:id', function (req, res) {
    
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Course Not Found');

    courses = courses.filter(c => c.id!== parseInt(req.params.id));

    res.send(courses);
});



const port = process.env.PORT || 3000;

app.listen(port, () => {console.log('listening on ' + port + '........');});
