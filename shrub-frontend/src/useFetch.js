import { useState, useEffect } from "react";

const useFetch = (url, x_api_key) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal,
                        headers: {
                            'x-api-key': x_api_key, 
                        }}).then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data for that resource')
                    }

                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);

                })
                .catch(err => {
                    if (err.name === 'AbortError'){
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        setError(err.message);
                        console.log(err.message);
                    }

                })
        }, 1000);
    return () => abortCont.abort();
    }, [url]);
        return {data, isPending, error}
}

export default useFetch;