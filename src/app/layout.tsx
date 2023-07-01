import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "herman | geku",
  description:
    "Salut 👋🏾, Je suis Herman Geku.  Je suis Développeur full stack  passionné et créatif. Je donne vie aux idées à travers le code en créant des Site Web 👨🏽‍💻 Application Mobile 📱 attrayants et fonctionnels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="p-0 m-0" id="root">
        {children}
        <Footer />
      </body>
    </html>
  );
}
