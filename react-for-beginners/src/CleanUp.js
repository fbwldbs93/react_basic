import {useState, useEffect} from 'react'

function Hello(){
    /*
    ---- clean up 함수 풀어서 설명 -----
    function byeFn(){
        console.log("bye :(")
    }
    function hiFn(){
        console.log("created :)");

        return byeFn;
    }

    useEffect(hiFn, [])
    */


    //useEffect 를 선언한 컴포넌트에 적용되는것..?
    //그래서 Hello 컴포넌트가 생성될 때 콘솔이 띄워짐
    useEffect(()=>{
        console.log("created :)");
        
        return ()=> console.log("destroyed :(")
        //clean up 함수
        //- 컴포넌트가 destroy 될 때, 뭔가 할 수 있게 해줌
    }, [])




    return <h1>Hello</h1>
}

function CleanUp(){
    const [showing, setShowing] = useState(false);
    const onClick=()=>{
        setShowing((prev)=>(!prev))
    }
  return(
    <div>
        {showing ? <Hello/> : null}
        {/* showing 이 아닐 때는 Hello 컴포넌트 자체가 존재하지 않는 것!
        그래서 Hello 컴포넌트의 useEffect 도 작동하지 않는 것임 */}
        <button onClick={onClick}>{showing?"Hide":"Show"}</button>
    </div>
  )
}

export default CleanUp;
