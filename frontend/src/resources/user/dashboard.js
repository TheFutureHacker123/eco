import React, { useState,useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Button, Modal, Form } from "react-bootstrap";
import Translation from "../translations/lang.json";
import './style.css';

function Dashboard() {

  
      const [content, setContent] = useState(Translation.english);
  
      useEffect(() => {
              setContent(Translation["amharic"]);
      } );
  




  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [productManagementOpen, setProductManagementOpen] = useState(false);
  const [orderManagementOpen, setOrderManagementOpen] = useState(false);
  const [messageManagementOpen, setMessageManagementOpen] = useState(false);
  const [accountSettingOpen, setAccountSettingOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleProductManagement = () => setProductManagementOpen(!productManagementOpen);
  const toggleOrderManagement = () => setOrderManagementOpen(!orderManagementOpen);
  const toggleMessageManagement = () => setMessageManagementOpen(!messageManagementOpen);
  const toggleAccountSetting = () => setAccountSettingOpen(!accountSettingOpen);

  const handleShow = (user) => {
    setSelectedUser(user);
    setShowModal(true);
    setMessages([
      { text: "How can I track my order?", sender: "user", time: formatTime(new Date()) },
      { text: "Please provide your order ID.", sender: "me", time: formatTime(new Date()) },
    ]);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
    setMessage('');
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages(prevMessages => [...prevMessages, { text: message, sender: 'me', time: formatTime(new Date()) }]);
      setMessage('');
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", lastMessage: "How can I track my order?" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", lastMessage: "Can I cancel my order?" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", lastMessage: "When will my product ship?" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", lastMessage: "I need a refund." },
    // Add more users as needed
  ];

  return (
    <Container fluid>
      <Row>
        <Col lg={10} className="offset-lg-2" style={{ marginTop: '56px' }}>
          <Card style={{ width: '80%', maxWidth: '1200px' }}>
            <Card.Header>
              <h4 className="text-center">User Messages</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {users.map((user, index) => (
                  <ListGroup.Item
                    key={user.id}
                    className={`d-flex justify-content-between align-items-center ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}
                  >
                    <div>
                      <strong>{user.name}</strong><br />
                      {content?.title || "Default Title"}
                      <small>{user.email}</small>
                    </div>
                    <div className="text-muted">
                      <small>{user.lastMessage}</small>
                    </div>
                    <Button variant="outline-primary" size="sm" onClick={() => handleShow(user)}>
                      View Messages
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser ? selectedUser.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: '350px', overflowY: 'scroll', marginBottom: '20px' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'me' ? 'my-message' : 'user-message'}`} style={{ display: 'flex', justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start' }}>
                <span>{msg.text}</span>
                <span style={{ fontSize: 'small', marginLeft: '10px', marginTop: '5px', alignSelf: 'flex-end' }}>{msg.time}</span>
              </div>
            ))}
          </div>
          <Form>
            <Form.Group controlId="messageInput">
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: '100%' }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .message {
          padding: 10px;
          border-radius: 8px;
          margin: 5px 0;
          width: fit-content;
          max-width: 70%;
          display: flex;
          align-items: center;
        }
        .my-message {
          background-color: #007bff;
          color: white;
          margin-left: auto;
        }
        .user-message {
          background-color: #f1f1f1;
          color: black;
        }
        .even-row {
          background-color: #e9ecef; /* Light grey for even rows */
        }
        .odd-row {
          background-color: #ffffff; /* White for odd rows */
        }
      `}</style>
    </Container>
  );
}

export default Dashboard;