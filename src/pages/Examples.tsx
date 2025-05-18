import React from "react";
import { Container } from "react-bootstrap";
import RecruitmentExample from "../components/RecruitmentExample";
import { recruitmentExamples } from "../data/recruitmentExamples";

const Examples: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="examples__header">
            <h1 className="examples__title">Recruitment Examples</h1>
            <p className="examples__description">
              Below you'll find various recruitment message templates that you
              can use when reaching out to potential clan members. Feel free to
              modify these examples to fit your personal style, but keep the
              core information intact. Click the "Copy Text" button to copy a
              message to your clipboard.
            </p>
          </div>

          {recruitmentExamples.map((example) => (
            <RecruitmentExample key={example.id} example={example} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Examples;
