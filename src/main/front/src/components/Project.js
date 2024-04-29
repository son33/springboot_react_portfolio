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
                                <p>개인 소개를 위한 Portfolio 페이지입니다.</p>
                                <p></p>
                                <p>개인 프로젝트이며</p>
                            </div>
                            <div className="line"></div>
                            <div className="project-description">
                                <div className="description-label">front-end</div>
                                <div className="description-content">react</div>
                            </div>
                            <div className="project-description">
                                <div className="description-label">back-end</div>
                                <div className="description-content">springBoot</div>
                            </div>
                            <div className="project-description">
                                <div className="description-label">DB</div>
                                <div className="description-content">MySQL</div>
                            </div>
                        </div>
                    </div>
                    <div className="project-url">
                        <a href="https://github.com/son33/mandlemandle" target="_blank">https://github.com/son33/mandlemandle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;