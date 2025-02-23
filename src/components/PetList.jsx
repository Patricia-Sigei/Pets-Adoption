import { useEffect, useState } from "react";
import { getPets } from "../services/petService";  // Ensure this is correctly imported
import { Col, Row } from "react-bootstrap";
import { PetCard } from "./PetCard";

export function PetList() {
    const [pets, setPets] = useState([]); 

    useEffect(() => {
        getPets().then((data) => setPets(data));
    }, []);

    return (
        <div className="PetList">
            <Row>
                {pets.map((pet) => (
                    <Col lg={4} key={pet.id}> {/* Added key to prevent React warnings */}
                        <PetCard pet={pet} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
