import { useParams } from "react-router-dom";

export const Sklep = () => {
  const { id } = useParams(); 

  if (id) {
    return (
      <>
        <h1>Sklep</h1>
        <p>Podane id: {id}</p>
      </>
    );
  }

  return <h1>Sklep</h1>;
};