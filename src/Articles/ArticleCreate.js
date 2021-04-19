import React, { Component } from 'react';
import ArticleModel from '../models/article';

class CreateArticleForm extends Component {
  state = {
    link: '',
  };
  
  onInputChange = (event) => {
    // console.log(event.target.id);
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    this.setState({[event.target.name]: event.target.value})
    };

  
  onFormSubmit = (event) => {
    event.preventDefault();
    ArticleModel.createArticle(this.state, this.props.ballotid)
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="articleForm">
          <input  
            onChange={this.onInputChange} 
            type="text" 
            id="newArticle" 
            placeholder="Input article URL..." 
            name="link"
            value={this.state.link}
          /> <br/>
          <button type="submit" id="addArticle" className="btn">Post</button>
        </form>
      </div>
    );
  };
};

export default CreateArticleForm;