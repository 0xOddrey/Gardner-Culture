function PolicyBlock({ block }) {
  if (Array.isArray(block)) {
    return (
      <ul>
        {block.map((item, index) => (
          <li key={`${index}-${String(item).slice(0, 24)}`}>
            {Array.isArray(item) ? <PolicyBlock block={item} /> : item}
          </li>
        ))}
      </ul>
    );
  }

  return <p>{block}</p>;
}

export default function PolicySection({ number, title, blocks }) {
  return (
    <section className="policy-section">
      <div className="section-heading">
        <span>{String(number).padStart(2, "0")}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-content">
        {blocks.map((block, index) => (
          <PolicyBlock block={block} key={`${index}-${String(block).slice(0, 24)}`} />
        ))}
      </div>
    </section>
  );
}
