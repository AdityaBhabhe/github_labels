import React,{Component} from 'react';



class AddItem extends React.Component{
    state = {
        labelName : '',
        list: [],
        colorHolder: '#F21649',
        disabled: true,
        discribe:'',
    } 

    handleDiscribe = (e1) => {
        this.setState({discribe:e1.target.value})
    }


    handleChange = (event) => {
        this.setState({labelName: event.target.value});
        console.log("hit")
        if(event.target.value >= 0){
            this.setState({disabled:true})
        }else{
            this.setState({disabled:false})
        }

    }

    handleSubmit = () => {
        if(this.state.list.some(elements=>elements.Label === this.state.labelName)){
            alert("Label name already exist")
        }else if(this.state.list.some(elements=>elements.Color===this.state.colorHolder)){
            alert("This color already exist")
        }else{
            let newArray = [...this.state.list];
            newArray.push({Label:this.state.labelName,Color:this.state.colorHolder,Dis:this.state.discribe})
            this.setState({
            list: newArray,
            labelName:'',
            discribe:'',
        })
        }
        console.log(this.state.list)
    }

    labelRemove = (element,index) => {
        let newArray = [...this.state.list]
        delete newArray[index]
        newArray=newArray.filter((element)=>element)
        this.setState({
            list: newArray,
        })
        console.log(this.state.list)
    }

    colorChange = () => {
    
            var letters = '0123456789ABCDEF';
            var colors = '#';
            for (var i = 0; i < 6; i++) {
            colors += letters[Math.floor(Math.random() * 16)];    
            }
            this.setState({
                colorHolder:colors
            })
            console.log(this.state.colorHolder)
        }        

    render(){
        console.log(this.state.list)
      return(  
        <div className="AddItem">
            <div className="upperbox">
                <p><span style={{backgroundColor:this.state.colorHolder}}>{this.state.labelName?this.state.labelName:"Live Preview"}</span></p>
                <div className="labels">
                    <div className="label-name">
                        <p>Label Name</p>
                        <input type="text" onChange={this.handleChange} value={this.state.labelName} placeholder="Add a Label" />
                    </div>
                    <div className="discribe-name">
                        <p>Discription</p>
                        <input type="text" onSubmit={this.handleSubmit} onChange={this.handleDiscribe} value={this.state.discribe} placeholder="Add a Discribtion" />
                    </div>
                </div>    
                <div className="color">
                    <button style={{backgroundColor:this.state.colorHolder}} onClick={this.colorChange}><i className="fa fa-refresh"/></button>
                    <input type="text" onSubmit={this.handleChange} value={this.state.colorHolder} />
                </div>
                <div className="submit">     
                    <button disabled={this.state.disabled} onClick={this.handleSubmit}>Create Label</button>
                </div>
            </div>
            <div className="lower-box">      
                <div className="box-header">
                    <p>{this.state.list.length} Labels</p>
                </div>
                <div className="submit-box">
                    {this.state.list.map((element,index)=>{
                        return(
                            <div key={index} className="label-list">
                                <button onClick={()=>{this.labelRemove(element,index)}}><span>Remove</span></button>
                                <p><span style={{backgroundColor:element.Color}}>{element.Label}</span>{element.Dis}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>  

      )}
      }
export default AddItem;