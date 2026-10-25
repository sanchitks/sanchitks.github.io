"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(true);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (paused) {
      const t = setTimeout(() => setPaused(false), 1800);
      return () => clearTimeout(t);
    }

    const word = words[index];
    const t = setTimeout(() => {
      if (deleting) {
        if (text.length === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        } else {
          setText(text.slice(0, -1));
        }
      } else {
        const next = words[index].slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setDeleting(true);
          setPaused(true);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, deleting, paused, index, words]);

  return (
    <span className="typewriter" aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
