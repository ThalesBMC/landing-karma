import Link from "next/link";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type { BlogPost } from "@/lib/blog/types";

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern =
    /(\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      nodes.push(
        <strong key={`${match.index}-bold`} className="font-semibold text-kalma-deep">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      nodes.push(
        <em key={`${match.index}-italic`}>{match[3]}</em>,
      );
    } else if (match[4] && match[5]) {
      const href = match[5];
      const isExternal = href.startsWith("http");
      nodes.push(
        isExternal ? (
          <a
            key={`${match.index}-link`}
            href={href}
            className="font-medium text-kalma-action underline decoration-kalma-action/30 underline-offset-2 transition-colors hover:text-kalma-deep"
            target="_blank"
            rel="noopener noreferrer"
          >
            {match[4]}
          </a>
        ) : (
          <Link
            key={`${match.index}-link`}
            href={href}
            className="font-medium text-kalma-action underline decoration-kalma-action/30 underline-offset-2 transition-colors hover:text-kalma-deep"
          >
            {match[4]}
          </Link>
        ),
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

function parseTable(lines: string[]) {
  const rows = lines
    .filter((line) => line.trim().startsWith("|"))
    .map((line) =>
      line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim()),
    );

  if (rows.length < 2) return null;

  const header = rows[0];
  const body = rows.slice(2);

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-kalma-border">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-kalma-surface">
          <tr>
            {header.map((cell, i) => (
              <th
                key={i}
                className="px-4 py-3 font-semibold text-kalma-deep"
              >
                {parseInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-kalma-border/60">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-kalma-muted">
                  {parseInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BlogContent({
  content,
  image,
}: {
  content: string;
  image?: BlogPost["image"];
}) {
  const blocks = content.trim().split(/\n\n+/);
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i].trim();

    if (block.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-display mt-12 text-2xl font-bold text-kalma-deep first:mt-0 sm:text-3xl"
        >
          {parseInline(block.slice(3))}
        </h2>,
      );
      i++;
      continue;
    }

    if (block.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="font-display mt-8 text-xl font-bold text-kalma-deep"
        >
          {parseInline(block.slice(4))}
        </h3>,
      );
      i++;
      continue;
    }

    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((line) => line.startsWith("- "));
      elements.push(
        <ul key={i} className="mt-4 list-none space-y-2">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex gap-3 text-base leading-relaxed text-kalma-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kalma-action" />
              <span>{parseInline(item.slice(2))}</span>
            </li>
          ))}
        </ul>,
      );
      i++;
      continue;
    }

    if (block.startsWith("|")) {
      const tableLines = [block];
      let j = i + 1;
      while (j < blocks.length && blocks[j].trim().startsWith("|")) {
        tableLines.push(blocks[j].trim());
        j++;
      }
      const table = parseTable(tableLines);
      if (table) elements.push(<Fragment key={i}>{table}</Fragment>);
      i = j;
      continue;
    }

    if (block === "---") {
      elements.push(
        <hr key={i} className="my-10 border-kalma-border/60" />,
      );
      i++;
      continue;
    }

    if (block.startsWith("*") && block.endsWith("*") && !block.startsWith("**")) {
      elements.push(
        <p key={i} className="mt-8 text-sm italic text-kalma-muted">
          {parseInline(block.slice(1, -1))}
        </p>,
      );
      i++;
      continue;
    }

    elements.push(
      <p key={i} className="mt-4 text-base leading-relaxed text-kalma-muted">
        {parseInline(block)}
      </p>,
    );
    i++;
  }

  return (
    <div className="blog-content">
      {image && (
        <figure className="mb-10 overflow-hidden rounded-2xl border border-kalma-border/70 bg-kalma-surface/50">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="mx-auto h-auto w-full max-w-lg p-8"
            priority
          />
          {image.caption && (
            <figcaption className="border-t border-kalma-border/60 px-5 py-3 text-center text-sm text-kalma-muted">
              {image.caption}
            </figcaption>
          )}
        </figure>
      )}
      {elements.length > 0 && (
        <div className="rounded-2xl border border-kalma-border/70 bg-kalma-surface/50 px-5 py-6 sm:px-8 sm:py-7">
          <div className="text-lg leading-relaxed text-kalma-deep/90 [&_p]:mt-0">
            {elements[0]}
          </div>
        </div>
      )}
      {elements.length > 1 && <div className="mt-10">{elements.slice(1)}</div>}
    </div>
  );
}
