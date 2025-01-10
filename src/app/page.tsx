import Footer from "./(web)/footer/page";
import Header from "./(web)/header/header-menu";
import MenuBarPage from "./(web)/menuBar/page";
import "./globals.css";

function MainPage() {
  return (
    <div className="flex h-screen flex-col gap-10 text-2xl font-bold">
      <Header />
      <MenuBarPage />
      <Footer />
    </div>
  );
}

export default MainPage;

// export default function Home() {
//   return <div>Hello, worldsssss!</div>;
// }
