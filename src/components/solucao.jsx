import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Solucao() {
  const navigate = useNavigate();
  useEffect(() => {

    window.open("https://www.mulheresconnectadas.com.br/category/solucao/");
    navigate("/");
  }, []);
  return (
    <>
      
    </>
  );
}
