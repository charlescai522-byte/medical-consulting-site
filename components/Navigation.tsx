
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderBottom: '1px solid #eee',
      }}
    >
      <div style={{ letterSpacing: '3px' }}>
        MEDICAL
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
