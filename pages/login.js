import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login: langsung redirect
    router.push('/dashboard');
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login Demo - Dheny Hospital</h1>
      <p><strong>Username:</strong> demo</p>
      <p><strong>Password:</strong> demo123</p>
      <p style={{ color: 'red' }}>(Login form hanya demo, tidak memproses data)</p>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <input type="text" placeholder="Username" required style={{ padding: 8, width: 200 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input type="password" placeholder="Password" required style={{ padding: 8, width: 200 }} />
        </div>
        <button type="submit" style={{ padding: 10, background: '#0070f3', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>
    </div>
  );
}
