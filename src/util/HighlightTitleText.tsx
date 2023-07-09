import styles from './HighlightTitleText.module.css';

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
