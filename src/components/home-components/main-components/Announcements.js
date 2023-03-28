import { StyledAnnouncementsContainer } from "../../../styles/Announcements.styled";
import { AnnouncementCard } from "../../AnnouncementCard";
import { StyledLink } from "../../../styles/Link.styled";

export default function Announcements({
  announcements,
  handleUnfoldedAnnoucement,
  handleMapCoord,
  handleMapZoom,
  setHoverAnnouncement,
}) {
  function handleClick(announcement) {
    handleUnfoldedAnnoucement(announcement);
    handleMapCoord(announcement);
    handleMapZoom();
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
