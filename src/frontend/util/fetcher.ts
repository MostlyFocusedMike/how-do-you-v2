const fetcher = async <FetchData>(url: string, options?: RequestInit) => {
    const res = await fetch(url, options);
    const body: FetchData = await res.json();
    if (res.ok) return body;
    console.log({ err: res.statusText, status: res.status, body }); // TODO: proper error alert
    return null;
};

export default fetcher;
