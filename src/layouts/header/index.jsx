import { headerContainer } from "./header-styles";

export default function Header() {
  return (
    <div className={headerContainer}>
      <a className="mx-10" href="">
        Inicio
      </a>
      <a className="mx-10" href="">
        Precios
      </a>
      <a className="mx-10" href="">
        A cerca
      </a>
    </div>
  );
}
