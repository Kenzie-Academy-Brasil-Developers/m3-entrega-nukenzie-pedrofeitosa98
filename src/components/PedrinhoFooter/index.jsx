import { Footer } from "./style";
import { FaHeart } from "react-icons/fa";

export default function PedrinhoFooter() {
  return (
    <>
      <Footer className="fadeIn">
        <h4>
          Desenvolvido com{" "}
          <span className="heart">
            {" "}
            <FaHeart />{" "}
          </span>
          por <strong>Pedro Feitosa</strong>
        </h4>
        <p>
          Este é um <strong>projeto de estudo</strong>, todos os direitos
          reservados à <strong>Kenzie Academy Brasil</strong>.
        </p>
      </Footer>
    </>
  );
}
