import React, { Component } from "react";

class Belt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Classes: [
        {
          id: 0,
          imgSrc: Carthage,
          title: "Rome in the Punic Wars",
          subtitle:
            "Learn about the three Punic Wars waged between Rome and Carthage that would set Rome on the road to empire.",
          length: "10 lectures",
        },
        {
          id: 1,
          imgSrc: Senate,
          title: "Roman Government",
          subtitle:
            "Dive into the Roman government, its institutions and traditions which would come to lay the foundation of the modern political thought of the West.",
          length: "8 lectures",
        },
      ],
    };
  }
}

export default Belt;
