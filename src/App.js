import './reset.css'
import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();

  const date = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  const formattedToday = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
  const formattedDate = `${date[today.getDay()]}`
  
  return (
    <div className="App">
      <div className='today'>
        <p>{formattedToday}</p>
        <p>{formattedDate}</p>
      </div>
      <TodoList/>
      <InputTodo/>
    </div>
  );
}

export default App;
