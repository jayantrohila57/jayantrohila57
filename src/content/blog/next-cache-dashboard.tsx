import { BlogPre, BlogProse } from "@/components/blog/blog-prose";

export function NextCacheDashboardPost() {
  return (
    <BlogProse>
      <p>
        This post is a <strong>pattern guide</strong>, not a story about a
        specific production dashboard I operate. It describes how I would mix
        Next.js Cache Components on an overview page where different regions
        need different freshness — static chrome, KPIs that can lag a few
        minutes per organization, charts that can lag longer, and an activity
        feed that should stay dynamic.
      </p>
      <p>
        Next.js 16’s model assumes dynamic data by default. You opt regions into
        caching with the <code>'use cache'</code> directive and shape
        lifetime with <code>cacheLife</code>, tags with <code>cacheTag</code>,
        and targeted invalidation with <code>updateTag</code> from Server
        Actions. Imports for those helpers come from{" "}
        <code>next/cache</code> per the current docs.
      </p>

      <h2>Freshness per region</h2>
      <p>
        A useful first step is a table of what the user sees versus how stale it
        can be:
      </p>
      <ul>
        <li>
          <strong>Shell</strong> — navigation, layout chrome, empty skeleton
          shapes: static or long-lived cache.
        </li>
        <li>
          <strong>KPI tiles</strong> — numbers per organization: cache on the
          order of minutes; tag by <code>orgId</code>.
        </li>
        <li>
          <strong>Charts</strong> — aggregated series: cache for hours; separate
          tags from KPIs so a chart refresh does not flush tiles unnecessarily.
        </li>
        <li>
          <strong>Activity feed</strong> — recent events: dynamic (no cache) or
          very short lifetime; always tenant-scoped at fetch time.
        </li>
      </ul>
      <p>
        The page shell can render immediately from cache while Suspense
        boundaries stream in heavier regions.
      </p>

      <h2>Cached KPI fetch (tenant-safe)</h2>
      <p>
        Cached functions must not read cookies or headers inside the cached
        scope — that would pin the cache to a single user or explode entries.
        Pass <code>orgId</code> (or another tenant key) as an explicit argument
        from a parent that already resolved the session.
      </p>
      <BlogPre>
        {`import { cacheLife, cacheTag } from "next/cache";

export async function getKpiOverview(orgId: string) {
  "use cache";
  cacheLife("minutes");
  cacheTag("dashboard-kpis", \`org-\${orgId}\`);

  // Fetch using orgId — do not call cookies() here
  const res = await fetch(
    \`https://api.example.com/orgs/\${orgId}/kpis\`,
    { next: { tags: [\`org-\${orgId}-kpis\`] } },
  );
  return res.json();
}`}
      </BlogPre>
      <p>
        Enable Cache Components in <code>next.config</code> when you adopt this
        model (<code>cacheComponents: true</code> in the Next.js 16 config
        docs). Without that flag, reach for the older caching APIs instead of
        copying the directive verbatim.
      </p>

      <h2>Invalidation after a write</h2>
      <p>
        When a user updates something that affects KPIs, a Server Action can call{" "}
        <code>updateTag</code> so the next navigation sees fresh data (read-your-own-writes).
        <code>updateTag</code> is only valid inside Server Actions; Route Handlers
        should use <code>revalidateTag</code> instead.
      </p>
      <BlogPre>
        {`"use server";

import { updateTag } from "next/cache";

export async function adjustQuota(orgId: string, value: number) {
  await db.quota.update({ where: { orgId }, data: { value } });
  updateTag(\`org-\${orgId}\`);
}`}
      </BlogPre>

      <h2>UI composition</h2>
      <p>
        Wrap each cached region in a Suspense boundary with a skeleton fallback
        that matches the shell grid so layout does not jump.
        Show a subtle “Updated X ago” label from the cached payload’s timestamp
        if the API returns one — avoid implying real-time precision when the
        cache lifetime is minutes or hours.
      </p>
      <p>
        Pair each widget with an error boundary so one failed chart does not
        blank the whole overview. The feed stays outside long-lived cache
        unless you are comfortable showing stale events; I usually keep it
        dynamic and scoped per org at request time.
      </p>

      <h2>What I would verify in a spike</h2>
      <ul>
        <li>Cache keys change when orgId changes — no cross-tenant leakage.</li>
        <li>Mutations call the right tags; KPI and chart tags are not overly broad.</li>
        <li>Loading and error states match the shell padding rules on real devices.</li>
        <li>Documentation matches the installed Next.js minor version.</li>
      </ul>
      <p>
        Cache Components are a way to declare intent in the component tree
        instead of sprinkling <code>revalidate</code> constants on every route
        segment. The dashboard table above is the map; <code>use cache</code>,{" "}
        <code>cacheLife</code>, and <code>cacheTag</code> are the levers.
      </p>
    </BlogProse>
  );
}
