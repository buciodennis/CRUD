import React, {Component} from "react";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import PizzaReg from './PizzaReg.js'

export class PizzaAgregar extends Component{
    constructor(props){
        super(props);
        this.state={modal: false}
        
    }
 
    toggle =()=> {
        this.setState({
          modal: !this.state.modal
        });
    }
    render(){
        
    
        return (
            <div>
            <Button color="danger" onClick={this.toggle}>Abrir</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>Agregar pizza</ModalHeader>
              <ModalBody>
              <Label for="nombre">
                Nombre
                </Label>
                <Input
                id="nombre"
                type="text"
                />
                <Label for="Salsa">
                Salsa
                </Label>
                <Input
                id="topings"
                type="select"
                >
                <option>
                   Salsa 1
                </option>
                <option>
                   Salsa 2
                </option>
                <option>
                   Salsa 3
                </option>
                <option>
                   Salsa 4
                </option>
                <option>
                   Salsa 5
                </option>
                 </Input>
             <div>
             <Label for="topings">
                Topings
                </Label>
                <Input
                id="topings"
                type="select"
                >
                <option>
                    1
                </option>
                <option>
                    2
                </option>
                <option>
                    3
                </option>
                <option>
                    4
                </option>
                <option>
                    5
                </option>
                 </Input>
                 <Button  color="primary" >Añadir toping</Button>
             </div>
               
              </ModalBody>
              <ModalFooter>
                <Button  color="success" onClick={this.toggle}>Agregar pizza</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
    }
}