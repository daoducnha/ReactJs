var str = "String"
var item ={
  name: "Nha",
  age: 25
}
function calculator(a, b){
  return a*b
}
var element = <h1> Hello world {calculator(2,3)}</h1>
  var styleObject = {
        backgroundColor: 'red',
        color:'blue',
        fontSize: 25,
        width: 100
    }
    var element2 =( <div><div>Hello World</div>
        <div>Hello World</div></div>)

 var product ={name:"apple", stock:-1}
 var element3;
 if(product.stock<0){
   element3 =<div> san pham khong phai la {product.name}</div>
 }else{
 element3 =   <div> san pham la {product.name}</div>
 }
ReactDOM.render(element3, document.getElementById("root"));

====================================================


function HelloWorld(a){
  return (<h1> Hello World, {a.message}</h1>)
};

function ShoppingTitle(props){
  return (<div>
      <h1>{props.title}</h1>
    <h2>Total number of {props.numItems}</h2>
    </div>)
}
function ListItem(props){
  return <li>{props.item}</li>
}
function ShoppingList(props){
  return (<div>
                    <h3>{props.header}</h3>
                    <ol>
                        <ListItem item = {props.items[0]} />
                        <ListItem item = {props.items[1]} />
                        <ListItem item = {props.items[2]} />
                    </ol>
                </div>)
}

function ShoppingApp(props){
  return (
  <div>
      <ShoppingTitle title = "Shopping App" numItems="9"/>
      <ShoppingList header="Food" items = {["Apple","Bread","Cheese"]}/>
      <ShoppingList header="Clothes" items = {["Shirt","Pants","Hat"]}/>
      <ShoppingList header="Supplies" items = {["Pen","Paper","Glue"]}/>
   </div>)
}

ReactDOM.render(<ShoppingApp />, document.getElementById('root'));


=============================

function Feature(props){
  
    return ( 
      !props.active && <h1> function is Active</h1>
    );
}
ReactDOM.render(<Feature active={false} />, document.getElementById('root'));

==============================================


function VehicleTitle(props){
    return <h1>{props.header}</h1>  
}

function VehicleContent(props){
  return (<p>{props.content}</p>)
}

function VehicleHeader(props){
  return (
    <div>
      <VehicleTitle header = {props.header} />
      <VehicleContent content = {props.content}/>
    </div>
  )
}

function H2tag(props){
  return <h2>{props.value}</h2>
}
function CheckBoxOptions(props){
  return(
      <div>
        {props.content} 
        <input type={props.type} id={props.id} name={props.name} value={props.value} checked={props.isChecked} />
      </div>
    )
}

function Option(props){
  return <option value={props.value}> {props.value} </option>
}

function SelectOptions(props){
  return(
   
    <div>
      <p>
      {props.selectType} 
      <select>
          <Option value={props.items[0]}/>
          <Option value={props.items[1]}/>
          <Option value={props.items[2]}/> 
          <Option value={props.items[3]}/>
      </select>
        </p>
    </div> 
  )
}

function ChooseOptions(props){
  return(
    <div>
        <VehicleTitle header = {props.header}/>
        <CheckBoxOptions />
    </div>
  )
}

function TitleFieldTable(){
return(           
  <tr>
    <th>Year</th>
    <th>Model</th>
    <th>Price</th>
    <th>Buy</th>
  </tr>)
}
function DataFieldTable(props){
return(           
  <tr>
    <th>{props.year}</th>
    <th>{props.model}</th>
    <th>{props.price}</th>
    <th><button>Buy Now</button></th>
  </tr>)
}
function  ListVehicles(props){
  return (
      <ul>
          <table>
            <tbody>
              <TitleFieldTable />
              <DataFieldTable year={props.year} model ={props.model} price={props.price}/>
            </tbody>
          </table>
      </ul>
  )  
}

function TransportationApp(prop){
  return(
    <div>
      <VehicleHeader header = "Welcome to React Transportation" content = "The best place to buy vehicles online"/>
      <H2tag value = "Choose Options"/>
      <CheckBoxOptions content = "New Only" type = "checkbox" id = "coding" name = "interest" value = "coding" isChecked = "true" />
      
      <SelectOptions selectType= "
Select Type" items = {["All","Cars","Trucks","Convertibles"]} />
      <div>
      <H2tag value = "Cars"/>
        <ListVehicles year= "2013" model= "A" price="$32000" />
        <ListVehicles year= "2011" model= "B" price="$4400" />
        <ListVehicles year= "2016" model= "B" price="$15500" />
      </div>
      <div>
      <H2tag value = "Trucks"/>
        <ListVehicles year= "2014" model= "D" price="$18000" />
        <ListVehicles year= "2013" model= "E" price="$5200" />
      </div>
      
      <div>
      <H2tag value = "Convertibles"/>
        <ListVehicles year= "2009" model= "F" price="$2000" />
        <ListVehicles year= "2010" model= "G" price="$6000" />
        <ListVehicles year= "2012" model= "H" price="$12500" />
        <ListVehicles year= "2017" model= "M" price="$5000" />
      </div>
      
    </div>
  )
  
}

ReactDOM.render(<TransportationApp />, document.getElementById('root'));


===============================


class Welcome extends React.Component{
    constructor(props){
      super(props)
      this.state = {value: 0}
    }
    componentDidMount(){
	//Methode se ko dong bo =>ket qua khong mong muon
      this.setState({value:this.state.value + 1})
	//Dung callback function de dc ket qua mong muon
	this.setState((preState, props)=>{
        return {value:preState.value + 1}
      })
    }  
    render(){
        return <h1>Hello World! {this.props.message} with {this.state.value}</h1>
    }
}


=========================

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
	//Quan trong
    this.clickHandler = this.clickHandler.bind(this)
  }
  
  clickHandler(){
    this.setState({count: this.state.count +1})
  }
  render(){
    return <button onClick = {this.clickHandler}>{this.state.count}</button>
  }
}
=================================


class Details extends React.Component{
  render(){
    return (<h1>{this.props.details}</h1>)
  }
}

class Button extends React.Component{
  render(){
    return (<button style= {{color: this.props.active ?"red" :"blue"}} onClick={() => this.props.clickHandler(this.props.id, this.props.name)}>{this.props.name}</button>)
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {activeArr: [0,0,0,0], details:""}
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(id, details){
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArr:arr,details:details})
    console.log(id, details)
  }
  
  render(){
    return (
      <div>
        <Button id={0} active={this.state.activeArr[0]} clickHandler = {this.clickHandler} name = "one" />
        <Button id={1} active={this.state.activeArr[1]} clickHandler = {this.clickHandler} name = "two"/>
        <Button id={2} active={this.state.activeArr[2]} clickHandler = {this.clickHandler} name = "three"/>
        <Button id={3} active={this.state.activeArr[3]} clickHandler = {this.clickHandler} name = "four"/>
        <Details details = {this.state.details}/>
      </div>
    )
  }
}


