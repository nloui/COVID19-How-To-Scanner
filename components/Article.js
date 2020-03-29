import React, { Component } from 'react';
import {
  Pane, Heading, Text, Badge, Pill, Button, SideSheet, Link, SegmentedControl,
} from 'evergreen-ui';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      options: [
        { label: 'All', value: null },
        { label: 'News', value: 'newsmedia' },
        { label: 'Social', value: 'social' },
        { label: 'YouTube', value: 'youtube' },
      ],
      filter: null,
    };
  }

  render() {
    const {
      title, summary, badges, articles,
    } = this.props;
    const { isShown } = this.state;
    return (
      <Pane display="flex" padding={16} margin={16} background="tint2" borderRadius={3} flexDirection="column">
        <Heading size={600}>
          {title}
          <Pill display="inline-flex" margin={8}>{articles && articles.length.toLocaleString()}</Pill>
        </Heading>
        <Text color="muted" marginTop="default">{summary}</Text>
        <Pane display="flex" flexDirection="row" height={40} alignItems="center" justifyContent="space-between">
          <Pane paddingTop={16}>
            {badges.map(
              (b) => <Badge color={b.color} key={b.label} marginRight={8}>{b.label}</Badge>,
            )}
          </Pane>
          <Button marginTop={16} iconAfter="arrow-right" appearance="minimal" onClick={() => this.setState({ isShown: true })}>Explore Articles</Button>
        </Pane>
        <SideSheet
          isShown={isShown}
          onCloseComplete={() => this.setState({ isShown: false })}
        >
          <Pane padding={16}>
            <Pane
              padding={16}
              margin={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <SegmentedControl
                width={240}
                options={this.state.options}
                value={this.state.filter}
                onChange={(value) => this.setState({ filter: value })}
              />
            </Pane>
            {articles.filter((x) => (this.state.filter ? x.source === this.state.filter : true)).map((d) => (
              <Pane
                elevation={1}
                margin={12}
                padding={18}
                display="flex"
                justifyContent="center"
                alignItems="left"
                flexDirection="column"
              >
                <Heading size={500}>
                  <Badge>{d.source}</Badge>
                  {' '}
                  {d.rawtext}
                </Heading>
                <Link color="neutral" href={d.url}>{d.url.replace('https://', '').replace('http://', '').replace('www.', '').slice(0, 50)}</Link>
              </Pane>
            ))}

          </Pane>
        </SideSheet>
      </Pane>
    );
  }
}

export default Article;
