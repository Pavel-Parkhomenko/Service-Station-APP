import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from "@mui/material/Stack";
import {TextField} from "@mui/material";
import useHttp from "../../hooks/httpHook";

export default function Pay({isOpen, setOpen, numOrderOfPay, id}) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const {request} = useHttp()

  const closeHandle = () => {
    setOpen(false);
  };

  const payHandle = async () => {
    const response = await request('/order/update-payment', 'PUT', {id})
    console.log(response);
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={closeHandle}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Оплата заказа № ${id}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Все данные защищены службой по защите данных
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Номер карты"
            fullWidth
            variant="standard"
          />
          <Stack className="stack" direction="row" spacing={3}>

            <TextField
              autoFocus
              label="Год"
              variant="standard"
              type="number"
            />

            <TextField
              autoFocus
              label="Месяц"
              variant="standard"
              type="number"
            />

            <TextField
              autoFocus
              label="День"
              variant="standard"
              type="number"
            />
          </Stack>

        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandle}>
            Отмена
          </Button>
          <Button onClick={payHandle}>
            Оплатить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}