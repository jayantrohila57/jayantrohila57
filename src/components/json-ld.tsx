import {
  personStructuredData,
  profilePageStructuredData,
  websiteStructuredData,
} from "@/lib/structured-data";

export function RootJsonLd() {
  const graph = [
    JSON.parse(personStructuredData()),
    JSON.parse(websiteStructuredData()),
    JSON.parse(profilePageStructuredData()),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
