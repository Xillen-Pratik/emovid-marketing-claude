import React, { useEffect, useRef, useState } from 'react';

const sentences = [
  {
    text: 'Recorded, bi-directional, secure video/audio communication for business.',
    boldWords: ['Recorded'],
  },
  {
    text: 'Fast, clear, human communication at scale.',
    boldWords: [],
  },
  {
    base: 'Works with your current business: ',
    variants: ['email apps.', 'office apps.', 'crm apps.', 'marketing apps.'],
    final: 'LinkedIn, TXT, WhatsApp.',
    boldWords: [],
  },
  {
    text: 'No installs, downloads or recipient signups.',
    boldWords: [],
  },
];

export default function TypewriterText({ className = '' }) {
  const typingRef = useRef(null);
  const cursorRef = useRef(null);
  const stateRef = useRef({
    currentSentenceIndex: 0,
    currentCharIndex: 0,
    currentVariantIndex: 0,
    isDeleting: false,
    isPartialDeleting: false,
    cursorShown: false,
  });

  useEffect(() => {
    const typingElement = typingRef.current;
    const cursorElement = cursorRef.current;
    if (!typingElement) return;

    const s = stateRef.current;
    const typingSpeed = 80;
    const deletingSpeed = 20;
    const pauseAfterTyping = 1000;
    const pauseAfterDeleting = 500;

    let timeoutId = null;
    let mounted = true;

    function getBoldRanges(text) {
      const currentSentence = sentences[s.currentSentenceIndex];
      let boldWords = [];

      if (typeof currentSentence === 'object' && currentSentence.text) {
        boldWords = currentSentence.boldWords || [];
      } else if (typeof currentSentence === 'object' && currentSentence.base) {
        boldWords = currentSentence.boldWords || [];
      }
      if (boldWords.length === 0) return [];

      const ranges = [];
      boldWords.forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        let match;
        while ((match = regex.exec(text)) !== null) {
          ranges.push({
            start: match.index,
            end: match.index + word.length,
            word: word,
          });
        }
      });
      return ranges;
    }

    function applyBoldFormatting(text) {
      const fullText = getCurrentText();
      const boldRanges = getBoldRanges(fullText);

      if (boldRanges.length === 0) return text;

      let result = '';
      let lastIndex = 0;

      boldRanges.forEach((range) => {
        if (text.length > range.start) {
          result += text.substring(lastIndex, range.start);
          const boldEnd = Math.min(range.end, text.length);
          const boldText = text.substring(range.start, boldEnd);
          result += `<span class="bold-word" style="font-weight:700">${boldText}</span>`;
          lastIndex = boldEnd;
        }
      });

      result += text.substring(lastIndex);
      return result;
    }

    function getCurrentText() {
      const currentSentence = sentences[s.currentSentenceIndex];

      if (typeof currentSentence === 'object' && currentSentence.base) {
        if (s.currentVariantIndex === -1) {
          return 'Works with ' + currentSentence.final;
        }
        const variant = currentSentence.variants[s.currentVariantIndex];
        const isMobile = window.innerWidth <= 768;
        const separator = isMobile ? '<br>' : '';
        return currentSentence.base + separator + variant;
      }
      return currentSentence.text;
    }

    function getBaseText() {
      const currentSentence = sentences[s.currentSentenceIndex];
      if (typeof currentSentence === 'object' && currentSentence.base) {
        if (s.currentVariantIndex === -1) {
          return 'Works with ';
        }
        if (
          s.currentVariantIndex === currentSentence.variants.length - 1 &&
          s.isPartialDeleting
        ) {
          return 'Works with ';
        }
        const isMobile = window.innerWidth <= 768;
        const separator = isMobile ? '<br>' : '';
        return currentSentence.base + separator;
      }
      return '';
    }

    function updateText(text) {
      if (!mounted) return;
      typingElement.innerHTML = applyBoldFormatting(text);
    }

    function typeText() {
      if (!mounted) return;

      // Show cursor 3ms before first character appears
      if (
        cursorElement &&
        !s.cursorShown &&
        s.currentCharIndex === 0 &&
        !s.isDeleting &&
        !s.isPartialDeleting
      ) {
        s.cursorShown = true;
        setTimeout(() => {
          if (cursorElement && mounted) {
            cursorElement.style.display = 'inline-block';
          }
        }, Math.max(0, typingSpeed - 3));
      }

      const currentText = getCurrentText();
      const currentSentence = sentences[s.currentSentenceIndex];

      if (
        !s.isDeleting &&
        !s.isPartialDeleting &&
        s.currentCharIndex < currentText.length
      ) {
        if (
          currentText.substring(s.currentCharIndex, s.currentCharIndex + 4) ===
          '<br>'
        ) {
          s.currentCharIndex += 4;
          updateText(currentText.substring(0, s.currentCharIndex));
          timeoutId = setTimeout(typeText, 0);
        } else {
          updateText(currentText.substring(0, s.currentCharIndex + 1));
          s.currentCharIndex++;
          timeoutId = setTimeout(typeText, typingSpeed);
        }
      } else if (
        !s.isDeleting &&
        !s.isPartialDeleting &&
        s.currentCharIndex === currentText.length
      ) {
        timeoutId = setTimeout(() => {
          if (!mounted) return;
          if (typeof currentSentence === 'object' && currentSentence.base) {
            if (s.currentVariantIndex === -1) {
              s.isDeleting = true;
            } else if (
              s.currentVariantIndex <
              currentSentence.variants.length - 1
            ) {
              s.isPartialDeleting = true;
            } else {
              s.isPartialDeleting = true;
            }
          } else {
            s.isDeleting = true;
          }
          typeText();
        }, pauseAfterTyping);
      } else if (
        s.isPartialDeleting &&
        typeof currentSentence === 'object' &&
        currentSentence.base
      ) {
        const baseText = getBaseText();
        if (s.currentCharIndex > baseText.length) {
          const textBeforeCursor = currentText.substring(
            0,
            s.currentCharIndex
          );
          if (textBeforeCursor.endsWith('<br>')) {
            s.currentCharIndex -= 4;
            updateText(currentText.substring(0, s.currentCharIndex));
            timeoutId = setTimeout(typeText, 0);
          } else {
            updateText(currentText.substring(0, s.currentCharIndex - 1));
            s.currentCharIndex--;
            timeoutId = setTimeout(typeText, deletingSpeed);
          }
        } else {
          s.isPartialDeleting = false;
          if (
            s.currentVariantIndex ===
            currentSentence.variants.length - 1
          ) {
            s.currentVariantIndex = -1;
          } else {
            s.currentVariantIndex =
              (s.currentVariantIndex + 1) %
              currentSentence.variants.length;
          }
          timeoutId = setTimeout(typeText, pauseAfterDeleting);
        }
      } else if (s.isDeleting && s.currentCharIndex > 0) {
        updateText(currentText.substring(0, s.currentCharIndex - 1));
        s.currentCharIndex--;
        timeoutId = setTimeout(typeText, deletingSpeed);
      } else if (s.isDeleting && s.currentCharIndex === 0) {
        s.isDeleting = false;
        s.isPartialDeleting = false;
        s.currentSentenceIndex =
          (s.currentSentenceIndex + 1) % sentences.length;
        s.currentVariantIndex = 0;
        timeoutId = setTimeout(typeText, pauseAfterDeleting);
      }
    }

    typeText();

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span className={`typing-container ${className}`}>
      <span
        ref={typingRef}
        className="typing-text"
        id="banner-animated-text"
      />
      <span
        ref={cursorRef}
        className="banner-cursor"
        id="animated-cursor-text"
        style={{
          display: 'none',
          width: '2px',
          height: '1em',
          backgroundColor: 'white',
          marginLeft: '3px',
          verticalAlign: 'baseline',
          animation: 'blink 0.7s infinite',
        }}
      />
    </span>
  );
}
