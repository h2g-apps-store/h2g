import "./globals.css";

export const metadata = {
  title: "herman | geku",
  description:
    "Hi, I'm Herman GEKU, a freelance frontend web developer. I specialize in branding, user interface (UI) and user experience (UX) design. I help companies develop their online and offline identity by creating visually appealing and user-friendly websites and web applications.",
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
      </body>
    </html>
  );
}
