import {useState, useEffect} from 'react';

const useAssociationData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiUrl = 'https://demo6922545.mockable.io/';

    useEffect(() => {
        setLoading(true);
        fetch(apiUrl)
        .then((res) => res.json())
        .then(response => {
            setData(response.data);
            setLoading(false);
        });

    }, [])

    return {data, loading};
};

export default useAssociationData;