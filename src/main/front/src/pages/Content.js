import ContentList from "../components/ContentList";

const Content = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <ContentList content_name="introduce" />
                <div className="line"></div>
                <ContentList content_name="aboutMe" />
                <div className="line"></div>
                <ContentList content_name="skill" />
                <div className="line"></div>
                <ContentList content_name="project" />
                <div className="line"></div>
                <ContentList content_name="board" />
            </div>
        </div>
    )
}

export default Content;