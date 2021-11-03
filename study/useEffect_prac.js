import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    /* -------------------------------- useEffect ------------------------------- */
    /* useEffect(() => {
        console.log('rendering is complete!');
        console.log({name, nickname});
    }); */

    /* ---------------------- useEffect (마운트될 때만 실행하고 싶을 때) --------------------- */
    /* useEffect(() => {
        console.log('마운트될 때만 실행됩니다.'); 
    }, []); 마운트 될 때만 실행하고 싶을 시 뒤에 []를 붙여준다. */

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return() => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);
    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;