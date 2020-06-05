import React, { Component } from 'react';
import SweetAlert           from 'sweetalert-react';
import uuidv4               from 'uuid/v4';
import Title                from './components/Title';
import Form                 from './components/Form';
import Items                from './mockdata/Items';
import Item                 from './components/Item';
import ItemEdit             from './components/ItemEdit';
import './../node_modules/sweetalert/dist/sweetalert.css';

class App extends Component {
  constructor(props) {    
    super(props);
    let arrayLevel = [];
    if(Items.length > 0) {
      for(let i = 0; i < Items.length; i++) {
        if(arrayLevel.indexOf(Items[i].level) === -1) {
          arrayLevel.push(Items[i].level);
        }
      }
    }
    arrayLevel.sort(function(a, b){return a - b});
    this.state = {
      items      : Items,
      showAlert  : false,
      titleAlert : '',
      idAlert    : '',
      indexEdit  : 0,
      idEdit     : '',
      nameEdit   : '',
      levelEdit  : 0,
      arrayLevel : arrayLevel,
      showForm   : false,
      valueItem  : '',
    }
  }
  renderItem = () => {
    let {items, idEdit, indexEdit, nameEdit, levelEdit, arrayLevel} = this.state;
    console.log(items)
    if(items.length === 0) {
      return <Item item={0} />
    }
    return items.map((item, index) => {
      if(item.id === idEdit) {
        return (
          <ItemEdit 
            key       ={index}
            indexEdit ={indexEdit}
            nameEdit  ={nameEdit}
            levelEdit ={levelEdit}
            arrayLevel={arrayLevel}
            handleEditSelectChange={this.handleEditSelectChange}
            handleEditClickSubmit ={this.handleEditClickSubmit}
          />
        )
      }
      return (
        <Item 
          index          ={index+1} 
          item           ={item} 
          key            ={item.id} 
          handleShowAlert={this.handleShowAlert}
          handleEditItem ={() => console.log('edit item')}
        />
      )
    });
  }
  handleShowAlert = (item) => {
    this.setState({
      showAlert : true,
      titleAlert: item.name,
      idAlert   : item.id
    });
  }
  handleDeleteItem = () => {
    let {idAlert, items} = this.state;
    if(items.length > 0) {
      for(let i = 0; i < items.length; i++) {
        if(items[i].id === idAlert) {
          items.splice(i, 1);
          this.setState({ 
            items    : items,
            showAlert: false 
          });
          break;
        }
      }
      console.log(items);
      
    }
  }
  handleEditItem = (index,item) => {
    this.setState({
      indexEdit: index,
      idEdit   : item.id,
      nameEdit : item.name,
      levelEdit: item.level
    });
  }
  handleEditSelectChange = (value) => {
    this.setState({ levelEdit: value });
  }
  handleEditClickSubmit = () => {
    let {items, idEdit, nameEdit, levelEdit} = this.state; 
    if(items.length > 0) { 
      for(let i = 0; i < items.length; i++) {
        if(items[i].id === idEdit) {
          items[i].name = nameEdit;
          items[i].level = +levelEdit;
          break;
        }
      }
    }
    this.setState({ idEdit: '' });
  }
  handleFormSelectChange = (value) => {
    this.setState({ levelItem: value });
  }
  handleFormClickCancel = () => {
    this.setState({
      valueItem: '',
      levelItem: 0
    });
  }
  render() {
    return (
      <div className="container">
        <SweetAlert
          showCancelButton
          show          ={this.state.showAlert}
          title         ="Delete Item?"
          text          ={this.state.titleAlert}
          onOutsideClick={()=> this.setState({ showAlert: false })}
          onEscapeKey   ={()=> this.setState({ showAlert: false })}
          onCancel      ={()=> this.setState({ showAlert: false })}
          onConfirm     ={()=> this.handleDeleteItem()}
        />
        <Title />
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form 
              showForm              ={this.state.showForm}
              arrayLevel            ={this.state.arrayLevel}
              valueItem             ={this.state.valueItem}
              handleFormSelectChange={this.handleFormSelectChange}
              handleFormClickCancel ={this.handleFormClickCancel}
            />
          </div>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">Stage1</div>
          <table className="table table-hover" style={{ backgroundColor: 'white'}}>
            <thead style={{ backgroundColor: '#0077cc', color: 'white'}}>
              <tr>
                <th style={{ width: '10%' }} className="text-center">#</th>
                <th>Name</th>
                <th style={{ width: '15%' }} className="text-center">Point</th>
                <th style={{ width: '15%' }} className="text-center">Level</th>
                <th style={{ width: '15%' }} className="text-center">star</th>
                <th style={{ width: '15%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItem()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
