import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import 'isomorphic-fetch';
import { Grid, Row, ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import screenfull from 'screenfull';
import Layout from '../components/layout';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.playlist = [
      '88MNeW_CW24',
      'ICKlk1Wm-W0',
      'zpyMQMdzrAw',
      'yVPjDXnQHvY',
      '8SKWPTTPU5U',
      'bjUoQbSJDJs',
    ];

    this.state = {
      url: `https://www.youtube.com/watch?v=${this.playlist[0]}&rel=0&showinfo=0`,
      playing: true,
      currentVideo: 0,
    };
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  };

  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  };

  onClickNext = () => {
    if (this.state.currentVideo < this.playlist.length) {
      const nextVideoIndex = this.state.currentVideo + 1;
      this.setState({
        url: `https://www.youtube.com/watch?v=${this.playlist[nextVideoIndex]}&rel=0&showinfo=0`,
        currentVideo: nextVideoIndex,
      })
    }
  };

  onClickPrev = () => {
    if (this.state.currentVideo > 0) {
      const nextVideoIndex = this.state.currentVideo - 1;
      this.setState({
        url: `https://www.youtube.com/watch?v=${this.playlist[nextVideoIndex]}&rel=0&showinfo=0`,
        currentVideo: nextVideoIndex,
      })
    }
  };

  ref = player => {
    this.player = player
  };

  render() {
    const { playing } = this.state;

    return (
      <Layout>
        <Grid className="grey_bg" fluid>
          <Row className="grey_bg_content">
            <Grid>
              <Row>
                <ReactPlayer
                  className="player"
                  ref={this.ref}
                  url={this.state.url}
                  playing={this.state.playing}
                />
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button onClick={this.playPause}>
                      <Glyphicon glyph={playing ? 'pause' : 'play-circle'} />
                    </Button>
                    <Button onClick={this.onClickPrev}>
                      <Glyphicon glyph="chevron-left" />
                    </Button>
                    <Button onClick={this.onClickNext}>
                      <Glyphicon glyph="chevron-right" />
                    </Button>
                    <Button onClick={this.onClickFullscreen}>
                      <Glyphicon glyph="fullscreen" />
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Row>
            </Grid>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default Portfolio;
