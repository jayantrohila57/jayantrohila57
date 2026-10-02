import {
  DocsBody,
  DocsPage,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/components/mdx";
import { DocHero } from "@/components/kb/doc-hero";
import { KbDocFooter } from "@/components/kb/kb-doc-footer";
import { KbMobileToc } from "@/components/kb/kb-mobile-toc";
import { KbPageView } from "@/components/kb/kb-page-view";
import { KbToolbar } from "@/components/kb/kb-toolbar";
import { getAbsoluteUrl } from "@/config/site";
import { getPageNeighbours } from "@/lib/kb/neighbours";
import {
  buildBreadcrumbs,
  getKbSection,
  isArchiveSection,
} from "@/lib/kb/page-context";
import { getPageImageUrl, getPageMarkdownUrl, gitConfig } from "@/lib/shared";
import { source } from "@/lib/source";

export default async function Page(props: PageProps<"/[...slug]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;
  const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`;
  const section = getKbSection(params.slug);
  const breadcrumbs = buildBreadcrumbs(params.slug, page.data.title);
  const neighbours = getPageNeighbours(source, page);
  const metaTags: string[] = [];
  if (section === "work") metaTags.push("Projects & evidence");
  if (section === "career") metaTags.push("Timeline sourced");
  if (isArchiveSection(params.slug)) metaTags.push("Archive");

  return (
    <DocsPage
      toc={page.data.toc}
      breadcrumb={{ enabled: false }}
      tableOfContent={{
        enabled: true,
        style: "normal",
        header: (
          <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
            On this page
          </p>
        ),
      }}
      footer={{
        enabled: true,
        component: (
          <KbDocFooter
            previous={neighbours.previous}
            next={neighbours.next}
          />
        ),
      }}
      className="kb-article"
    >
      <DocHero
        section={section}
        breadcrumbs={breadcrumbs}
        title={page.data.title}
        description={page.data.description}
        meta={metaTags.length > 0 ? metaTags : undefined}
        archive={isArchiveSection(params.slug)}
      />
      <KbMobileToc toc={page.data.toc} />
      <KbToolbar markdownUrl={markdownUrl} githubUrl={githubUrl} />
      <KbPageView slug={params.slug} />
      <DocsBody className="kb-prose max-w-[min(100%,70ch)]">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams().filter((param) => param.slug.length > 0);
}

export async function generateMetadata(
  props: PageProps<"/[...slug]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const path = `/${params.slug.join("/")}`;
  const imageUrl = getPageImageUrl(page).url;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: getAbsoluteUrl(path),
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: getAbsoluteUrl(path),
      images: imageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: imageUrl,
    },
  };
}
