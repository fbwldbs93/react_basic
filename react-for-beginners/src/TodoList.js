import { useState } from "react";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo((prev) => (prev = e.target.value));
  };

  const onDeleteClick = (index) => {
    const removeToDos = toDos.filter((items, toDoIndex) => {
      console.log(index);
      return toDoIndex !== index;

      /*
        toDoIndex 는 배열의 인덱스를 의미 [0,1,2,3...]
        index 는 선택한 요소의 인덱스를 의미 (map 에서 li에 부여한 index)
        
        이해하기 어려울 수 있는데,,

        toDos의 인덱스를 각 li에 부여해준 것이라 생각하면 됨
        그래서 toDos 를 filter 로 해당 index 를 삭제시, toDos의 인덱스 변경이 되고,
        컴포넌트가 리랜더링되면서 
        li 의 인덱스에도 변화가 생기는 것!
      */
    });

    setToDos((arr) => (arr = removeToDos));

    console.log(toDos);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    /*
            toDos 에 새 값과 이전 값을 넣는 방법으로 Array 에 값을 추가할 수 있음!
            - 대신, currentArray 는 배열이기때문에 그대로 적용하면
            [새값, [이전 값]] 의 형태로 적용이 됨!
            - 그래서 [새 값, ...이전값] 의 형태로 넣으면
            - 이전 값이 분해되어 들어오기 때문에 [새값, 이전값들]의 형태가 됨!
        */

    console.log(toDos);

    setToDo((prev) => (prev = ""));
  };

  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
        <ul>
          {toDos.map((item, index) => {
            return (
              <li key={index}>
                {item} &nbsp;
                <button onClick={() => onDeleteClick(index)}>delete</button>
              </li>
            );
          })}
        </ul>
      </form>
      {/* 
                input value 에도 state 값을 주는 이유?
                - input 의 값을 감지해서 이벤트가 발생하기 때문..?

                ------
                submit 이벤트는 form 에 적용해야함..!
                - submit 이벤트는 form 에서 발생함
                - submit 이벤트 객체의 target 프로퍼티 값은 form 요소에 대한 참조 값임!
            */}
    </div>
  );
}

export default TodoList;
