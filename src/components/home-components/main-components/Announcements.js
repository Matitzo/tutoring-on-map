import { StyledAnnouncementsContainer } from "../../../styles/Announcements.styled";
import { AnnouncementCard } from "../../AnnouncementCard";

export default function Announcements({
  announcements,
  handleUnfoldedAnnoucement,
}) {
  return (
    <StyledAnnouncementsContainer>
      {announcements.map((announcement) => {
        return (
          <AnnouncementCard
            announcement={announcement}
            handleUnfoldedAnnoucement={handleUnfoldedAnnoucement}
          />
        );
      })}
    </StyledAnnouncementsContainer>
  );
}
