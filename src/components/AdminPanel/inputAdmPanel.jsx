import { TextField } from "@mui/material";


const inputAdmPanel = (props) =>{
    return(
        <TextField
        label= {props.label}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        margin="normal"
        fullWidth
        required
      />
    );
}

export default inputAdmPanel;