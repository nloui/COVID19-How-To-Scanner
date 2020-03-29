import React, { Component } from 'react';
import { Pane, Heading, Button, Text, Badge } from 'evergreen-ui'
import Article from '../components/Article'
import '../styles/styles.scss'
import axios from 'axios'
class Index extends Component {

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

export async function getStaticProps() {
  try {
  const res = await axios.get('/api/json')
  const clusters = res.data

  return {
    props: {
      clusters,
    },
  }
} catch(e) {
  return {
    props: {
      clusters: [],
    },
  }

}
}

export default Index;
