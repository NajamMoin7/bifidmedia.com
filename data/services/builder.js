/**
 * Compact authoring helpers for service page content.
 *
 * Service specs are written as tuples to keep the data files readable; this
 * module expands them into the object shape every consumer uses — the Services
 * mega menu, the mobile accordion, category pages, related-service blocks and
 * the sitemap all read the same objects.
 */

const pair = (rows, aKey, bKey) =>
  (rows || []).map((row) =>
    Array.isArray(row) ? { [aKey]: row[0], [bKey]: row[1] } : row
  );

/** Derive search keywords from the service name and its capability group. */
function deriveKeywords(name, groupTitle) {
  const words = `${name} ${groupTitle}`
    .toLowerCase()
    .replace(/[^a-z0-9\s&-]/g, "")
    .split(/[\s&]+/)
    .filter((word) => word.length > 2);
  return [...new Set(words)];
}

/**
 * @param {string} categoryId  category slug — "amazon", "walmart", …, "business"
 * @param {string} pathPrefix  URL prefix for individual services, e.g. "/amazon"
 * @param {object[]} groups    capability groups owning the shared problem sets
 * @param {object[]} specs     per-service specs
 */
export function buildServices(categoryId, pathPrefix, groups, specs) {
  const groupById = Object.fromEntries(groups.map((g) => [g.id, g]));

  return specs.map((spec) => {
    const group = groupById[spec.category];
    if (!group) {
      throw new Error(
        `Unknown capability group "${spec.category}" for ${categoryId}/${spec.slug}`
      );
    }

    const href = `${pathPrefix}/${spec.slug}`;

    return {
      slug: spec.slug,
      href,

      /** Category this service belongs to (amazon, walmart, …, business). */
      categoryId,
      /** Capability group within the category. */
      group: spec.category,
      groupTitle: group.title,

      title: spec.name,
      shortDescription: spec.nav,
      description: spec.intro,
      keywords: deriveKeywords(spec.name, group.title),
      featured: Boolean(spec.badge),

      heading: spec.h1 || spec.name,
      intro: spec.intro,
      valueLine: spec.value,
      metaTitle: spec.metaTitle || `${spec.name} | BifidMedia`,
      metaDescription: spec.metaDescription || spec.nav,
      badge: spec.badge || null,

      offeringsHeading: spec.offeringsHeading || `What our ${spec.name} covers`,
      offerings: pair(spec.offerings, "title", "text"),
      problemsHeading: group.problemsHeading,
      problems: pair(group.problems, "problem", "solution"),
      faqs: pair(spec.faqs, "question", "answer"),

      // Retained aliases so existing components keep working unchanged.
      name: spec.name,
      navDescription: spec.nav,
      marketplace: categoryId,
      category: spec.category,
      categoryTitle: group.title,
    };
  });
}

/** Group services by their capability group, preserving the authored order. */
export function groupIndex(groups, services) {
  return groups.map((group) => ({
    id: group.id,
    title: group.title,
    description: group.description,
    services: services.filter((service) => service.group === group.id),
  }));
}

// Backwards-compatible alias.
export const categoryIndex = groupIndex;
