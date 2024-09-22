import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Collapse,
  Button,
} from '@mui/material';
import { Inbox, Menu, ExpandLess, ExpandMore } from '@mui/icons-material';
import HotelIcon from '@mui/icons-material/Hotel';
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openStudents, setOpenStudents] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);
  const [openSubjects, setOpenSubjects] = useState(false);
  const [openSchool, setOpenSchool] = useState(false);
  const [openSyllabus, setOpenSyllabus] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [openFees, setOpenFees] = useState(false);
  const [openAdmission, setOpenAdmission] = useState(false);
  const [openExam, setOpenExam] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.clear()
  navigate('/')
}
  
const drawer = (
  <div>
    <Toolbar />
    <Box sx={{ overflow: 'auto',backgroundColor:"black" }}>
      <List>
        {/* Students */}
        <ListItem sx={{ color: 'white', fontSize: 30 }} button onClick={() => setOpenStudents(!openStudents)}>
          <ListItemIcon>
            <Inbox sx={{ color: 'white', fontSize: 30 }}   />
          </ListItemIcon>
          <ListItemText primary="Customer" sx={{ color: 'white', fontSize: 30 }} />
          {openStudents ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStudents} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('')}>
              <ListItemText primary="Customer" sx={{ color: 'white', fontSize: 30 }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('')}>
              <ListItemText primary="Customer List" sx={{ color: 'white', fontSize: 30 }} />
            </ListItem>
          </List>
        </Collapse>

        {/* Teachers */}
        <ListItem sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenTeachers(!openTeachers)}>
          <ListItemIcon>
            <Inbox sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Teachers" sx={{ color: 'white', fontSize: 30 }} />
          {openTeachers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTeachers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Teacher/TeacherRegistration')}>
              <ListItemText primary="Teacher Registration"sx={{ color: 'white', fontSize: 30 }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Teacher/TeacherList')}>
              <ListItemText primary="Teacher List" sx={{ color: 'white', fontSize: 30 }} />
            </ListItem>
          </List>
        </Collapse>

        {/* Subjects */}
        <ListItem sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenSubjects(!openSubjects)}>
          <ListItemIcon>
            <Inbox sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Subjects" sx={{ color: 'white', fontSize: 30 }}  />
          {openSubjects ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSubjects} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Subject/SubjectAdd')}>
              <ListItemText primary="Subjects Add" sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Subject/SubjectList')}>
              <ListItemText primary="Subjects List" sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
          </List>
        </Collapse>

        {/* School */}
        <ListItem  sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenSchool(!openSchool)}>
          <ListItemIcon>
            <Inbox  sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="School"  sx={{ color: 'white', fontSize: 30 }}  />
          {openSchool ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSchool} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem  button sx={{ pl: 4 }} onClick={() => navigate('/Schoole/StudentRegistration')}>
              <ListItemText primary="Students Registration"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Schoole/TeacherRegistration')}>
              <ListItemText primary="Teachers Registration"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
          </List>
        </Collapse>

        {/* Syllabus */}
        <ListItem  sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenSyllabus(!openSyllabus)}>
          <ListItemIcon>
            <Inbox  sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Syllabus"  sx={{ color: 'white', fontSize: 30 }} />
          {openSyllabus ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSyllabus} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Syllabus/SyllabusForm')}>
              <ListItemText primary="Syllabus Form"  sx={{ color: 'white', fontSize: 30 }} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Syllabus/SyllabusList')}>
              <ListItemText primary="Syllabus List"  sx={{ color: 'white', fontSize: 30 }} />
            </ListItem>
          </List>
        </Collapse>

        {/* Class */}
        <ListItem  sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenClass(!openClass)}>
          <ListItemIcon>
            <Inbox  sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Class"  sx={{ color: 'white', fontSize: 30 }}  />
          {openClass ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openClass} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Class/ClassForm')}>
              <ListItemText primary="Class Form"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Class/ClassList')}>
              <ListItemText primary="Class List"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
          </List>
        </Collapse>

        {/* Fees */}
        <ListItem  sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenFees(!openFees)}>
          <ListItemIcon>
            <Inbox  sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Fees"  sx={{ color: 'white', fontSize: 30 }}  />
          {openFees ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openFees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Fee/FeeStructure')}>
              <ListItemText primary="Fee Structure"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Fee/FeeVoucher')}>
              <ListItemText primary="Fee Voucher"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Fee/FeeSubmission')}>
              <ListItemText primary="Fee Submission"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
          </List>
        </Collapse>

        {/* Admission */}
        <ListItem  sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenAdmission(!openAdmission)}>
          <ListItemIcon>
            <Inbox  sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Admission"  sx={{ color: 'white', fontSize: 30 }}  />
          {openAdmission ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openAdmission} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Addmission/AddmissionForm')}>
              <ListItemText primary="Admission Form"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
          </List>
        </Collapse>

        {/* Exam */}
        <ListItem  sx={{ color: 'white', fontSize: 30 }}  button onClick={() => setOpenExam(!openExam)}>
          <ListItemIcon>
            <Inbox  sx={{ color: 'white', fontSize: 30 }}  />
          </ListItemIcon>
          <ListItemText primary="Exam"  sx={{ color: 'white', fontSize: 30 }}  />
          {openExam ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openExam} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Exam/ExamSchedule')}>
              <ListItemText primary="Exam Schedule"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={() => navigate('/Exam/ExamResult')}>
              <ListItemText primary="Exam Result"  sx={{ color: 'white', fontSize: 30 }}  />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  </div>
);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <HotelIcon sx={{ mr: 2 }} /> <Box sx={{ fontFamily: 'cursive', fontSize: 18 }}>Hotel Management System</Box>
          </Typography>
          <IconButton color="inherit" edge="end" sx={{ ml: 'auto' }}>
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: { xs: 'none', sm: 'block' } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* Main Content Goes Here */}
        <Outlet />
        
      </Box>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        
        {drawer}
        
      </Drawer>
    </Box>
  );
};

export default Dashboard;
