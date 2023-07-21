import styled from "styled-components";
import informatyka from "../images/informatyka.png";
import matematyka from "../images/matematyka.png";
import fizyka from "../images/fizyka.png";
import chemia from "../images/chemia.png";
import biologia from "../images/biologia.png";
import przyroda from "../images/przyroda.png";
import geografia from "../images/geografia.png";
import historia from "../images/historia.png";
import muzyka from "../images/muzyka.png";
import religia from "../images/religia.png";
import wos from "../images/wos.png";
import j_polski from "../images/j_polski.png";
import j_angielski from "../images/j_angielski.png";
import j_francuski from "../images/j_francuski.png";
import j_niemiecki from "../images/j_niemiecki.png";

function getImage(subject) {
  if (subject === "j. angielski") return j_angielski;
  else if (subject === "j. polski") return j_polski;
  else if (subject === "j. francuski") return j_francuski;
  else if (subject === "j. niemiecki") return j_niemiecki;
  else if (subject === "wiedza o społeczeństwie") return wos;
  else if (subject === "religia") return religia;
  else if (subject === "muzyka") return muzyka;
  else if (subject === "historia") return historia;
  else if (subject === "geografia") return geografia;
  else if (subject === "przyroda") return przyroda;
  else if (subject === "biologia") return biologia;
  else if (subject === "chemia") return chemia;
  else if (subject === "fizyka") return fizyka;
  else if (subject === "matematyka") return matematyka;
  else return informatyka;
}

export const StyledImageSubjectContainer = styled.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 0.3em;
  border-radius: 25px;
  //box-shadow: 0px 0px 6px ${({ theme }) => "black"};
  background-image: url(${({ subject }) => getImage(subject)});
  background-size: cover;
`;
