export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="screen-container">
      <div id="content-container">{children}</div>
    </div>
  );
}
