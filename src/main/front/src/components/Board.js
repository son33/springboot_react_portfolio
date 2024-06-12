import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Board = () => {
    const [boards, setBoards] = useState([]);
    const [content, setContent] = useState('');

    const loginResult = useSelector((store) => store.login.loginResult);

    const boardData = {
        content
    }

    const writeBoard = () => {
        if (content === '') {
            alert("내용을 입력해주세요");
        } else {
            axios.post("/api/board/write", boardData)
                .then(res => {
                    if (res.data > 0) {
                        alert("게시글 등록 완료");
                        setContent('');
                        fetchBoards();
                    }
                })
                .catch(error => console.log(error));
        };
    };

    const fetchBoards = () => {
        axios.get("/api/board")
            .then(res => setBoards(res.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <div className="board">
            <div className="content-title">게시판</div>
            <table className="board-content-wrapper">
                <thead>
                    <tr>
                        <td>내용</td>
                        <td>날짜</td>
                    </tr>
                </thead>
                <tbody>
                    {boards.map((board, index) => {
                        <tr key={index} className="board-content">
                            <td className="board-content-title">{board.content}</td>
                            <td className="board-content-date">{board.createDate}</td>
                            {loginResult > 0 ? (<td className="delete-board">X</td>) : ""}
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="write" method="put" action="/api/board/write">
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button onClick={writeBoard}>작성</button>
            </div>
        </div>
    )
}

export default Board;