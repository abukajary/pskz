import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 90px 140px;
  margin-left: 60px;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

const Links = styled.div`
  display: flex;
  column-gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>© 2003–2023 ТОО «Интернет-компания PS»</p>
      <Links>
        <a href="#">Контакты</a>
        <a href="#">Правила использования</a>
        <a href="#">Публичная оферта</a>
        <a href="#">Политика конфиденциальности</a>
      </Links>
    </FooterWrapper>
  );
};
export default Footer;
