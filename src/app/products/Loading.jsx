export const Loading = ({type}) => {
    if(type==="searchBar") {
        return (
                <div className="spinner spinner--small"/>
            )
    } else {
        return (
            <div className="spinner"/>
        )
    }
}