const fetcher = async <FetchData>(url: string, options?: RequestInit) => {
    const res = await fetch(url, options);
    const text = await res.text();
    if (res.ok) {
        try {
            const body = JSON.parse(text);
            return body;
        } catch (e) {
            return text;
        }
    }
    console.log({ err: res.statusText, status: res.status, text }); // TODO: proper error alert
    return null;
};

export default fetcher;
