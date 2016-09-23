import React from 'react';
import {Modal,Button} from 'react-bootstrap';

export default class YorbitModal extends React.Component{
    
      constructor(){
        super();
        this.state={
            showModal: false,
        }; 
          
          this.open = this.open.bind(this);
           this.close = this.close.bind(this);
    }

  close() {
     
    this.setState({ showModal: false });
  }

  open() {
       console.log("clicked");
    this.setState({ showModal: true });
  }

  render() {    

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button onClick={this.open}>
          Launch demo modal
        </Button>
        <Modal show="false">
          <p>test</p>
        </Modal>
      </div>
    );
  }
}