import React from "react";
import { StyledAnnouncementsContainer } from "../../../styles/Announcements.styled";
import { AnnouncementCard } from "../../AnnouncementCard";
import { StyledLink } from "../../../styles/Link.styled";

export default function Announcements({
  announcements,
  handleUnfoldedAnnoucement,
  handleMapCoord,
  handleMapZoom,
  setHoverAnnouncement,
  setCoord,
  setZoom,
  setCurrentLocation,
}) {
  // ten use effect musi byc by podczas uzywania filtrow gdy jestesmy w rozwinietym ogloszeniu
  // nie pozostawalo zblizenie na pozycje tego wlasnie ogloszenia tylko mapa spowrotem cofala sie
  // do wyswietlania zakresu polski
  React.useEffect(() => {
    setCoord([52.06933986747059, 19.480305833934132]);
    setZoom(6);
  }, []);

  function handleClick(announcement) {
    handleUnfoldedAnnoucement(announcement);
    handleMapCoord(announcement);
    handleMapZoom();
    setCurrentLocation();
  }

  return (
    <StyledAnnouncementsContainer>
      {announcements.map((announcement) => {
        return (
          <StyledLink
            key={announcement.author_id}
            to={`/offers/${announcement.author}`}
            onClick={() => handleClick(announcement)}
            onMouseOver={() => setHoverAnnouncement(announcement)}
            onMouseLeave={() => setHoverAnnouncement({})}
          >
            <AnnouncementCard announcement={announcement} />
          </StyledLink>
        );
      })}
    </StyledAnnouncementsContainer>
  );
}
