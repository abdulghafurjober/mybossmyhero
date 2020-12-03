import './App.css';
import ReactPlayer from "react-player";
import Footer from './components/Footer'
import { toast } from 'react-toastify';

function App() {
  const test = () => {
    alert();
  };
  const actorArray = [
    {
      "name": "Tomoya Nagase",
      "role": "Makio Sakaki (榊 真喜男)",
      "link": "https://en.wikipedia.org/wiki/Tomoya_Nagase"
    },
    {
      "name": "Yuya Tegoshi",
      "role": "Jun Sakurakoiji (桜小路 順)",
      "link": "https://en.wikipedia.org/wiki/Yuya_Tegoshi"
    },
    {
      "name": "Yui Aragaki",
      "role": "Hikari Umemura (梅村 ひかり)",
      "link": "https://en.wikipedia.org/wiki/Yui_Aragaki"
    },
    {
      "name": "Koki Tanaka",
      "role": "Kazuya Manabe (真鍋 和弥)",
      "link": "https://en.wikipedia.org/wiki/Koki_Tanaka"
    },
    {
      "name": "Masaya Kikawada",
      "role": "Mikio Sakaki (榊 美喜男)",
      "link": "https://en.wikipedia.org/wiki/Masaya_Kikawada"
    },
    {
      "name": "Yu Kashii",
      "role": "Yuriko Minami (南 百合子)",
      "link": "https://en.wikipedia.org/wiki/Yu_Kashii"
    },
    {
      "name": "Masachika Ichimura",
      "role": "Kichi Sakaki (榊 喜一)",
      "link": "https://en.wikipedia.org/wiki/Masachika_Ichimura"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        My Boss My Hero
      </header>
      <body className="App-body">
        <div className="some-space">
        <ReactPlayer
          onReady
          url='https://www.youtube.com/watch?v=Ps_k5-6TOlI'
          playing={true}
          light={true}
          controls={true}
          onError={() => toast.error("Check your internet connection")}
        />
        </div>
        <div className="some-space">
          <table>
            <thead>
              <th>Sysnopsis</th>
            </thead>
            <tbody>
              <td>
                The show is about Makio Sakaki (榊 真喜男), also known as "Tornado", a 27-year-old yakuza gangster, who wants to succeed his father as the head of the gang. However, Makio is not very bright, so his father decides to send him back to high school and makes a deal with him: if he can graduate he can become the new leader of the gang. If Makio doesn't graduate, the position of boss will be given to his younger brother, Mikio. And that is how the hero goes back to school, hiding his identity and age.
          </td>
            </tbody>
          </table>
        </div>
        <div className="some-space">
          <b>Cast</b>
          <br />
          <table className="table-style">
            <thead>
              <th className="td-style">Real Name</th>
              <th className="td-style">role Name</th>
            </thead>
            <tbody>
              {
                actorArray.map((actor) => (
                  <tr>
                    <td className="td-style"><a href={actor.link}>{actor.name}</a></td>
                    <td className="td-style">{actor.role}</td>
                  </tr>
                ))
              }
              <td></td>
            </tbody>
          </table>
        </div>

        <div className="some-space">
          <b>Song : Sorafune (<a href="https://en.wikipedia.org/wiki/Sorafune_/_Do!_Do!_Do!">そらふね</a>)</b>

          <br />
          <audio controls>
            <source
              autoPlay="autoPlay"
              href="audio_tag"
              loop
              src={`http://linik.free.fr/ziks/rocks/TOKIO%20-%20Sorafune/01%20Sorafune.mp3`} type="audio/mpeg"
            />
        Your browser does not support the audio element.
      </audio>
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
