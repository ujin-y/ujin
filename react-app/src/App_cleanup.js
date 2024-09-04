// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from "react";

function Hello(){
  // 첫번째 사용 방법
  // function byeFn(){
  //   console.log('destroyed :(')
  // }
  // function hiFn(){
  //   console.log("created :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, [])

  // 두번째 사용방법
  // useEffect(function(){
  //   console.log("created :)");
  //   return function(){
  //     console.log('destroyed :(')
  //   }
  // },[])
  
  // 세번째 사용방법
  useEffect(() => {    
    console.log("created :)");
    return () => console.log('destroyed :(')
  },[])

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;

//useEffect state가 변화하든 어떻든 코드를 단 한번만 실행할 수 있게 함
//특정 조건일때만 한번만 실행하고 싶을때는 useEffect dependencies 영역에 해당하는 인자를 넣는다..?
