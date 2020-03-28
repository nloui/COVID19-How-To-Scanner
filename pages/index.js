import React, { Component } from 'react';
import { Pane, Heading, Button, Text, Badge } from 'evergreen-ui'
import Article from '../components/Article'
import '../styles/styles.scss'

class Index extends Component {

  render() {
    return (
      <div id="App">
      <Pane display="flex" height={100} alignItems="center" justifyContent="center">
        <Heading size={800}>COVID-19 "How To" Tracker</Heading>
      </Pane>
      <Pane display="flex" height={50} alignItems="center" justifyContent="center">
        <Text size={500} color="muted">Common Themes</Text>
      </Pane>
      <Article title={"Clean / Home"} summary={`Example headlines include "Covid-19 tips: How to clean your home".`} badges={[{"color":"neutral","label":"Cleaning"}, {"color":"green","label":"Home"}]} count={2000} />
      <Article title={"Masks / Handmake"} summary={`Example headlines include "How to make your own mask out of toilet paper!".`} badges={[{"color":"red","label":"Home Made"}, {"color":"neutral","label":"Masks"}]} count={500} />
      <Article title={"Testing"} summary={`Example headlines include "How to self diagnose COVID-19!".`} badges={[{"color":"red","label":"Self Diagnosis"}, {"color":"neutral","label":"Testing"}]} count={250} />

      </div>
    );
  }

}

export default Index;
