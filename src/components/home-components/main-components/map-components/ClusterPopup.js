import parse from "html-react-parser";
import ReactDOMServer from "react-dom/server";

export default function ClusterPopup({ a }) {
  return a.layer.getAllChildMarkers().map((marker) => {
    return parse(marker._popup._content);
  });
}
