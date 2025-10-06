export default function UnderConstruction() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        color: '#1e293b',
        fontFamily: 'sans-serif',
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e42"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginBottom: 24 }}
      >
        <path d="M3 21h18" />
        <path d="M9 8v4" />
        <path d="M15 8v4" />
        <rect x="4" y="4" width="16" height="12" rx="2" />
      </svg>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Under Construction</h1>
      <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
        This page is currently being built. Please check back soon!
      </p>
    </div>
  );
}
