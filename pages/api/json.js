import _ from 'lodash';
import clusters from '../../data/clusters.json';
import tags from '../../data/tags.json';

const colors = ['neutral', 'green', 'blue', 'red', 'orange', 'purple', 'yellow', 'teal'];
export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(clusters.slice(0, 15).map((c) => {
    // console.log();
    if (c.Words === 'TBD') {
      c.Words = [];
      tags.forEach((t, i) => {
        c.Documents.forEach((d) => {
          if (d.text.includes(t.toLowerCase())) {
            c.Words.push({
              label: t,
              color: colors[i],
            });
          }
        });
      });
      c.Words = _.uniqBy(c.Words, 'label');
    }
    return { ...c };
  })));
};
