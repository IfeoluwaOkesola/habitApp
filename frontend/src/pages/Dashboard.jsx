import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Chart from '../components/dashboard/Chart';

const Dashboard = () => {
    return (
        <div className="mt-[100px] w-full">
            <div className="flex w-full gap-x-14 pr-[8%]">
                <div className="w-[65%] justify-between flex items-center">
                    <div>
                        <h2 className='font-bold text-3xl'>Hey there, Gloria</h2>
                        <p>You are doing great!</p>
                    </div>
                    <Link to="" className='border border-primary rounded-md p-2'>
                        <div className="flex items-center text-primary">
                            <IoIosAdd /><span>Add Habit</span>
                        </div>
                    </Link>
                    <Chart />
                </div>
                <div className="w-[35%]">
                    <h2>Habits completed</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;