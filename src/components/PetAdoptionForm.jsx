import { useEffect, useState } from "react";
// import { Pet } from "../models/Pet";
// import { getPetById } from "../services/petService";
import { useParams } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
// import { AdoptionForm } from "../models/AdoptionForm";
// import { postAdoption } from "../services/adoptionService";

export function PetAdoptionForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [pet, setPet] = useState(null);
    const [formValues, setFormValues] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        hasFencedYard: false,
        hasChildren: false,
        hasOtherPets: false,
        phoneNumber: '',
        email: '',
        aboutSelf: ''
    });

    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            getPetById(Number(id)).then((pet) => {
                setPet(pet);
            });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    function onSubmit(e) {
        e.preventDefault();
        postAdoption(formValues);
        setFormSubmitted(true);
    }

    return (
        <div className="PetAdoptionForm">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    {formSubmitted ? (
                        <Alert>
                            One of our team members will get back to you as soon as possible. Thanks!
                        </Alert>
                    ) : (
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="middleName">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="middleName"
                                    value={formValues.middleName}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phoneNumber"
                                    value={formValues.phoneNumber}
                                    onChange={handleChange}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="123-456-7890"
                                />
                                <Form.Text className="text-muted">
                                    Format: 123-456-7890
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    pattern="\S+@\S+\.\S+"
                                />
                                <Form.Text className="text-muted">
                                    Format: email@domain.com
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="aboutSelf">
                                <Form.Label>About Yourself</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="aboutSelf"
                                    value={formValues.aboutSelf}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            {pet?.animalType === "dog" && (
                                <Form.Check
                                    type="checkbox"
                                    id="hasFencedYard"
                                    label="Do you have a fenced yard?"
                                    name="hasFencedYard"
                                    checked={formValues.hasFencedYard}
                                    onChange={handleChange}
                                />
                            )}

                            <Form.Check
                                type="checkbox"
                                id="hasChildren"
                                label="Do you have children?"
                                name="hasChildren"
                                checked={formValues.hasChildren}
                                onChange={handleChange}
                            />

                            <Form.Check
                                type="checkbox"
                                id="hasOtherPets"
                                label="Do you have other pets?"
                                name="hasOtherPets"
                                checked={formValues.hasOtherPets}
                                onChange={handleChange}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Col>
                <Col lg={3}></Col>
            </Row>
        </div>
    );
}
