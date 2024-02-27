import React, { useEffect } from "react";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Link,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchAnnouncements, AnnouncementsActionTypes } from "../../redux/store/announcementsReducer";
import { fetchQuizzes } from "../../redux/store/quizReducer";

import { RootState } from "../../redux/rootReducer";
// Define the Dashboard component
const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnnouncementsActionTypes>>();
  const announcementsData = useSelector((state: RootState) => state.announceData);
  const quizzesData = useSelector((state: RootState) => state.quizData);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  };
  // Fetch announcements and quizzes on component mount
  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchQuizzes());
  }, [dispatch]);
  // Render the Dashboard UI
  return (
    <main>
      <Box
        bgcolor="#fff"
        borderRadius="10px"
        p="var(--padding-md)"
        color="#295e6a"
        boxShadow="var(--primary-box-shadow)"
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          Exams <span style={{ opacity: 0.8 }}>ti</span>
          <span style={{ opacity: 0.7 }}>me</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here we are, Are your ready to fight? Don't worry, we prepared some
          tips to be ready for your exams.
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          gutterBottom
          style={{ fontStyle: "italic" }}
        >
          "Nothing happens until something moves." - Albert Einstein
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/exams-tips"
          style={{
            backgroundColor: "#0d9aaa",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          View exams tips
        </Button>
      </Box>
       {/* Announcements List */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            bgcolor="rgb(255, 255, 255)"
            borderRadius="10px"
            p="var(--padding-sm) var(--padding-md)"
            mt={isMobile ? "var(--margin-sm)" : "var(--margin-md)"}
            color="rgb(23, 89, 124)"
            boxShadow="var(--primary-box-shadow)"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="2rem"
            >
              <Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  Announcements
                </Typography>
                <Typography variant="body2">
                  We educate worriers. Keep updated :]
                </Typography>
              </Box>
              <Box>
                <Link
                  component={RouterNavLink}
                  to="/announcements"
                  color="inherit"
                  underline="none"
                  fontWeight="bold"
                >
                  All
                </Link>
              </Box>
            </Box>
            <Box>
              {announcementsData.loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : announcementsData.error ? (
                <Typography variant="body1">
                  {announcementsData.error}
                </Typography>
              ) : (
                Array.isArray(announcementsData.announcements) &&
                announcementsData.announcements.map((item, idx) => (
                  <Box key={idx} display="flex" mb="0.8rem">
                    <Box>
                      <img
                        src={`https://i.pravatar.cc/${301 + idx}`}
                        alt=""
                        style={{
                          borderRadius: "50%",
                          width: "2.2rem",
                          height: "2.2rem",
                        }}
                      />
                    </Box>
                    <Box ml="0.5rem" flex="1">
                      <Box ml="0.5rem">
                        <Typography
                          variant="body1"
                          style={{ marginBottom: "0.25rem", color: "#0e0e0e" }}
                        >
                          {item.teacherName}
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{ color: "#7f7f7f" }}
                        >
                          {item.courseCode}
                        </Typography>
                      </Box>
                    </Box>
                    <Box ml="0.5rem" flex="3">
                      <Typography variant="body1">{item.content}</Typography>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Grid>
         {/* Quizzes List */}
        <Grid item xs={12} md={4}>
          <Box
            bgcolor="rgb(255, 255, 255)"
            borderRadius="10px"
            p="var(--padding-sm) var(--padding-md)"
            mt={isMobile ? "var(--margin-sm)" : "var(--margin-md)"}
            color="rgb(23, 89, 124)"
            boxShadow="var(--primary-box-shadow)"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="2rem"
            >
              <Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  What's due
                </Typography>
                <Typography variant="body2">See what's due</Typography>
              </Box>
              <Box>
                <Link
                  component={RouterNavLink}
                  to="/quiz"
                  color="inherit"
                  underline="none"
                  fontWeight="bold"
                >
                  All
                </Link>
              </Box>
            </Box>
            <Box>
              {quizzesData.loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : quizzesData.error ? (
                <Typography variant="body1">{quizzesData.error}</Typography>
              ) : (
                Array.isArray(quizzesData.quiz) &&
                quizzesData.quiz.map((item, idx) => (
                  <Box key={idx} mb="0.5rem">
                    <Typography variant="body1">{item.title}</Typography>
                    <Typography variant="body2">
                      Course: {item.courseCode}
                    </Typography>
                    <Typography variant="body2">
                      Topics: {item.topic}
                    </Typography>
                    <Typography variant="body2">
                      Due to: {formatDate(item.dueTo)}
                    </Typography>
                    <Box mt="0.5rem">
                      <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to="/exams-tips"
                        style={{
                          backgroundColor: "#0d9aaa",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Start {item.type}
                      </Button>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default Dashboard;
