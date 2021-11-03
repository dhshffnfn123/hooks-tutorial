import React, { useState, useMemo, useCallback, useRef  } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중');
    if (numbers.length === 0) return 0; // numbers에 아무것도 없으면 0
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);  
    // useRef() 파라미터로 다음 id가 될 값을 넣어줄 수 있다.
    // 파라미터 값을 넣어주면 해당 값이 변수의 current 값이 된다.
    // inputEl 변수를 수정하거나 조회하려면 .current 값을 수정하거나 조회한다.

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();    // Ref 객체의 current 값은 우리가 선택하고자 하는 DOM을 가리킨다.
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성
    

    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />  {/* 선택하고 싶은 DOM에 속성으로 ref 값을 설정해준다. */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                    ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
};

export default Average;
    