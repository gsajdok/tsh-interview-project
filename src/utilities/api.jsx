export const fetchData = (setLoaded, setItems, setError, parameters) => {
    let fetchLink = process.env.REACT_APP_API_URL + "?" + Object.entries(parameters).map(element => element.join("=")).join("&");

    fetch(fetchLink)
        .then(res => res.json())
        .then(
            (data) => {
                setLoaded(true);
                setItems(data);
            },
            (error) => {
                setLoaded(true);
                setError(error);
            }
        )
}

