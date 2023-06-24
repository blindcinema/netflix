import { Main } from "../components/Main";
import { Row } from "../components/Row";
import { requests, options } from "../Request";

export function Home() {
    return (
        <div>
            <Main />
            <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} options={options} />
            <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} options={options} />
            <Row rowID="3" title="Now Playing" fetchURL={requests.requestNowPlaying} options={options} />
            <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} options={options} />
            
        </div>
    )
}