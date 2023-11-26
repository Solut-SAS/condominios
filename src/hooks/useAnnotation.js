import { useContext } from "react";
import {AnnotationsContext}  from "../context/Contexts";

export function useAnnotation() {
  const { itemsSelected, setItemsSelected, setAnnotationContent } =
    useContext(AnnotationsContext);

  const removeItem = (item) => {
    const current = itemsSelected.filter((s) => s.id !== item.id);
    setItemsSelected(current);
  };

  const updateItems = (item, replace = false, prevValues = true) => {
    setItemsSelected((prevSelected) =>
      prevValues ? (replace ? [item] : [...prevSelected, item]) : item
    );
  };

  const exists = (item) => {
    return itemsSelected?.filter((sel) => sel.id == item.id).length;
  };

  const updateContentAnnotation = (annotation) => {
    setAnnotationContent(annotation);
  };

  return {
    itemsSelected,
    removeItem,
    updateItems,
    exists,
    updateContentAnnotation,
  };
}
