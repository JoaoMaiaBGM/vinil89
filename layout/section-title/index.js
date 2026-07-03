export function SectionTitle({ className, title }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className || ''}`}>
      {title && (
        <h2 className={`h1 section-title text-center text-vin-white ${className || ''}`}>
          {title}
        </h2>
      )}
      <div className="h-1 w-24 bg-linear-to-r from-vin-primary to-vin-blue-100 mx-auto mb-12" />
    </div>
  );
}
