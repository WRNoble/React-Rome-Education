import React from "react";
import Poster from "../components/Poster";

function HomePage(props) {
  return (
    <div>
      <Poster
        title={props.title}
        text={props.text}
        subtext={props.subtext}
        subtexttwo={props.subtexttwo}
      />
    </div>
  );
}

export default HomePage;
