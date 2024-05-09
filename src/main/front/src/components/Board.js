const Board = () => {
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
                    <tr className="board-content">
                        <td className="board-content-title">하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                    <tr className="board-content">
                        <td className="board-content-title">하이요</td>
                        <td className="board-content-date">2024.05.03</td>
                        <td className="delete-board">X</td>
                    </tr>
                </tbody>
            </table>
            <div className="write">
                <input type="text"/>
                <button>작성</button>
            </div>
        </div>
    )
}

export default Board;