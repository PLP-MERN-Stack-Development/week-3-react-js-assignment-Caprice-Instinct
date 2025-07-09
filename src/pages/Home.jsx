import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="space-y-8">
      <Card>
        <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your tasks efficiently with our React-based task manager.
        </p>
      </Card>
      <TaskManager />
    </div>
  );
};

export default Home;