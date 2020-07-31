const fetcher = async (url: string, options?: RequestInit ) => {
    const res = await fetch(url, options)
    const body = await res.json();
    if (res.ok) return body;
    return { err: res.statusText, status: res.status, body }
};

export default fetcher;