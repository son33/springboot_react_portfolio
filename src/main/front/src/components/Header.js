import { Link } from 'react-router-dom';

const Header = () => {
    const moveScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    };

    return (
        <div className='header'>
            <div className='header-content'>
                <Link to="/" className='logo'>SON Portfolio</Link>
                <div className='list-wrapper'>
                    <div className='list' onClick={() => moveScroll('introduce')}>소개</div>
                    <div className='list' onClick={() => moveScroll('skill')}>스킬</div>
                    <div className='list' onClick={() => moveScroll('project')}>프로젝트</div>
                    <div className='list' onClick={() => moveScroll('career')}>경력</div>
                    <Link className='list' to="/login">로그인</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;