"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq";
import { Reveal } from "./motion/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kalma-action">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-display mt-4 text-balance text-4xl font-bold text-kalma-deep sm:text-5xl"
            >
              Panic attack app questions, answered
            </h2>
            <p className="mt-4 text-lg text-kalma-muted">
              Common questions about Kalma, anxiety relief, and how we compare
              to other mental health apps.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-kalma-border/60">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <div className="py-5">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span className="text-lg font-semibold text-kalma-deep">
                      {item.question}
                    </span>
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-kalma-surface text-kalma-action"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="mt-3 text-base leading-relaxed text-kalma-muted"
                  >
                    {item.answer}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
