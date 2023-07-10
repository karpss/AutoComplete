import styles from './HighlightTitleText.module.css';

/* The title argument is split into an array of parts using the split method and a regular expression. The regular expression is constructed using the highlightedText argument and is used to split the title text at every occurrence of the highlightedText.
The resulting array of parts is mapped over using the map method. For each part, the function checks if it is equal to the highlightedText, ignoring case.
If the part is equal to the highlightedText, it is wrapped in a span element with a className of styles.highlight. This will apply the highlight style to the part. The resulting array of elements is returned as a React fragment. 

I have doubts on if this is an optimal solution and I have not really explored more suitable solutions due to time constraint.
*/

function HighlightTitleText(title: string, highlightedText: string) {
  // eslint-disable-next-line react/destructuring-assignment
  const parts = title.split(new RegExp(`(${highlightedText})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        // eslint-disable-next-line react/destructuring-assignment
        part.toLowerCase() === highlightedText.toLowerCase() ? (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export default HighlightTitleText;
