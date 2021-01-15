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
            const data = response.data.sort((a, b) => {
                // to sort on overall association score in descending order.
                return a.association_score.overall < b.association_score.overall
                        ? 1 : -1;
            });
            setData(data);
            setLoading(false);
        });

    }, [])

    return {data, loading};
};

export default useAssociationData;