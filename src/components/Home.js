import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import Filters from "./home-components/Filters";
import Container from "./home-components/Container";

export default function Home({ isLoged, setIsLoged, setUserId }) {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const announcementId = query.get("id");

  const [isFetchingData, setIsFetchingData] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [cityFilter, setCityFilter] = React.useState();
  const [voivodeshipFilter, setVoivodeshipFilter] = React.useState();
  const [subjectFilter, setSubjectFilter] = React.useState();
  const [learningModeFilter, setLearningModeFilter] = React.useState();
  const [costFilter, setCostFilter] = React.useState(["", ""]);
  const [unfoldedAnnoucement, setUnfoldedAnnoucement] = React.useState(
    localStorage.getItem("unfoldedAnnoucement")
      ? JSON.parse(localStorage.getItem("unfoldedAnnoucement"))
      : {}
  );

  function getUrl() {
    if (voivodeshipFilter) location.pathname = "/filters";
    else if (subjectFilter) location.pathname = "/filters";
    else if (learningModeFilter) location.pathname = "/filters";
    else if (cityFilter) location.pathname = "/filters";
    else if (costFilter[0]) location.pathname = "/filters";
    else if (costFilter[1]) location.pathname = "/filters";
    else if (location.pathname.includes("offers")) {
    } else {
      location.pathname = "/";
      navigate(location.pathname);
    }

    return location.pathname === "/filters"
      ? `/filters?${voivodeshipFilter && `voivodeship=${voivodeshipFilter}`}&${
          subjectFilter && `subject=${subjectFilter}`
        }&${learningModeFilter && `learningMode=${learningModeFilter}`}&${
          cityFilter && `city=${cityFilter}`
        }&${costFilter[0] && `cost1=${costFilter[0]}`}&${
          costFilter[1] && `cost2=${costFilter[1]}`
        }
        `
      : "/api";
  }

  // tutaj dac ze jak nie bd odzewu z api (jakis blad) to wyskoczyl error np 404 czy cos
  React.useEffect(() => {
    setIsFetchingData(true);
    //http://localhost:8080${getUrl()}
    //https://smart-edukacja.onrender.com${getUrl()}
    fetch(`https://smart-edukacja.onrender.com${getUrl()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsFetchingData(false);
      })
      .catch((error) => {
        setIsFetchingData(false);
        console.log(error);
      });
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
      {
        <Container
          data={data}
          unfoldedAnnoucement={unfoldedAnnoucement}
          setUnfoldedAnnoucement={setUnfoldedAnnoucement}
          isFetchingData={isFetchingData}
        />
      }
    </div>
  );
}
