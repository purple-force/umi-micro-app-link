import { Link } from '@umijs/max';

export default function HomePage() {
  return (
    <div>
      <h2>主应用</h2>
      <Link to="/123/app1">跳转到子应用1</Link>
    </div>
  );
}
