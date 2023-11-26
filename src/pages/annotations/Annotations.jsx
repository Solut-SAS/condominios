import { useState, useEffect } from "react";
import {
  SearchComponent,
  InputArea,
  SelectedElements,
  RecurrentAnnotations,
} from "../../components/annotations";
import { AnnotationsContext } from "../../context/Contexts";
import { annotationComponent, contentAnnotations } from "./styles";

function Annotations() {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [annotationContent, setAnnotationContent] = useState("");
  const annotationContext = {
    itemsSelected,
    setItemsSelected,
    annotationContent,
    setAnnotationContent,
  };

  useEffect(() => {
    itemsSelected.length == 0 && setAnnotationContent("");
  }, [itemsSelected]);

  return (
    <AnnotationsContext.Provider value={annotationContext}>
      <div className={contentAnnotations}>
        <div className={annotationComponent}>
          <SearchComponent />
          <InputArea />
          <SelectedElements />
        </div>
        <div className={annotationComponent}>
          <RecurrentAnnotations />
        </div>
      </div>
    </AnnotationsContext.Provider>
  );
}

export default Annotations;
