import SwiperImage from "./SwiperImage";

const Project = () => {
    return (
        <div className="project">
            <div className="content-title">PROJECT</div>
            <div className="project-content-wrapper">
                <div className="project-content">
                    <div className="project-title">맨들맨들</div>
                    <div className="project-day">2024.01.01 ~ 2024.01.01</div>
                    <div className="project-body">
                        <div className="project-img">
                            <SwiperImage />
                        </div>
                        <div className="project-main">
                            <div className="project-explain">
                                <p>프로젝트명 : 맨들맨들</p>
                                <p>설명 : <b>맨토와 맨티 연결을 도와주는 웹사이트</b>입니다.
                                    첫 팀 프로젝트로 사실상 웹개발에서 거의 사용하지않는 Servlet을 이용해 진행한 프로젝트이지만
                                    프론트와 백의 구조를 이해하는데 큰 도움이 되었고, 계획한 플랫폼을 구현하면서 성취감을 느낄 수 있었습니다.
                                </p>
                            </div>
                            <div className="project-description">
                                <div className="description-label">front-end</div>
                                <div className="description-content">JSP</div>
                            </div>
                            <div className="project-description">
                                <div className="description-label">back-end</div>
                                <div className="description-content">servlet</div>
                            </div>
                            <div className="project-description">
                                <div className="description-label">DB</div>
                                <div className="description-content">ORACLE</div>
                            </div>
                            <div className="project-url">
                                <a href="https://github.com/son33/mandlemandle" target="_blank">https://github.com/son33/mandlemandle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;