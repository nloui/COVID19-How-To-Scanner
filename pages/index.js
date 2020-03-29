import React, { Component } from 'react';
import { Pane, Heading, Button, Text, Badge } from 'evergreen-ui'
import Article from '../components/Article'
import '../styles/styles.scss'
import axios from 'axios'
class Index extends Component {
  static async getInitialProps({query}) {
    try {
    let url = 'https://covid-19-how-to-scanner.now.sh/api/es'
    if(query && query.mode === "2") {
      url = 'https://covid-19-how-to-scanner.now.sh/api/json'
    }
    const res = await axios.get(url)
    const clusters = res.data
    return {
        clusters,
    }
  } catch(e) {
    return {
        clusters: [],
    }
  }
  }
  render() {
    const { clusters } = this.props;
    return (
      <div id="App">
      <Pane display="flex" height={100} alignItems="center" justifyContent="center">
        <Heading size={800}>COVID-19 "How To" Tracker</Heading>
      </Pane>
      <Pane display="flex" height={50} alignItems="center" justifyContent="center">
        <Text size={500} color="muted">Common Themes</Text>
      </Pane>
      {clusters && clusters.map((c)=>(<Article title={c.Cluster} summary={c.Summary} badges={c.Words} articles={c.Documents} />))}

      </div>
    );
  }

}


export default Index;
