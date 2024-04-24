const ContentList = (props) => {
    const contentName = props.content_name;
    return (
        <div id={contentName} className={contentName}>
            <div>
                {contentName === 'introduce' ? <div>a</div> : null}
            </div>
        </div>
    )
}

export default ContentList;