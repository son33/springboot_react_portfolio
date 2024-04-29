
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-title">제가 더 궁금하시다면...</div>
                <div className="footer-body">
                    <div className="github">
                        <div className="footer-logo"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></div>
                        <div>
                            <div><a href="https://github.com/son33">https://github.com/son33</a></div>
                            <div>개인 혹은 팀 프로젝트 소스 코드 저장소입니다.</div>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="footer-logo"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9929C8455FEADCE219" alt="tstory" /></div>
                        <div>
                            <div><a href="https://son33.tistory.com/">https://son33.tistory.com/</a></div>
                            <div>공부를 할 때, 아는 지식을 공유할 때 정보 교류를 위해 사용합니다.</div>
                        </div>
                    </div>
                </div>
                <div className="copyright">© 2024. Son Hyeong Woo. All rights reserved.</div>
            </div>
        </div>
    )
};

export default Footer;