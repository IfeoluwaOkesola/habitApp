const { habit } = require("../models/habit.model");


async function createHabitService(newHabit){
    try {
        const habitCreated = await habit.create(newHabit)
        return habitCreated
    } catch (error) {
        console.log(error)
        return 'not created'
    }
}

module.exports= {createHabitService};