import { ThemeProvider } from "@mui/material/styles";
import { Box, Paper, Typography, Button, useMediaQuery } from "@mui/material";
import theme from "../theme";
import { useNavigate } from "react-router-dom";
import backgroundImg from "/nature.jpg";

function Welcome() {
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleStartJourney = () => {
    navigate("/next-page"); // Redirect the user to the next page
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        minWidth="80vw"
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Keep the background fixed during scroll
        }}
      >
        <Paper
          elevation={5}
          sx={{
            p: matches ? 6 : 3, // Responsive padding
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "rgba(255, 255, 255, 0.85)", // Increased opacity for better readability
            backdropFilter: "blur(10px)", // Stronger blur effect for an elegant look
            maxWidth: "600px", // Max width for the paper on larger screens
          }}
        >
          <Typography
            variant="h3" // Larger variant for smaller screens
            color={theme.palette.primary.dark}
            textAlign="center"
            gutterBottom
          >
            Welcome to Great Green
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color={theme.palette.secondary.main}
            sx={{ mb: 4 }}
          >
            Join us in our quest to reclaim and revitalize the world's deserts.
          </Typography>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleStartJourney}
              sx={{
                px: 5,
                py: 2,
                boxShadow: theme.shadows[10], // Prominent shadow for a 3D effect
                color: "white",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              START JOURNEY
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default Welcome;
