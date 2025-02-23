import { Card } from "react-bootstrap";
import "../components/css/petcard.css";
import { Link } from "react-router-dom";

export function PetCard({ pet }) {
    return (
        <Card>
            <Card.Img variant="top" src={`img/${pet.image}`} alt={pet.name} />
            <Card.Body>
                <Card.Title>{pet.name} ({pet.breed})</Card.Title>
                <p>{pet.description}</p>
            </Card.Body>
            <Card.Footer>
                <Link to={`/adoptions/${pet.id}`} className="btn btn-primary ml-2">Adopt Me</Link>
                <Link to={`/details/${pet.id}`} className="btn btn-secondary ml-2">Details</Link>
            </Card.Footer>
        </Card>
    );
}
