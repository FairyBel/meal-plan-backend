const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editeMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal)
router.post('/saveMeals', saveMeals)
router.delete('/deleteMeal/:id', deleteMeal)  // можно вместо route.delete  делать route.post('/deleteMeal', deleteMeal) будет тот же эффект
router.put('/editeMeal', editeMeal)

module.exports = router;