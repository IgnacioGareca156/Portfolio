interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, children, className = "", id }: SectionProps) {
  return (
    <section
      className={`py-20 ${className} fade-in-section`}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 text-shimmer fade-in-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
