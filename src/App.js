import Avata from "./components/Avata";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Task1 from "./components/Task1";

function App() {
  let stylesArr = [{width: "300px", height: "150px", backgroundColor: "red"},{width: "200px", height: "50px", backgroundColor: "red"},{width: "100px", height: "50px", backgroundColor: "red"}]
  return <div>
    <Task1 />
    <Boxes style={stylesArr} />
    <Card>
      <Avata src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuFDjCZXG5A5L66JsFz-WvDrgpnnuLGdfmQ&usqp=CAU"/>
    </Card>
    <Counter />
  </div>;
}

export default App;
