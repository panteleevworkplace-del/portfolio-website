export function GridBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: 'calc(100% / 12) 100%',
      }}
    />
  );
}
