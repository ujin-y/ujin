// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  
  useEffect(() => {
    console.log('call the api');
  }, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("search for", keyword)
    }
  }, [keyword])

  useEffect(() => {
    console.log("i run when 'counter' changed")
  }, [counter])
  

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

//useEffect state가 변화하든 어떻든 코드를 단 한번만 실행할 수 있게 함
//특정 조건일때만 한번만 실행하고 싶을때는 useEffect array 영역에 해당하는 인자를 넣는다..?
