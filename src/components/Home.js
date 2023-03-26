import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Header from "./home-components/Header";
import Filters from "./home-components/Filters";
import Container from "./home-components/Container";

export default function Home({ isLoged, setIsLoged, setUserId }) {
  const location = useLocation();
  const navigate = useNavigate();
  // komentarz 1
  // dac ify w statach tak by bralo wartosc z query z pathname jesli jest filt nalozony by mozna bylo przesylac linki
  // podobnie zrobic z unfolded announcement -> dac id ogloszenia w query i wysylac zapytanie do api po id
  // komentarz 2
  // pomyslec czy zamiast robienia stateow nie lepiej skorzystac z location.search i wrzucac do tego zmieniajace sie wartosci url
  // a potem z tego do api wyciagac
  const [data, setData] = React.useState([]);
  const [cityFilter, setCityFilter] = React.useState();
  const [voivodeshipFilter, setVoivodeshipFilter] = React.useState();
  const [subjectFilter, setSubjectFilter] = React.useState();
  const [learningModeFilter, setLearningModeFilter] = React.useState();
  const [costFilter, setCostFilter] = React.useState(["", ""]);
  const [unfoldedAnnoucement, setUnfoldedAnnoucement] = React.useState(
    location.state ? location.state.announcement : {}
  );

  function getUrl() {
    if (voivodeshipFilter) location.pathname = "/filters";
    else if (subjectFilter) location.pathname = "/filters";
    else if (learningModeFilter) location.pathname = "/filters";
    else if (cityFilter) location.pathname = "/filters";
    else if (costFilter[0]) location.pathname = "/filters";
    else if (costFilter[1]) location.pathname = "/filters";
    else if (location.pathname.includes("offers")) console.log("asd");
    else {
      location.pathname = "/";
      navigate(location.pathname);
    }

    console.log("wyrenderowalo home");

    // tutaj mozna zrobic by ta sama sciezke ktora jest do api dac do location.pathname a potem przy tworzeniu statow
    // dac warunki ze jak w location.search jest dana wartosc to zeby przypisalo na wstepie a jak nie to nie
    // to by podswietlalo odpowiedni wybor bd tez dzialac jak tak zrobie (niebd trzeba tam nic zmieniac)
    return location.pathname === "/filters"
      ? `/filters?${voivodeshipFilter && `voivodeship=${voivodeshipFilter}`}&${
          subjectFilter && `subject=${subjectFilter}`
        }&${learningModeFilter && `learningMode=${learningModeFilter}`}&${
          cityFilter && `city=${cityFilter}`
        }&${
          costFilter[0] &&
          `cost=${costFilter[0]}&${costFilter[1] && `cost=${costFilter[1]}`}`
        }
        `
      : "/api";
  }
  // na koniec api dodac &${costFilter[0] || costFilter[1] && `cost=${costFilter[0],costFilter[1]}`}

  // tutaj dac ze jak nie bd odzewu z api (jakis blad) to wyskoczyl error np 404 czy cos
  React.useEffect(() => {
    fetch(getUrl())
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [
    voivodeshipFilter,
    subjectFilter,
    learningModeFilter,
    cityFilter,
    costFilter,
  ]);

  return (
    <div>
      <Filters
        voivodeshipFilter={voivodeshipFilter}
        subjectFilter={subjectFilter}
        learningModeFilter={learningModeFilter}
        cityFilter={cityFilter}
        costFilter={costFilter}
        setCityFilter={setCityFilter}
        // potem spr czy trzeba wrzucac te value bo wydaje mi sie ze bd mozna zrobic tak jak setCityFilter
        setVoivodeshipFilter={(value) => setVoivodeshipFilter(value)}
        setSubjectFilter={(value) => setSubjectFilter(value)}
        setLearningModeFilter={(value) => setLearningModeFilter(value)}
        setCostFilter={(value) => setCostFilter(value)}
      />
      <Container
        data={data}
        unfoldedAnnoucement={unfoldedAnnoucement}
        setUnfoldedAnnoucement={setUnfoldedAnnoucement}
      />
    </div>
  );
}
