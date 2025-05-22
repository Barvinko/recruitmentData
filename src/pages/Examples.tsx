import React from "react";
import { Container } from "react-bootstrap";
import RecruitmentExample from "../components/RecruitmentExample";
import { recruitmentExamples } from "../data/recruitmentExamples";
import { FaCopy } from "react-icons/fa";

const Examples: React.FC = () => {
  return (
    <div className="page__container">
      <Container>
        <div className="page__content">
          <div className="examples__header">
            <h1 className="examples__title">Примеры</h1>
            <p className="examples__description">
              Ниже вы найдете различные шаблоны сообщений о наборе, которые вы
              можете использовать при обращении к потенциальным членам клана. Не
              стесняйтесь изменять эти примеры в соответствии с вашим личным
              стилем, но сохраняйте основную информацию нетронутой. Нажмите
              кнопку «<FaCopy className="recruitment-example__copy-btn-icon" />
              », чтобы скопировать сообщение в буфер обмена.
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
