/* eslint-disable */ 

export const HighlightTitleText = (title: string, highlightedText: string) => {
    const parts = title.split(new RegExp(`(${highlightedText})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightedText.toLowerCase() ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };   