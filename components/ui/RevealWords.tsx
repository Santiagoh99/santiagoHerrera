// Splits a heading into words that rise from a mask as the heading scrolls
// into view (CSS scroll-driven animation in globals.css). Visible by default:
// browsers without view timelines, and reduced motion, just show the text.
export default function RevealWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            {i > 0 && " "}
            <span className="reveal-mask">
              <span className="reveal-word" style={{ "--i": i } as React.CSSProperties}>
                {word}
              </span>
            </span>
          </span>
        ))}
      </span>
    </>
  );
}
