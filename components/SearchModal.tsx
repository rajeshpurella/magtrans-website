"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, Briefcase, Layers } from "lucide-react";
import { searchSearchIndex, type SearchResultItem, type SearchResultType } from "@/lib/search-index";

const DEBOUNCE_MS = 200;
const ease = [0.4, 0, 0.2, 1];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function IconForType({ type }: { type: SearchResultType }) {
  switch (type) {
    case "product":
      return <Layers className="w-4 h-4 text-emerald-600 shrink-0" />;
    case "industry":
      return <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />;
    default:
      return <FileText className="w-4 h-4 text-zinc-500 shrink-0" />;
  }
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runSearch = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }
    setIsSearching(true);
    const items = searchSearchIndex(q);
    setResults(items.slice(0, 12));
    setSelectedIndex(0);
    setIsSearching(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    setQuery("");
    setResults([]);
    setSelectedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }
    debounceRef.current = setTimeout(() => runSearch(query), DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, runSearch]);

  useEffect(() => {
    if (selectedIndex < 0) setSelectedIndex(0);
    if (results.length && selectedIndex >= results.length)
      setSelectedIndex(results.length - 1);
    listRef.current
      ?.querySelector(`[data-index="${selectedIndex}"]`)
      ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [selectedIndex, results.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (results.length)
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (results.length) setSelectedIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      const item = results[selectedIndex];
      onClose();
      router.push(item.href);
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    router.push(item.href);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease }}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label="Search"
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease }}
          className="max-w-xl mx-auto mt-[15vh] bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200">
            <Search className="w-5 h-5 text-zinc-400 shrink-0" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search products, industries, pages…"
              className="flex-1 min-w-0 py-2 text-zinc-900 placeholder-zinc-400 focus:outline-none text-base"
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls="search-results"
              aria-activedescendant={
                results[selectedIndex]
                  ? `search-result-${selectedIndex}`
                  : undefined
              }
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-500 hover:text-zinc-900 rounded-lg transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            id="search-results"
            ref={listRef}
            className="max-h-[50vh] overflow-y-auto"
          >
            {isSearching && (
              <div className="px-4 py-8 text-center text-zinc-500 text-sm">
                Searching…
              </div>
            )}
            {!isSearching && query.trim() && results.length === 0 && (
              <div className="px-4 py-8 text-center text-zinc-500 text-sm">
                No results for &quot;{query}&quot;
              </div>
            )}
            {!isSearching && results.length > 0 && (
              <ul className="py-2" role="listbox">
                {results.map((item, index) => (
                  <li key={item.id} role="option" aria-selected={index === selectedIndex}>
                    <Link
                      href={item.href}
                      data-index={index}
                      id={`search-result-${index}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelect(item);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        index === selectedIndex
                          ? "bg-emerald-50 text-emerald-900"
                          : "bg-white text-zinc-900 hover:bg-zinc-50"
                      }`}
                    >
                      <IconForType type={item.type} />
                      <div className="min-w-0 flex-1">
                        <span className="font-medium block truncate">
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span className="text-sm text-zinc-500 truncate block">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
