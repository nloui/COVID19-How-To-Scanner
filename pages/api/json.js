import clusters from '../../data/clusters.json';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(clusters.slice(0, 15)));
};
