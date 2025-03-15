import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, ListGroup, Button, Navbar, Nav, Dropdown, Form, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaEnvelope, FaPen, FaTimes, FaClipboardList, FaShoppingCart, FaStar, FaUser, FaAddressBook, FaSignOutAlt, FaBars, FaCog, FaPlus, FaTag, FaTruck, FaUndo, FaCheck, FaComment, FaBell, FaUserCog } from "react-icons/fa";
import './style.css';

function AddProducts() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [productManagementOpen, setProductManagementOpen] = useState(false);
  const [orderManagementOpen, setOrderManagementOpen] = useState(false);
  const [messageManagementOpen, setMessageManagementOpen] = useState(false);
  const [accountSettingOpen, setAccountSettingOpen] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditeProductModal, setShowEditeProductModal] = useState(false);
  const [category, setCategory] = useState('');
  const handleClear = () => {
    setFormData({
        ...formData,
        shopName: '',
        shopAddress: '',
        shopCity: '',
        state: '',
        shopMobile: '',
        businessLicenseNumber: '',
        addressProofImage: null,
        otherProofImages: []
    });
};


  const [previewImage, setPreviewImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    vendorEmail: 'yasser@admin.com',
    shopName: '',
    shopAddress: '',
    shopCity: '',
    state: '',
    shopMobile: '',
    businessLicenseNumber: '',
    addressProofImage: null,
    otherProofImages: []
  });
  const handlePreview = (image) => {
    setPreviewImage(image);
    setShowModal(true);
  };
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (name === "otherProofImages") {
      setFormData({
        ...formData,
        otherProofImages: Array.from(files).slice(0, 5)
      });
    } else {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    }
  };
  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Define the subcategories rendering logic outside of conditional hooks
  const renderSubcategories = (category) => {
    if (category === 'Electronics') {
      return (
        <>
          <option value="Electronics-Phone">Phone</option>
          <option value="Electronics-Computer">Computer</option>
          <option value="Electronics-Bord">Bord</option>
        </>
      );
    } else if (category === 'Cloth') {
      return (
        <>
          <option value="Cloth-Men">Men</option>
          <option value="Cloth-Women">Women</option>
          <option value="Cloth-Kid">Kid</option>
        </>
      );
    }
    return null; // Return nothing if no category is selected
  };

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

  const [entries, setEntries] = useState(10);
  const products = Array.from({ length: 100 }, (_, i) => ({
    name: `Surveillance & Security Cameras`,
    code: `${i + 3}`,
    color: "100$",
    image: "https://www.beyiddondolo.com/media/5679-84.jpg",
    category: "Electronics",
    section: "Camera",
    status: i % 2 === 0,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / entries);
  const displayedProducts = products.slice((currentPage - 1) * entries, currentPage * entries);

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
              <Link to="/vendor/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
            </ListGroup.Item>
            {/* Product Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleProductManagement}>
              <FaClipboardList className="me-2" />
              Product Management
            </ListGroup.Item>

            {/* Expanded content for Product Management */}
            <div className={`product-management-dropdown ${productManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaPlus className="me-2" />
                <Link to="/vendor/add-product" style={{ textDecoration: 'none', color: 'white' }}>Add Product</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaTag className="me-2" />
                <Link to="/vendor/coupons" style={{ textDecoration: 'none', color: 'white' }}>Coupons</Link>
              </ListGroup.Item>
            </div>

            {/* Order Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleOrderManagement}>
              <FaShoppingCart className="me-2" />
              Order Management
            </ListGroup.Item>
            <div className={`product-management-dropdown ${orderManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaShoppingCart className="me-2" />
                <Link to="/vendor/orders" style={{ textDecoration: 'none', color: 'white' }}>Orders</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaTruck className="me-2" />
                <Link to="/vendor/shipped" style={{ textDecoration: 'none', color: 'white' }}>Shipped</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaUndo className="me-2" />
                <Link to="/vendor/refunds" style={{ textDecoration: 'none', color: 'white' }}>Refunds</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaCheck className="me-2" />
                <Link to="/vendor/completed" style={{ textDecoration: 'none', color: 'white' }}>Completed Orders</Link>
              </ListGroup.Item>
            </div>

            {/* Message Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleMessageManagement}>
              <FaEnvelope className="me-2" />
              Message Management
            </ListGroup.Item>
            <div className={`product-management-dropdown ${messageManagementOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaComment className="me-2" />
                <Link to="/vendor/user-messages" style={{ textDecoration: 'none', color: 'white' }}>User Messages</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaUser className="me-2" />
                <Link to="/vendor/admin-messages" style={{ textDecoration: 'none', color: 'white' }}>Admin Messages</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaStar className="me-2" />
                <Link to="/vendor/review-messages" style={{ textDecoration: 'none', color: 'white' }}>Review Messages</Link>
              </ListGroup.Item>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaBell className="me-2" />
                <Link to="/vendor/notifications" style={{ textDecoration: 'none', color: 'white' }}>Notifications</Link>
              </ListGroup.Item>
            </div>

            {/* Account Management Section with Expandable Content */}
            <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center" onClick={toggleAccountSetting}>
              <FaAddressBook className="me-2" />
              Account Settings
            </ListGroup.Item>
            <div className={`product-management-dropdown ${accountSettingOpen ? 'open' : ''}`}>
              <ListGroup.Item action className="bg-dark text-white border-0 d-flex align-items-center">
                <FaUserCog className="me-2" />
                <Link to="/vendor/manage-profile" style={{ textDecoration: 'none', color: 'white' }}>Manage Profile</Link>
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
            padding: '20px 15px'
          }}
        >
          <h3>Products</h3>
          <Row className="mb-3 d-flex justify-content-end">
            <Col xs="auto" className="d-flex justify-content-end mt-3 mt-sm-0">
              <Button
                variant="primary"
                className="add-product-btn"
                onClick={() => setShowAddProductModal(true)}
              >
                Add Product
              </Button>

            </Col>
          </Row>
          <Row className="mb-3 d-flex justify-content-between align-items-center">
            <Col xs="auto" className="d-flex align-items-center">
              <label className="me-2">Show</label>
              <Form.Select value={entries} onChange={(e) => setEntries(Number(e.target.value))} style={{ width: '100px' }}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </Form.Select>
              <label className="ms-2">Entries</label>
            </Col>
            <Col xs="auto" className="d-flex align-items-center mt-3 mt-sm-0">
              <label className="me-2">Search:</label>
              <Form.Control type="text" placeholder="Search" style={{ width: '150px' }} />
            </Col>
          </Row>

          {/* Product Cards Grid with 5 columns on large screens */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(220px, 1fr))", // Responsive sizing
              gap: "20px",
            }}
            className="custom-grid"
          >
            {displayedProducts.map((product) => (
              <Card
                key={product.id}
                className="shadow-sm rounded-4 p-3 d-flex flex-column justify-content-between"
              >
                <div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fluid
                    rounded
                    className="mb-3"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <h5 className="fw-bold">{product.name}</h5>
                  <p className="mb-1 text-muted">Total Product: {product.code}</p>
                  <p className="mb-1">Product Price: {product.color}</p>
                  <p className="mb-1">Category: {product.category}</p>
                  <p className="mb-1">Subcategory: {product.section}</p>
                  <Form.Check
                    type="switch"
                    label="Active"
                    checked={product.status}
                    readOnly
                    className="mt-2"
                  />
                </div>

                {/* Actions */}
                <div className="d-flex justify-content-between mt-3 flex-column flex-sm-row gap-2">
                  <Button
                    variant="warning"
                    size="sm"
                    className="fixed-button-size"
                    onClick={() => setShowEditeProductModal(true)}
                  >
                    <FaPen />
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    className="fixed-button-size"
                  >
                    {/* Your icon or text */}
                    <FaTimes />
                  </Button>

                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <Row className="d-flex justify-content-between mt-3">
            <Col xs="auto">
              <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</Button>
            </Col>
            <Col xs="auto">
              Page {currentPage} of {totalPages}
            </Col>
            <Col xs="auto">
              <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
            </Col>
          </Row>
          <Modal
            show={showAddProductModal || showEditeProductModal}
            onHide={() => {
              if (showAddProductModal) {
                setShowAddProductModal(false);
              } else if (showEditeProductModal) {
                setShowEditeProductModal(false);
              }
            }}
            centered
          >

            {showAddProductModal ? (
              <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
              </Modal.Header>
            ) : (
              <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
              </Modal.Header>
            )}

            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>Select Category</Form.Label>
                  <Form.Select onChange={handleCategoryChange} value={category}>
                    <option value="">Select a Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Cloth">Cloth</option>
                  </Form.Select>

                  {category && (
                    <>
                      <Form.Label>Select Subcategory</Form.Label>
                      <Form.Select>
                        <option value="">Select a Subcategory</option>
                        {renderSubcategories(category)}
                      </Form.Select>
                    </>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productCode">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter product code" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productCategory">
                  <Form.Label>Total Product</Form.Label>
                  <Form.Control type="text" placeholder="Enter category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productImage">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control type="text" placeholder="Enter image URL" />
                </Form.Group>

                <Form.Group controlId="otherProofImages" className="mb-4 text-start">
                  <Form.Label className="d-block">Other Proof Images (Max 5)</Form.Label>
                  <Form.Control type="file" name="otherProofImages" multiple onChange={handleImageChange} />
                  <div className="mt-2">
                    {formData.otherProofImages.map((file, index) => (
                      <img key={index} src={URL.createObjectURL(file)} alt={`Proof ${index + 1}`} className="img-thumbnail me-2" width="100" onClick={() => handlePreview(URL.createObjectURL(file))} style={{ cursor: 'pointer' }} />
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productDescription">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter product description"
                  />
                </Form.Group>

              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClear}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {
                // Handle your submission logic here!
                setShowAddProductModal(false);
                alert("Product added!");
              }}>
                Save Product
              </Button>
            </Modal.Footer>
          </Modal>

        </Col>
      </Row>
       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                      <Modal.Body className="text-center">
                          {previewImage && <img src={previewImage} alt="Preview" className="img-fluid" />}
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                      </Modal.Footer>
                  </Modal>
    </Container>


  );
}

export default AddProducts;
