import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { COUNTRIES } from './countries';
import './style-tags.css';
import { WithContext as ReactTags } from 'react-tag-input';
const suggestions = COUNTRIES.map((country) => {
  return {
    id: country,
    text: country,
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


export default class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //default exemple de tag-uri
      tags: [],
      suggestions: suggestions,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);

  }

  componentDidUpdate() {
    this.props.giveTags(this.state.tags);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });//, this.props.parentCallback);
    //this.props.parentCallback(tags.filter((tag, index) => index !== i));
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));//, this.props.parentCallback);
    //this.props.parentCallback([...this.state.tags, tag] );
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });//, this.props.parentCallback);
    //this.props.parentCallback(newTags);
  }

  handleTagClick(index) {
    console.log('The tag at index ' + index + ' was clicked');
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}