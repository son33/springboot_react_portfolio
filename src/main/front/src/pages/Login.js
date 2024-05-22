import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navi = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('/api/user/login', null, {
            params: {
                id: id,
                password: password
            }
        }).then((res) => {
            if (res.data > 0) {
                dispatch(loginSuccess());
                navi("/");
            }
        })
            .catch((error) => {
                console.error(error);
            })
    };

    return (
        <div className="login-wrapper">
            <div>
                관리자 로그인 페이지입니다.
            </div>
            <form className="login" onSubmit={handleSubmit} accept-charset="utf-8" method="post">
                <input type="text" name="id" required placeholder="아이디를 입력하세요" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="password" name="password" required placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="로그인" />
            </form>
        </div>
    )
}

export default Login;