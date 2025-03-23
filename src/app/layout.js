import "./styles/globals.css";
import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
