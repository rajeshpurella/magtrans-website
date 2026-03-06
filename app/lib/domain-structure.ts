import { productDomains } from "@/lib/products-data";

export interface DomainNode {
  title: string;
  slug: string;
  children?: DomainNode[];
}

function mapDomain(node: { title: string; slug: string; children?: any[] }): DomainNode {
  return {
    title: node.title,
    slug: node.slug,
    children: node.children?.map(mapDomain),
  };
}

/**
 * Engineering domain hierarchy used for navigation trees.
 * Built from the existing productDomains data so that
 * categories and slugs stay in sync with product logic.
 * Supports arbitrary nesting depth via mapDomain.
 */
export const engineeringDomains: DomainNode[] = productDomains.map(mapDomain);


