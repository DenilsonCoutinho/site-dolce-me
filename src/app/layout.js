import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";

// A URL pública fixa evita que previews sociais apontem para URLs temporárias
// de deploy durante o build da Vercel.
const siteUrl = new URL("https://www.dolcemebrigadeiria.com.br");

export const metadata = {
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Descomplicando Picolés | Curso de Picolés Gourmet",
    template: "%s | Descomplicando Picolés",
  },
  description: "Aprenda a criar picolés cremosos, recheados e cobertos com chocolate, mesmo começando do zero.",
  icons: {
    icon: [{ url: "/dolce/favicon-picole-verde-v2.png", type: "image/png", sizes: "256x256" }],
    shortcut: "/dolce/favicon-picole-verde-v2.png",
    apple: "/dolce/favicon-picole-verde-v2.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Descomplicando Picolés",
    url: "/",
    title: "Descomplicando Picolés | Curso de Picolés Gourmet",
    description: "Aprenda técnicas para criar picolés cremosos, recheados e cobertos com chocolate, mesmo começando do zero.",
    images: [{
      url: "/dolce/preview-descomplicando-picoles-v3.png",
      width: 1200,
      height: 630,
      alt: "Descomplicando Picolés, curso de picolés gourmet",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Descomplicando Picolés | Curso de Picolés Gourmet",
    description: "Aprenda técnicas para criar picolés cremosos, recheados e cobertos com chocolate.",
    images: ["/dolce/preview-descomplicando-picoles-v3.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yybqpgh5qd");`}
        </Script>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
