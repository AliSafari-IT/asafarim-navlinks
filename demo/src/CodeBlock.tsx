import React, { useState, useEffect, useRef } from 'react';

// Type definition for highlight.js
declare global {
  interface Window {
    hljs: {
      highlightElement: (element: HTMLElement) => void;
      configure: (options: { languages: string[], ignoreUnescapedHTML: boolean }) => void;
    };
  }
}

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Apply syntax highlighting when the component mounts or code changes
    if (codeRef.current && window.hljs) {
      window.hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-highlight-container">
      <div className="code-header">
        <span className="language-badge">{language}</span>
        <button 
          className="copy-button"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i> {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
