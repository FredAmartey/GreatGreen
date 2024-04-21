// SelectDifficulty.tsx
import {
  ThemeProvider,
  Box,
  Typography,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import theme from "../theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EasyIcon from "@mui/icons-material/EmojiEmotions";
import MediumIcon from "@mui/icons-material/EmojiEvents";
import HardIcon from "@mui/icons-material/EmojiObjects";
import backgroundImg from "/vegitation.jpeg";

function SelectExperience() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("easy");

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulty((event.target as HTMLInputElement).value);
  };

  const handleContinue = () => {
    navigate("/next-page");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          bgcolor: "theme.palette.primary.main ",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            p: 4,
            borderRadius: theme.shape.borderRadius,
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            Select Difficulty
          </Typography>
          <Typography variant="subtitle1" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            A kit will be assigned to you based on your experience level with growing plants
          </Typography>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ textAlign: "center", mb: 2 }}>
              Choose your level:
            </FormLabel>
            <RadioGroup
              aria-label="difficulty"
              name="difficulty-level"
              value={difficulty}
              onChange={handleDifficultyChange}
              sx={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                value="easy"
                control={<Radio />}
                label={
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <EasyIcon color="success" sx={{ fontSize: 40 }} />
                    Easy
                  </Box>
                }
                sx={{ mb: 2 }}
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label={
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <MediumIcon color="warning" sx={{ fontSize: 40 }} />
                    Medium
                  </Box>
                }
                sx={{ my: 2 }}
              />
              <FormControlLabel
                value="hard"
                control={<Radio />}
                label={
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <HardIcon color="error" sx={{ fontSize: 40 }} />
                    Hard
                  </Box>
                }
                sx={{ mt: 2 }}
              />
            </RadioGroup>
          </FormControl>
          <Box textAlign="center" marginTop={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
              sx={{
                px: 5,
                py: 2,
                boxShadow: theme.shadows[10],
                color: "white",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default SelectExperience;
