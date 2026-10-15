import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

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
    icon: "/dolce/favicon-picole-verde.png",
    shortcut: "/dolce/favicon-picole-verde.png",
    apple: "/dolce/favicon-picole-verde.png",
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
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
