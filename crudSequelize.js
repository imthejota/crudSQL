const db = require('./src/database/models/index')


const create = function (res, req){
    const save = db.Genre.create({
        name: req.body.name,
        ranking: req.body.ranking !=  '' || req.body.ranking != null? parseInt(req.body.ranking) : 0
    });
    const success = data => res.send(data);
    const error = error => res.send(error);

    return save.then(success).catch(error);
};


const update = function (res, req){
    const selected = db.Genre.findByPk(req.params.id)
    
    const successSelected = data => db.Genre.update({
        name: req.body.name
    },{
        where: {
            id: data.id
    })

    const success = updated => res.send(updated);
    const error = error => res.send(error);

    return selected.then(successSelected).then(success).catch(error)
};


const destroy = function (res, req){
    db.Genre.destroy({
        where: {
            id: req.params.id
        }
    })
}
