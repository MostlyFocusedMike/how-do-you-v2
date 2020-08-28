const fetcher = async <FetchData>(url: string, options?: RequestInit) => {
    const res = await fetch(url, options);
    if (res.ok) {
        try {
            const body: FetchData = await res.json();
            return body;
        } catch (e) {
            console.log("API for some reason rturned string. Please don't do that");
        }
    }
    console.log({ err: res }); // TODO: proper error alert
    return null;
};

export default fetcher;
