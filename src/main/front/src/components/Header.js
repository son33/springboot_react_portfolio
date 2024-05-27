import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const loginResult = useSelector((store) => store.login.loginResult);

    const moveScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    };

    const logout = () => {
        dispatch(logoutSuccess());
    }

    return (
        <div className='header-wrapper'>
            <div className='header'>
                <Link to="/" className='header-logo'>SON Portfolio</Link>
                <div className='header-list-wrapper'>
                    <div className='header-list' onClick={() => moveScroll('aboutMe')}>소개</div>
                    <div className='header-list' onClick={() => moveScroll('skill')}>스킬</div>
                    <div className='header-list' onClick={() => moveScroll('project')}>프로젝트</div>
                    <div className='header-list' onClick={() => moveScroll('board')}>게시판</div>
                    {loginResult > 0 ? (
                        <div className='header-list' id="logout"  onClick={logout}>로그아웃</div>
                    ) : (
                        <Link className='header-list' to="/user">로그인</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;