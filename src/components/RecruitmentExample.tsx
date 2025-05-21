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
      <div className="recruitment-example__header"></div>
      <div className="recruitment-example__content">
        <div className="recruitment-example__text">
          {example.text.map((textRow, index) => (
            <div
              className={`recruitment-example__row ${!example.text[index].copy && "recruitment-example__row_answer"}`}
              key={index}
            >
              <p className="recruitment-example__row-text">{textRow.row}</p>
              {example.text[index].copy && (
                <CopyToClipboard
                  text={example.text[index].row}
                  onCopy={handleCopy}
                >
                  <button className="recruitment-example__copy-btn">
                    <FaCopy className="recruitment-example__copy-btn-icon" />
                  </button>
                </CopyToClipboard>
              )}
            </div>
          ))}
        </div>
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
