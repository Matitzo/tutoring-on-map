import "./App.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Container from "./components/Container";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // pomyslec czy zamiast robienia stateow nie lepiej skorzystac z location.search i wrzucac do tego zmieniajace sie wartosci url
  // a potem z tego do api wyciagac
  const [data, setData] = React.useState([]);
  const [cityFilter, setCityFilter] = React.useState();
  const [voivodeshipFilter, setVoivodeshipFilter] = React.useState();
  const [subjectFilter, setSubjectFilter] = React.useState();
  const [learningModeFilter, setLearningModeFilter] = React.useState();

  function getUrl() {
    if (voivodeshipFilter) location.pathname = "/filters";
    else if (subjectFilter) location.pathname = "/filters";
    else if (learningModeFilter) location.pathname = "/filters";
    else if (cityFilter) location.pathname = "/filters";
    else location.pathname = "/";

    navigate(location.pathname);
    // tutaj mozna zrobic by ta sama sciezke ktora jest do api dac do location.pathname a potem przy tworzeniu statow
    // dac warunki ze jak w location.search jest dana wartosc to zeby przypisalo na wstepie a jak nie to nie
    // to by podswietlalo odpowiedni wybor bd tez dzialac jak tak zrobie (niebd trzeba tam nic zmieniac)
    return location.pathname === "/filters"
      ? `/filters?${voivodeshipFilter && `voivodeship=${voivodeshipFilter}`}&${
          subjectFilter && `subject=${subjectFilter}`
        }&${learningModeFilter && `learningMode=${learningModeFilter}`}&${
          cityFilter && `city=${cityFilter}`
        }
    `
      : "/api";
  }

  React.useEffect(() => {
    // console.log(location.pathname);
    console.log(getUrl());
    fetch(getUrl())
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [voivodeshipFilter, subjectFilter, learningModeFilter, cityFilter]);

  return (
    <div>
      <Header />
      <Filters
        voivodeshipFilter={voivodeshipFilter}
        subjectFilter={subjectFilter}
        learningModeFilter={learningModeFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        setVoivodeshipFilter={(value) => setVoivodeshipFilter(value)}
        setSubjectFilter={(value) => setSubjectFilter(value)}
        setLearningModeFilter={(value) => setLearningModeFilter(value)}
      />
      <Container data={data} />
    </div>
  );
}

export default App;
