import { useId } from "react";

export function Stats() {
  const headingId = useId();

  const items = [
    { label: "Students", value: "10k+" },
    { label: "Awards Won", value: "20+" },
    { label: "Staff Members", value: "5k+" },
    { label: "Campuses", value: "100+" },
  ];

  return (
    <section
      id="stats"
      aria-labelledby={headingId}
      className="bg-primary text-primary-foreground py-12 border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id={headingId} className="sr-only">
          Organization statistics
        </h2>

        <dl
          role="list"
          className="
            grid grid-cols-2 md:grid-cols-4 
            gap-8 
            text-center
            divide-y divide-white/10
            md:divide-y-0 md:divide-x
          "
        >
          {items.map((stat) => (
            <div key={stat.label} className="p-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className="
                  text-3xl md:text-4xl 
                  font-display font-bold 
                  text-secondary 
                  mb-1
                "
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </dd>
              <p className="text-sm font-medium opacity-70 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}