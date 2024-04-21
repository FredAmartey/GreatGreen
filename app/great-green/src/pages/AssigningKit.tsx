import {
  ThemeProvider,
  Box,
  Typography,
  Button,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import theme from "../theme";
import { useNavigate } from "react-router-dom";

function AssignKit() {
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleContinue = () => {
    navigate("/next-step"); // Redirect to the next step after assigning the kit
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ bgcolor: theme.palette.primary.light }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: matches ? 300 : 200,
            width: matches ? 300 : 200,
          }}
        >
          <CircularProgress
            size={matches ? 300 : 200}
            thickness={4}
            sx={{
              color: theme.palette.secondary.main,
              animationDuration: "550ms",
              position: "absolute",
              left: 0,
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
              animation: "rotate 2s linear infinite",
            }}
          />
          <Box
            component="img"
            src="/pottedplant.png"
            sx={{
              height: matches ? 150 : 100,
              width: matches ? 150 : 100,
              animation: "rotate 2s linear infinite",
            }}
          />
        </Box>
        <Typography variant="h4" sx={{ mt: 4, color: theme.palette.primary.contrastText }}>
          Assigning you a kit
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, color: theme.palette.secondary.contrastText }}>
          We are finding the best available kit based on your location
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleContinue}
          sx={{
            mt: 4,
            px: 5,
            py: matches ? 2 : 1,
            fontSize: matches ? "1rem" : "0.875rem",
            boxShadow: theme.shadows[10],
            textTransform: "none",
            borderRadius: theme.shape.borderRadius,
          }}
        >
          Continue
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default AssignKit;
