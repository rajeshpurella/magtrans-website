import Link from "next/link";
import type { DomainNode } from "@/app/lib/domain-structure";

interface DomainTreeProps {
  nodes: DomainNode[];
  basePath?: string;
  parentSegments?: string[];
}

export default function DomainTree({
  nodes,
  basePath = "/products",
  parentSegments = [],
}: DomainTreeProps) {
  if (!nodes.length) return null;

  return (
    <nav aria-label="Engineering Domains">
      <ul className="space-y-3">
        {nodes.map((node) => {
          const segments = [...parentSegments, node.slug].filter(Boolean);
          const href = `${basePath}/${segments.join("/")}`;
          const hasChildren = !!node.children?.length;

          return (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center text-base font-medium text-zinc-900 hover:text-emerald-700 transition-colors"
              >
                {node.title}
              </Link>

              {hasChildren && (
                <div className="mt-2 ml-4 border-l border-zinc-200 pl-4">
                  <DomainTree
                    nodes={node.children!}
                    basePath={basePath}
                    parentSegments={segments}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

