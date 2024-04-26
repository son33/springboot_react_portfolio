const ModifyButton = (props) => {
    const contentName=props.content_name;
    return(
        <button id={contentName + "Modify"} className="modifyButton">수정</button>
    )
}

export default ModifyButton;