import _ from 'lodash';
import axios from 'axios';
import extractDomain from 'extract-domain';
import tags from '../../data/tags.json';

const colors = ['neutral', 'green', 'blue', 'red', 'orange', 'purple', 'yellow', 'teal', 'neutral', 'green', 'blue', 'red', 'orange', 'purple', 'yellow', 'teal', 'neutral', 'green', 'blue', 'red', 'orange', 'purple', 'yellow', 'teal'];
export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if (req.query && req.query.cluster) {
    tags = [req.query.cluster];
  }

  const clusters = await Promise.all(tags.map(async (t) => {
    try {
      const data = await axios({
        method: 'POST',
        url: 'https://flux.peakm.com/alerts/alert/stream?limit=100&sort=[{%22created%22:%20{%22order%22:%20%22desc%22}}]',
        data: {
      	this: {
      		value: null,
      		text: `title: (("what should i do" || "what are" || "how to" || "how do you" || "where can i" || "when will" || "why are" || "what do" || "where") AND ("coronavirus"||"covid-19") AND "${t}")`,
      		case_sensitive: false,
      		advanced_search: true,
      	},
      	happens: {
      		text: 'appears in News, News Global (Limited), Twitter, Reddit, Youtube, Quora',
      		value: {
      			tags: [{
      				tag: 'news',
      				id: 1,
      				meta: null,
      				friendly: 'News',
      			}, {
      				id: 397,
      				tag: 'news-glob',
      				friendly: 'News Global (Limited)',
      				meta: null,
      			}, {
                id: 'twitter',
                tag: 'twitter',
                meta: {
                  external_agent: 'twitter',
                },
                friendly: 'Twitter',
              }, {
                id: 'reddit',
                tag: 'reddit',
                meta: {
                  external_agent: 'reddit',
                },
                friendly: 'Reddit',
              }, {
                id: 'youtube',
                tag: 'youtube',
                meta: {
                  external_agent: 'youtube',
                },
                friendly: 'Youtube',
              }, {
                id: 'quora',
                tag: 'quora',
                meta: {
                  external_agent: 'quora',
                },
                friendly: 'Quora',
              }],
      			sources: [],
      		},
      		search: 'workspaces',
      	},
        },
      });

      const docs = data && data.data && _.orderBy(_.uniqBy(data.data.stream.map((d) => ({
        rawtext: d._source.title,
        url: d._source.url,
        text: d._source.title.toLowerCase(),
        source: d._source.tags.includes('youtube') ? 'youtube' : d._source.tags.includes('socialmedia') ? 'social' : 'newsmedia',
        count: d._source.socialcount_last || 0,
      })), 'text'), ['count'], ['desc']);

      return {
        Cluster: t,
        Documents: docs,
        Words: 'TBD',
        Summary: `${docs[0] && docs[0].rawtext} (${extractDomain(docs[0] && docs[0].url)})`,
        total: data && data.data && data.data.stream.reduce((e, i) => e + (i._source.socialcount_last || 0), 0),
      };
    } catch (e) {
      return null;
    }
  }));
  const cluster_out = clusters.filter((c) => c).map((c) => {
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
  });
  res.setHeader('Cache-Control', 's-maxage=10800');
  res.end(JSON.stringify(_.orderBy(cluster_out, ['total'], ['desc'])));
};
