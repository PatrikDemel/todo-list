import { addTodo } from '../features/todos/todoSlice';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    dispatch(addTodo(inputValue));
    e.target.elements[0].value = '';
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form className="w-6/12 flex justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="My new todo..."
          required
          maxLength="50"
          className="p-3 w-2/5 me-6 bg-gray-100 outline-teal-500 rounded-md"
        />
        <button
          type="submit"
          className="py-3 px-7 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md">
          Add todo
        </button>
      </form>
    </div>
  );
}
