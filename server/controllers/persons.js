const mongoose = require("mongoose");
const Person = mongoose.model("Person");

class Persons{
    getAll(req, res){
        Person.find({}, (err, persons)=>{
            if(err){
                console.log(err);
            }
            res.json({status: "ok", persons: persons});
        });
    }
    create(req, res){
        console.log(req.params.name);
        let person = new Person({name: req.params.name, birthYear: 1955});
        person.save((err)=>{
            if(err){
                res.json({status:"not ok", valid: false, errors:err});
            }else{
                res.json({status:"ok", valid: true});
            }
        });
    }
    view(req, res){
        Person.find({name: req.params.name}, (err, person) => {
            if(err){
                console.log(err);
            }
            res.json({status: "ok", person: person});
        });
    }
    remove(req, res){
        Person.remove({name: req.params.name}, (err)=>{
            if(err){
                console.log(err);
            }
            res.json({status:"ok"})
        });
    }
}
module.exports = new Persons();