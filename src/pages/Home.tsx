import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ComponentContainer from "../components/ComponentContainer";

function Home(): JSX.Element {
  const navigate = useNavigate();

  return (
    <ComponentContainer>
      <Button text="Search Flickr" onClick={() => navigate("/ImageSearch")} />
    </ComponentContainer>
  );
}

export default Home;
