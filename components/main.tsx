import * as React from "react";
import { StyledView, StyledText } from "./../utils/styles";

export default function Main() {
  return (
    <StyledView
      classes={["flex:1", "bg:purple-100", "justify:center", "items:center"]}
      darkClasses={["bg:purple-800"]}
    >
      <StyledText
        classes={["text:5xl", "color:gray-800"]}
        darkClasses={["color:gray-100"]}
      >
        Hey world
      </StyledText>
    </StyledView>
  );
}
