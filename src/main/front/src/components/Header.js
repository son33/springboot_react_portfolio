import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='logo'></div>
                <div className='list-wrapper'>
                    <div className='list'>소개</div>
                    <div className='list'>스킬</div>
                    <div className='list'>a</div>
                    <div className='list'>a</div>
                    <div className='list'>a</div>
                </div>
            </div>
        )
    }
}

export default Header;