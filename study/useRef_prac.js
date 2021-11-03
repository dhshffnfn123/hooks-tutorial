// 로컬 변수 사용하기
// 클래스 컴포넌트

import React, { Component } from "react";

class useRef_prac extends Component {
    id = 1
    setId = (n) => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }
    render() {
        return (
            <div>
                MyComponent
            </div>
        )
    }
}

export default useRef_prac;