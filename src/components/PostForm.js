import React from "react"
import {connect} from 'react-redux'
import {addPost, hideAlert, showAlert} from '../redux/actions'
import Alert from "./Alert"


class PostForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: ''
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler(e) {
        e.preventDefault()
        const {title} = this.state
        if(!title.length) return this.props.showAlert('dfghjk')
        if(title.length) this.props.hideAlert()
        const newPost = {
            title,
            id: Math.random().toString()
        }
        this.props.addPost(newPost)
        this.setState({title:''})
    }

    changeHandler(e) {
        this.setState(prev => ({...prev, ...{[e.target.name]: e.target.value}}))
    }

    render() {
        return (
            <>            
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert alert={this.props.alert}/>}
                <label>
                    <input 
                        type='text'
                        onChange={this.changeHandler}
                        value={this.state.title}
                        name="title"
                    />
                </label>
            <button type="submit">Add Post</button>
            </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    addPost, showAlert, hideAlert
}
const mapStateToProps = state => ({
    alert: state.load.alertCheck
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)