import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

function Swr() {
    const { data } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher );
    return (
        <div>
            <img width={300} height={300} src={data?.message} />
        </div>
    );
}

export default Swr;
