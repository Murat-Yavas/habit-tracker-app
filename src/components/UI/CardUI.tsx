import Card from "react-bootstrap/Card";
import Button from "./Button";
import styles from "./CardUI.module.css";

interface CardProps {
  src: string;
  title: string;
  cardText?: string[];
  buttonText: string;
}

const CardUI = ({ src, title, cardText, buttonText }: CardProps) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className={`${styles["daily-details-card"]} p-0 mx-4`}
    >
      <Card.Img variant="top" src={src} className={`${styles["card-image"]}`} />
      <Card.Body className={`${styles["card-body"]}`}>
        <Card.Title className="text-center mb-4">{title}</Card.Title>
        <Card.Text>
          {cardText?.map((habitText, index) => (
            <li key={index}>{habitText}</li>
          ))}
        </Card.Text>
        <Button children={buttonText} className={`${styles["view-button"]}`} />
      </Card.Body>
    </Card>
  );
};

export default CardUI;
