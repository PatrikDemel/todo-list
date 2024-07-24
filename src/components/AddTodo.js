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
      <form
        className="w-9/12 flex flex-col justify-center md:flex-row md:w-2/3 lg:w-2/5"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="My new todo..."
          required
          maxLength="50"
          className="p-3 w-full md:w-2/5 lg:1/2 mb-5 md:mb-0 me-6 bg-gray-100 outline-teal-500 rounded-md"
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
