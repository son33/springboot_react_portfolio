import { Link } from 'react-router-dom';

const Header = () => {
    const moveScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    };

    return (
        <div className='header-wrapper'>
            <div className='header'>
                <Link to="/" className='header-logo'>SON Portfolio</Link>
                <div className='header-list-wrapper'>
                    <div className='header-list' onClick={() => moveScroll('aboutMe')}>소개</div>
                    <div className='header-list' onClick={() => moveScroll('skill')}>스킬</div>
                    <div className='header-list' onClick={() => moveScroll('project')}>프로젝트</div>
                    <div className='header-list' onClick={() => moveScroll('board')}>게시판</div>
                    <Link className='header-list' to="/login">로그인</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;