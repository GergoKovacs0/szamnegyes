import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Negyes from "../types/Negyes";
import { Button, Container } from "react-bootstrap";

const NegyesPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [negyes, setNegyes] = useState<Negyes>({} as Negyes);

  useEffect(() => {
    fetch(`/fours/${id}`)
      .then((res) => res.json())
      .then((data) => setNegyes(data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container>
      <Button onClick={() => navigate("/")}>Vissza</Button>
      <div>
        <h1>Negyes</h1>
        <p>{negyes.szamok}</p>
        <Button>Törlés</Button>
      </div>
    </Container>
  );
};

export default NegyesPage;
