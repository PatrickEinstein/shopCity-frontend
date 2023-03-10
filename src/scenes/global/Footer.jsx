import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { Shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(28%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={Shades.secondary[500]}
          >
            ECOMMERCE
          </Typography>
          <div>Lorem Ipsion dolo sit enkkdnknd</div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30"> Careers</Typography>
          <Typography mb="30"> Our Stores</Typography>
          <Typography mb="30"> Terms & Conditions</Typography>
          <Typography mb="30"> Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30"> Help Center</Typography>
          <Typography mb="30"> Track Your Order</Typography>
          <Typography mb="30"> Corporate & Bulk Purchasing</Typography>
          <Typography mb="30"> Returns and Refunds</Typography>
        </Box>

        <Box width="clamp(28%, 25%, 30%)">
        <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30"> 50 Obajimi Close Ikosi Ketu Lagos</Typography>
          <Typography mb="30"> Email: mohammedola1234@gmail.com</Typography>
          <Typography mb="30"> +2348138329684</Typography>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
