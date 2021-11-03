// 로컬 변수 사용하기 2 함수형 컴포넌트

import React, { useRef } from "react";

const useRef_prac2 = () => {
    const  id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }
    return (
        <div>
            refsample
        </div>
    )
}

export default useRef_prac2;