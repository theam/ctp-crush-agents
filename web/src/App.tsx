import './App.css'

function App() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', lineHeight: 1.5 }}>
      <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Welcome to Your App</h1>
        <p style={{ maxWidth: 720, margin: '1rem auto', color: '#555' }}>
          A fast, minimal landing page built with React + Vite. Craft your message, add a call to action, and ship.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          <a href="#get-started" style={{ background: '#111827', color: 'white', padding: '0.75rem 1rem', borderRadius: 8, textDecoration: 'none' }}>Get Started</a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1rem', borderRadius: 8, textDecoration: 'none', border: '1px solid #e5e7eb', color: '#111827' }}>Learn More</a>
        </div>
      </section>

      <section id="features" style={{ padding: '2rem 1rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[{
            title: 'Fast', desc: 'Vite-powered dev server and production builds.'
          }, {
            title: 'Type Safe', desc: 'TypeScript-first setup for reliability.'
          }, {
            title: 'Accessible', desc: 'Semantic markup and keyboard-friendly.'
          }, {
            title: 'Responsive', desc: 'Mobile-first layout that scales.'
          }].map((f) => (
            <div key={f.title} style={{ padding: '1rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: 12 }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{f.title}</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="get-started" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Ready to build?</h2>
        <p style={{ color: '#555', maxWidth: 700, margin: '0.75rem auto 1.5rem' }}>Edit src/App.tsx to customize your hero copy, features, and actions.</p>
        <a href="#" style={{ background: '#2563eb', color: 'white', padding: '0.75rem 1rem', borderRadius: 8, textDecoration: 'none' }}>Contact Us</a>
      </section>
    </main>
  )
}

export default App
