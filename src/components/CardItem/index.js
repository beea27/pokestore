import React from 'react';
import '../../App.css';
import './style.css';
import trash from './../../img/trash.png';
import plus from './../../img/plus.png';
import minus from './../../img/minus.png';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 
function CardItem({pokemon}) {
    const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <>
      <ul>
        {pokemon.map((poke) => (
          <li>
            <div className="cardItem">
              <div className="imgInformations">
                <img className="ImgCard" src={poke.sprites.front_default} alt="" />
                <div className="information">
                  <div>
                    <span className="poke">{poke.forms[0].name}</span>
                  </div>
                  <div>
                    <span className="price">${poke.price}</span>
                  </div>
                </div>
                <button className="button"><img src={trash} alt=""/></button>
              </div>
              <div className="amount">
                <button className="button"><img src={minus} alt=""/></button>
                  <p><b>1</b></p>
                <button className="button"><img src={plus} alt=""/></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="btn">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Check out
        </Button>
          <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
              >
                  <DialogTitle id="alert-dialog-title">{"Thank you! Your purchase was completed!"}</DialogTitle>
                  <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                          Total: $100,00
                      </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose} color="primary" autoFocus>
                          ok
                      </Button>
                  </DialogActions>
              </Dialog>
      </div>
    </>
  )
}
 
export default CardItem;