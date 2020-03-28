import React, { Component } from 'react';
import {
  Pane, Heading, Text, Badge, Pill, Button, SideSheet, Paragraph,
} from 'evergreen-ui';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  render() {
    const {
      title, summary, badges, count,
    } = this.props;
    const { isShown } = this.state;
    return (
      <Pane display="flex" padding={16} margin={16} background="tint2" borderRadius={3} flexDirection="column">
        <Heading size={600}>
          {title}
          <Pill display="inline-flex" margin={8}>{count && count.toLocaleString()}</Pill>
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
            <Heading size={600}>Article Headline</Heading>
            <Paragraph>Basic Example</Paragraph>
          </Pane>
        </SideSheet>
      </Pane>
    );
  }
}

export default Article;
