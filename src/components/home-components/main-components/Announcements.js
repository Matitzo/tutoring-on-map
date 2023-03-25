import { StyledAnnouncementsContainer } from "../../../styles/Announcements.styled";
import { AnnouncementCard } from "../../AnnouncementCard";
import { StyledLink } from "../../../styles/Link.styled";

export default function Announcements({
  announcements,
  handleUnfoldedAnnoucement,
}) {
  return (
    <StyledAnnouncementsContainer>
      {announcements.map((announcement) => {
        return (
          <StyledLink
            key={announcement.author_id}
            to={`/offers/${announcement.author}`}
            onClick={() => handleUnfoldedAnnoucement(announcement)}
          >
            <AnnouncementCard announcement={announcement} />
          </StyledLink>
        );
      })}
    </StyledAnnouncementsContainer>
  );
}
