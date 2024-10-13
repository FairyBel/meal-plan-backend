const MealModel = require('./MealModel');

//get

module.exports.getMeal = async(req,res) =>{
    const myMeal = await MealModel.find();
    res.send(myMeal)
}

//сохраняем полученные рецепты

module.exports.saveMeals = async(req,res) =>{
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => {
        console.log('Meal added');
        res.send(data);
    })

    }

    

//изменение состава внутри edit

module.exports.editeMeal = async(req,res) =>{
    const { _id, title } = req.body    
    MealModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a meal'))
}

//удаляем элементы по id

module.exports.deleteMeal = async (req, res) =>{
    const _id = req.params.id;
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a meal'))
}