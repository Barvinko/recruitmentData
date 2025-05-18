import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import type { RecruitmentExample as RecruitmentExampleType } from "../types";

interface RecruitmentExampleProps {
  example: RecruitmentExampleType;
}

const RecruitmentExample: React.FC<RecruitmentExampleProps> = ({ example }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="recruitment-example">
      <div className="recruitment-example__header">
        <h3 className="recruitment-example__title">{example.title}</h3>
        <CopyToClipboard text={example.text} onCopy={handleCopy}>
          <button className="recruitment-example__copy-btn">
            <FaCopy className="recruitment-example__copy-btn-icon" />
            Copy Text
          </button>
        </CopyToClipboard>
      </div>
      <div className="recruitment-example__content">
        <div className="recruitment-example__text">{example.text}</div>
        {example.image && (
          <div className="recruitment-example__image-container">
            <img
              src={example.image}
              alt={example.title}
              className="recruitment-example__image"
            />
          </div>
        )}
      </div>
      {copied && (
        <div className="recruitment-example__copy-success">
          Text copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default RecruitmentExample;
