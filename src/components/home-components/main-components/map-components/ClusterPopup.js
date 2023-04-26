import parse from "html-react-parser";
import { StyledClusterPopupContainer } from "../../../../styles/Popup.styled";
import ReactDOMServer from "react-dom/server";

export default function ClusterPopup({ a }) {
  return (
    <StyledClusterPopupContainer>
      {a.layer.getAllChildMarkers().map((marker) => {
        return parse(marker._popup._content);
      })}
    </StyledClusterPopupContainer>
  );
}
