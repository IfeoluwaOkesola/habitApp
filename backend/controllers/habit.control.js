const { createHabitService } = require('../service/habit.service');

const createHabit = async (req, res) => {
  const { habitCategory, habitName } = req.body;
  
  const userId = req.user.id; // complete the error here
  try {
    if (habitCategory && habitName) {
      const result = await createHabitService({
        habitCategory,
        habitName,
        isCompleted: false,
        lastCompleted: null,
        completedDates: [],
        user: userId,
      });

      if(result){
        //res.status(200).json({Category: result.habitCategory, Habit: result.habitName})
        res.status(200).json({message: result})
      }else{
        throw Error('habit not created')
      }
    }else{
        throw Error('enter habit details')
    }
  } catch (error) {
    console.log(error.message)
  }
};


module.exports={createHabit};