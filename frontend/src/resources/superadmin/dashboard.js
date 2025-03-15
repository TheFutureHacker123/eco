import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUsersCog, FaThList,FaCreditCard, FaUsers, FaShoppingCart, FaStar, FaUser, FaList, FaSignOutAlt, FaBars, FaCog, FaFlag, FaAd, FaTruck, FaLock, FaDollarSign, FaComment, FaBox, FaUserCog, FaClipboardList, FaClock, FaCheckCircle, FaStore, FaUserShield, FaListAlt, FaBook, FaTags, FaCaretDown } from "react-icons/fa"; // Added FaPlus and FaTag
import './style.css';
import { BsTools } from "react-icons/bs";


function SAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [productManagementOpen, setProductManagementOpen] = useState(false);

  const [orderManagementOpen, setOrderManagementOpen] = useState(false);
  const [messageManagementOpen, setMessageManagementOpen] = useState(false);
  const [accountSettingOpen, setAccountSettingOpen] = useState(false);
  const [adminManagementOpen, setAdminManagementOpen] = useState(false);
  const [catalogueManagementOpen, setCatalogueManagementOpen] = useState(false);
  const toggleProductManagement = () => {
    setProductManagementOpen(!productManagementOpen);
  };

  const toggleOrderManagement = () => {
    setOrderManagementOpen(!orderManagementOpen);
  };
  const toggleMessageManagement = () => {
    setMessageManagementOpen(!messageManagementOpen);
  };
  const toggleAccountSetting = () => {
    setAccountSettingOpen(!accountSettingOpen);
  };
  const toggleAdminManagement = () => {
    setAdminManagementOpen(!adminManagementOpen);
  };
  const toggleCatalogueManagement = () => {
    setCatalogueManagementOpen(!catalogueManagementOpen);
  };
  return (
    <Container fluid>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3 w-100 fixed-top" style={{ marginBottom: '56px' }}>
        <Button variant="dark" className="me-3 d-block" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </Button>
        <Navbar.Brand>WALIYA MARKET</Navbar.Brand>
        <Nav className="ms-auto">
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="text-white dropdown-toggle-no-arrow">
              <FaUser className="me-2" size={30} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/vendorsettings">
                <FaCog className="me-2" /> Settings
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/vendorlogout">
                <FaSignOutAlt className="me-2" /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>

      <Row>
        {/* Sidebar */}
        <Col
          lg={2}
          className={`sidebar bg-dark text-white p-3 d-lg-block ${sidebarOpen ? 'sidebar-open' : ''}`}
          style={{
            minHeight: "100vh",
            position: 'fixed',
            zIndex: 999,
            top: '56px',
            left: sidebarOpen ? 0 : '-250px',
            transition: 'left 0.3s ease',
          }}
        >
          <ListGroup variant="flush">
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
              <FaTachometerAlt className="me-2" />
              <Link to="/admindashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
            </ListGroup.Item>
            {/* Product Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleProductManagement}>
              <FaUsers className="me-2" />
              User Management
            </ListGroup.Item>

            {/* Expanded content for Product Management */}
            <div className={`product-management-dropdown ${productManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaUsersCog className="me-2" />
                <Link to="/add-product" style={{ textDecoration: 'none', color: 'white' }}>List Users</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaComment className="me-2" />
                <Link to="/user-messages" style={{ textDecoration: 'none', color: 'white' }}>User Messages</Link>
              </ListGroup.Item>
            </div>

            {/* Order Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleOrderManagement}>
              <FaStore className="me-2" />
              Vendor Management
            </ListGroup.Item>
            <div className={`product-management-dropdown ${orderManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaList className="me-2" />
                <Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>List Vendor</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaBox className="me-2" />
                <Link to="/shipped" style={{ textDecoration: 'none', color: 'white' }}>Manage Product</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaShoppingCart className="me-2" />
                <Link to="/refunds" style={{ textDecoration: 'none', color: 'white' }}>Manage Order</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaDollarSign className="me-2" />
                <Link to="/completed" style={{ textDecoration: 'none', color: 'white' }}>Approve Payouts</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaComment className="me-2" />
                <Link to="/user-messages" style={{ textDecoration: 'none', color: 'white' }}>Vendor Messages</Link>
              </ListGroup.Item>
            </div>


            {/* Order Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleAdminManagement}>
              <FaUserShield className="me-2" />
              Admin Management
            </ListGroup.Item>
            <div className={`product-management-dropdown ${adminManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaListAlt className="me-2" />
                <Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>List Admin</Link>
              </ListGroup.Item>
            </div>


            {/* Order Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleCatalogueManagement}>
              <FaThList className="me-2" />
              Catalog Management
            </ListGroup.Item>
            <div className={`product-management-dropdown ${catalogueManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaTags className="me-2" />
                <Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>Add Categories</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaCaretDown className="me-2" />
                <Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>Sub Categories</Link>
              </ListGroup.Item>
            </div>








            {/* Message Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleMessageManagement}>
      <BsTools className="me-2"/>  {/* Tools */}
              Platform Management
            </ListGroup.Item>
            <div className={`product-management-dropdown ${messageManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaAd className="me-2" />
                <Link to="/user-messages" style={{ textDecoration: 'none', color: 'white' }}>List Banner</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
               
                <FaCreditCard className="me-2" />
                <Link to="/add-payment" style={{ textDecoration: 'none', color: 'white' }}>Payment Method</Link>
              </ListGroup.Item>
            </div>

            {/* Account Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleAccountSetting}>
              <FaCog className="me-2" />
              Account Settings
            </ListGroup.Item>
            <div className={`product-management-dropdown ${accountSettingOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaUserCog className="me-2" />
                <Link to="/manage-profile" style={{ textDecoration: 'none', color: 'white' }}>Manage Profile</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaLock className="me-2" />
                <Link to="/manage-profile" style={{ textDecoration: 'none', color: 'white' }}>Update Password</Link>
              </ListGroup.Item>
            </div>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col
          lg={sidebarOpen ? 10 : 12}
          className="p-4"
          style={{
            marginLeft: sidebarOpen ? '250px' : '0',
            transition: 'margin-left 0.3s ease',
            paddingTop: '56px'
          }}
        >
          <h3>User Dashboard</h3>
          <Row className="mt-4">
            <Col md={3}>
              <Card className="text-center text-white bg-danger">
                <Card.Body className="d-flex flex-column align-items-center">
                  <FaClipboardList size={30} />
                  <Card.Title>Total Orders</Card.Title>
                  <Card.Text>0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center text-white bg-success">
                <Card.Body className="d-flex flex-column align-items-center">
                  <FaClock size={30} />
                  <Card.Title>Pending Orders</Card.Title>
                  <Card.Text>0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center text-white bg-primary">
                <Card.Body className="d-flex flex-column align-items-center">
                  <FaCheckCircle size={30} />
                  <Card.Title>Complete Orders</Card.Title>
                  <Card.Text>0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center text-white bg-info">
                <Card.Body className="d-flex flex-column align-items-center">
                  <FaStar size={30} />
                  <Card.Title>Reviews</Card.Title>
                  <Card.Text>0</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SAdminDashboard;
//hi