import {
  personStructuredData,
  profilePageStructuredData,
  websiteStructuredData,
} from "@/lib/structured-data";

export function RootJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personStructuredData() }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteStructuredData() }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: profilePageStructuredData() }}
      />
    </>
  );
}
