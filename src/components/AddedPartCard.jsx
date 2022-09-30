import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function AddedPartCard ({ set_num, name, year, parts, img }) {

  return (
    <Link to={`/set/${set_num}`} style={{ textDecoration: 'none' }}>
    <Col>
      <CardGroup>
      <Card
        style={{ width: '18rem', height: '25rem'}}
        text='secondary'
        border='warning'
        id={set_num}
      >
        <Card.Img
          variant="top"
          style={{width: "100%", height: "60%", objectFit: "contain"}}
          src={img} id={set_num}
        />
        <Card.Body id={set_num}>
          <Card.Title id={set_num}> {name} </Card.Title>
          <Card.Text>
            <table style={{width: '100%'}} id={set_num}>
            <tbody id={set_num}>
              <tr>
                <td id={set_num}>Set Number: </td>
                <td id={set_num}>{set_num}</td>
              </tr>
              <tr>
                <td id={set_num}>Number of Parts: </td>
                <td id={set_num}>{parts}</td>
              </tr>
              <tr>
                <td id={set_num}>Year Released: </td>
                <td id={set_num}>{year}</td>
              </tr>
            </tbody>
            </table>
          </Card.Text>

        </Card.Body>
      </Card>
      </CardGroup>
    </Col>
    </Link>
  );
}

export default AddedPartCard;