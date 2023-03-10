import { Box, useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:500px)");

  //these functions allow for better code readablily
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0,1 fr))"
      sx={{
        "&>div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedName("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{
          gridColumn: "span 2",
        }}
      />

      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedName("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{
          gridColumn: "span 2",
        }}
      />

      <TextField
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedName("country")}
        helperText={formattedHelper("country")}
        sx={{
          gridColumn: "span 4",
        }}
      />

      <TextField
        fullWidth
        type="text"
        label="Street Adress"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedName("street1")}
        helperText={formattedHelper("street1")}
        sx={{
          gridColumn: "span 2",
        }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street Adress 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedName("street2")}
        helperText={formattedHelper("street2")}
        sx={{
          gridColumn: "span 2",
        }}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedName("city")}
        helperText={formattedHelper("city")}
        sx={{
          gridColumn: "span 2",
        }}
      />

      <TextField
        fullWidth
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedName("state")}
        helperText={formattedHelper("state")}
        sx={{
          gridColumn: "1fr",
        }}
      />
      <TextField
        fullWidth
        type="text"
        label="Zip code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipcode}
        name={formattedName("zipcode")}
        error={formattedName("zipcode")}
        helperText={formattedHelper("zipcode")}
        sx={{
          gridColumn: "1fr",
        }}
      />
    </Box>
  );
};

export default AddressForm;
