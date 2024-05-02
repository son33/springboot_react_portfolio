import ContentList from "../components/ContentList";

const Content = () => {
    return (
        <div className="content-wrapper">
            <ContentList content_name="introduce" />
            <ContentList content_name="aboutMe" />
            <ContentList content_name="skill" />
            <ContentList content_name="project" />
            <ContentList content_name="board" />
        </div>
    )
}

export default Content;