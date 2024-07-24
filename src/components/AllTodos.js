import { PiTrash } from 'react-icons/pi';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

export default function AllTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="w-2/5 mx-auto mt-14">
      <h2 className="font-extrabold text-3xl font-gothic tracking-wide">
        My todos:
      </h2>
      <div className="flex flex-col mt-2">
        {todos.map((todo) => (
          <div
            className="bg-gray-100 p-3 rounded-md my-1 flex justify-between items-center"
            key={todo.id}>
            <p className="text-lg font-gothic tracking-wide font-medium">
              {todo.title}
            </p>
            <PiTrash
              size={25}
              className="me-6 text-red-600 cursor-pointer hover:text-red-900"
              onClick={() => handleRemoveTodo(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
