import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function SetCard({ set_num, name, year, parts, img }) {

  const clickCard = (event) => {

  }

  return (
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
        <Card.Body>
          <Card.Title id={set_num}> {name} </Card.Title>
          <Card.Text>
            <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td>Set Number: </td>
                <td>{set_num}</td>
              </tr>
              <tr>
                <td>Number of Parts: </td>
                <td>{parts}</td>
              </tr>
              <tr>
                <td>Year Released: </td>
                <td>{year}</td>
              </tr>
            </tbody>
            </table>
            {/* <div>Set Number: {set_num} </div>
            <div>Number of Parts: {parts} </div>
            <div>Year Released: {year} </div> */}
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    </Col>
  );
}

export default SetCard;