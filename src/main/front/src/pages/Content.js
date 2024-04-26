import ContentList from "../components/ContentList";

const Content = () => {
    return (
        <div className="content-wrapper">
            <div className="content">
                <ContentList content_name="introduce" />
                <ContentList content_name="aboutMe" />
                <ContentList content_name="skill" />
                <ContentList content_name="project" />
                <ContentList content_name="career" />
            </div>
        </div>
    )
}

export default Content;