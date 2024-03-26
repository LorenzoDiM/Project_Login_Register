import { Stack, Alert } from "@mui/material";

interface TipoMessaggio {
  messaggio: string;
}
export default function AlertComponent(props: TipoMessaggio) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="info">
        {props.messaggio}
      </Alert>
    </Stack>
  );
}
