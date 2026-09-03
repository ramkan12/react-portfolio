const SectionLabel = ({ index, title, id }) => {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-term-amber">
        {`// ${index}. ${id}`}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-term-text sm:text-4xl">{title}</h2>
    </div>
  );
};

export default SectionLabel;
