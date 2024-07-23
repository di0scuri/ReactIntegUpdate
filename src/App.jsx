
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import Login from './Login';
import AdminLogin from './AdminLogin.jsx';
import AdminHeader from './components/AdminHeader.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SideNav from './components/SideNav.jsx';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Print from './Print.jsx'
//import Reports from './Reports';
import CustomerLoginPage from './CustomerLoginPage.jsx';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
/* import SettingsDept from './SettingsDept.jsx'
import SettingsNotifs from './SettingsNotifs.jsx' */
import SettingsQuestion from './SettingsQuestions.jsx'
import OfficeHeadDashboard from './OfficeHeadDashboard.jsx'
import Notification from './SettingsNotification.jsx'
import Department from './SettingsDepartment.jsx'
/* import MainDashboard from './MainDashboard.jsx';
import AdminLoginPage from './AdminLoginPage.jsx';
import OfficeHeadLoginPage from './OfficeHeadLoginPage.jsx'; 
import SideNav from './components/SideNav.jsx';
import TopSubNav from './components/TopSubNav.jsx' 
import AdminDashboard from './AdminDashboard.jsx';
import AdminLoginPage from './AdminLoginPage.jsx';
import AdminDashboardHeader from './components/AdminDashboardHeader.jsx';
import PropTypes from 'prop-types'; */


function AppWithRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/adminLogin" element={<AdminLogin />} />
        <Route path="/Login/AdminLogin/AdminLoginPage" element={
          <>
            <Header />

            <Footer />
          </>} />
        <Route path="/customerLoginPage" element={<CustomerLoginPage />} />
        <Route path="/Login/AdminLogin/OfficeHeadLoginPage" element={
          <>
            <Header />

            <Footer />
          </>
        } />
        <Route path="/Login/AdminLogin/CustomerLoginPage" element={
          <>
            <Header />

            <Footer />
          </>
        } />
        <Route path="/Login/AdminLogin/OfficeHeadLoginPage/OfficeheadDashboard" element={
          <>
            <div className="d-flex flex-column min-vh-100">
              <AdminHeader />
              <Container fluid className="flex-grow-1 mt-5 pt-3">
                <Row>
                  <Col md={12} className="p-3">
                    <OfficeHeadDashboard />
                  </Col>
                </Row>
              </Container>
              <Footer />
            </div>
          </>
        } />
        <Route path="/Login/AdminLogin/OfficeHeadLoginPage/Print" element={
          <div className="d-flex flex-column min-vh-100">
            <AdminHeader />
            <Container fluid className="d-grid flex-grow-1">

              <Container fluid className='mt-3'>

                <Row className='offset-1 mt-5'>
                  <Col md="auto" className='mt-'>
                    <Form.Group controlId="selectAll">
                      <Row className='d-flex align-items-center'>
                        <Col md={2} className=''>
                          <Button as={Link} to="/Login/AdminLogin/OfficeHeadLoginPage/OfficeheadDashboard">All</Button>
                        </Col>
                        <Col md={9} className='offset-1'>
                          <Button as={Link} to="/Login/AdminLogin/OfficeHeadLoginPage/Print">Print Report</Button>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                  <Print />
                </Row>
              </Container>

            </Container>
            <Footer />
          </div>
        } />
        <Route path="/Login/AdminLogin/AdminLoginPage/dashboard" element={
          <div className="d-flex flex-column min-vh-100">
            <AdminHeader />
            <Container fluid className="flex-grow-1 mt-5 pt-3">
              <Row>
                <Col md={2} className="p-0">
                  <SideNav />
                </Col>
                <Col md={10} className="p-3">
                  <Dashboard />
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        } />
        <Route path="/Login/AdminLogin/AdminLoginPage/Print" element={
          <div className="d-flex flex-column min-vh-100">
            <AdminHeader />
            <Container fluid className="d-grid flex-grow-1">
              <Row className='offset-2'>
                <Col className="mt-n5">
                  <SideNav />
                </Col>
                <Print />
              </Row>
            </Container>
            <Footer />
          </div>
        } />

        <Route path="/Login/AdminLogin/AdminLoginPage/settings" element={
          <div className="d-flex flex-column min-vh-100">
            <AdminHeader />
            <Container fluid className="flex-grow-1 mt-5 pt-3">
              <Row>
                <Col md={2} className="p-0">
                  <SideNav />
                </Col>
                <Col md={10} className="p-3">
                  <Settings />
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        } />

        <Route path="/login/adminLogin/AdminLoginPage/settings/departments" element={
          <>
            <div className="d-flex flex-column min-vh-100">
              <AdminHeader />
              <Container fluid className="flex-grow-1 mt-5 pt-3">
                <Row>
                  <Col md={2} className="p-0">
                    <SideNav />
                  </Col>
                  <Col md={10} className="p-3">
                    <Settings />
                    <Department />
                  </Col>
                </Row>
              </Container>
              <Footer />
            </div>
          </>
        } />

        <Route path="/login/adminLogin/AdminLoginPage/settings/questions" element={
          <>
            <div className="d-flex flex-column min-vh-100">
              <AdminHeader />
              <Container fluid className="flex-grow-1 mt-5 pt-3">
                <Row>
                  <Col md={2} className="p-0">
                    <SideNav />
                  </Col>
                  <Col md={10} className="p-3">
                    <Settings />
                    <SettingsQuestion />
                  </Col>
                </Row>
              </Container>
              <Footer />
            </div>
          </>
        } />

        <Route path="/login/adminLogin/AdminLoginPage/settings/notifications" element={
          <>
            <div className="d-flex flex-column min-vh-100">
              <AdminHeader />
              <Container fluid className="flex-grow-1 mt-5 pt-3">
                <Row>
                  <Col md={2} className="p-0">
                    <SideNav />
                  </Col>
                  <Col md={10} className="p-3">
                    <Settings />
                    <Notification />
                  </Col>
                </Row>
              </Container>
              <Footer />
            </div>
          </>
        } />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default AppWithRouter;
