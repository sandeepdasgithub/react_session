import React from 'react';
import { User } from '../interfaces/user';
import Table from 'react-bootstrap/Table';
import { Container,Row ,Col} from "react-bootstrap";

interface Data {
  users: User[];
}

const DataTable: React.FC<Data> = ({ users }) => {
  return (

    <Container fluid="md">
    <Row>
        <Col> 
            <Table striped bordered hover size="sm" className='text-center'> 
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    </Row>
  </Container>

    
       
    
  );
};

export default DataTable;
