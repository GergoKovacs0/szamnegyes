import React, { useEffect, useState } from "react";
import Negyes from "../types/Negyes";
import { Card, Container } from "react-bootstrap";

const Negyesek: React.FC = () => {
  const [negyesek, setNegyesek] = useState<Negyes[]>([]);

  useEffect(() => {
    fetch("/fours")
      .then((res) => res.json())
      .then((data) => setNegyesek(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h1>Negyesek</h1>
      <ul>
        {negyesek.map((negyes) => (
          <Card>
            <Card.Body>
              <Card.Title>{negyes.szamok}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Card.Link href={`/negyesek/${negyes.id}`}>Megtekintés</Card.Link>
            </Card.Footer>
          </Card>
        ))}
      </ul>
    </Container>
  );
};

export default Negyesek;
