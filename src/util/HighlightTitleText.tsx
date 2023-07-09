/* eslint-disable */ 
import styles from "./HighlightTitleText.module.css"

export const HighlightTitleText = (title: string, highlightedText: string) => {
    const parts = title.split(new RegExp(`(${highlightedText})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightedText.toLowerCase() ? (
            <span key={index} className={styles.highlight}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };   