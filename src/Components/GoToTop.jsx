import { useLocation } from "react-router-dom";

export default function GoToTop() {
  const routePath = useLocation();
  const hash = routePath.hash;
  if (hash) {
    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: "smooth" });
    return null;
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return null;
}
