import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />

      <main style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '32px', letterSpacing: '4px' }}>
          MEDICAL CONSULTING
        </h1>

        <p style={{ marginTop: '20px', color: '#666' }}>
          Professional Medical Advisory Services
        </p>
      </main>
    </>
  );
}
