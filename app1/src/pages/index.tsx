import { MicroAppLink, Link } from '@umijs/max';

export default function HomePage() {
  return (
    <div>
      <h2>子应用1</h2>
      <MicroAppLink name="app2" to="/">
        跳转到子应用2，链接不对
      </MicroAppLink>
      <br />
      <Link to="/docs">跳转到当前子应用内文档</Link>
    </div>
  );
}
