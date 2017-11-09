// @flow weak

import React, { PureComponent } from 'react';
import Animate from 'react-move/Animate';
import { easeBackIn } from 'd3-ease';
import './App.css';
import shirtImg from './shirt.png';
import armLeftImg from './armLeft.png';
import armRightImg from './armRight.png';

const trackStyles = {
  position: 'relative',
  backgroundColor: 'rgb(31, 31, 31)',
  margin: '0 auto',
  width: '100%',
  height: '100%',
};

class App extends PureComponent {
  state = { open: false }
  handleClick = () => { this.setState({ open: !this.state.open }); }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Toggle</button>
        <Animate start={() => ({ face: 0, browLeft: 0, browRight: 0, eyeLeft: 0, eyeRight: 0, mouth: 0, teeth1: 0, teeth2: 0, shirt: 0, armLeft: 0, armRight: 0 })}
                 update={() => ({
                   face: [this.state.open ? 342 : 0],
                   browLeft: [this.state.open ? 401 : 0],
                   browRight: [this.state.open ? 510 : 0],
                   eyeLeft: [this.state.open ? 427 : 0],
                   eyeRight: [this.state.open ? 520 : 0],
                   mouth: [this.state.open ? 417 : 0],
                   teeth1: [this.state.open ? 469 : 0],
                   teeth2: [this.state.open ? 499 : 0],
                   shirt: [this.state.open ? 300 : 0],
                   armLeft: [this.state.open ? 320 : 0],
                   armRight: [this.state.open ? 310 : 0],
                   timing: { duration: 750, ease: easeBackIn },
                 })}
        >
          {
            (state) => {
              const { face, browLeft, browRight, eyeLeft, eyeRight, mouth, teeth1, teeth2, shirt, armLeft, armRight } = state;
              return (
                <div style={trackStyles}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '0',
                      width: 300,
                      height: 300,
                      borderRadius: '50%',
                      opacity: `${face}`,
                      backgroundColor: 'rgb(255, 107, 202)',
                      WebkitTransform: `translate3d(${face}px, 0, 0)`,
                      transform: `translate3d(${face}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '70px',
                      left: '0',
                      opacity: `${browLeft}`,
                      width: 60,
                      height: 0,
                      borderBottom: '15px solid rgb(253, 237, 41)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      WebkitTransform: `translate3d(${browLeft}px, 0, 0)`,
                      transform: `translate3d(${browLeft}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '70px',
                      left: '0',
                      opacity: `${browRight}`,
                      width: 60,
                      height: 0,
                      borderBottom: '15px solid rgb(253, 237, 41)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      WebkitTransform: `translate3d(${browRight}px, 0, 0)`,
                      transform: `translate3d(${browRight}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '100px',
                      left: '0',
                      opacity: `${eyeLeft}`,
                      borderRadius: '50%',
                      width: 35,
                      height: 50,
                      backgroundColor: '#000',
                      WebkitTransform: `translate3d(${eyeLeft}px, 0, 0)`,
                      transform: `translate3d(${eyeLeft}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '100px',
                      left: '0',
                      opacity: `${eyeRight}`,
                      borderRadius: '50%',
                      width: 35,
                      height: 50,
                      backgroundColor: '#000',
                      WebkitTransform: `translate3d(${eyeRight}px, 0, 0)`,
                      transform: `translate3d(${eyeRight}px, 0, 0)`
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '190px',
                      left: '0',
                      opacity: `${mouth}`,
                      width: 160,
                      height: 65,
                      backgroundColor: '#000',
                      borderRadius: '20% 20% 50% 50%',
                      WebkitTransform: `translate3d(${mouth}px, 0, 0)`,
                      transform: `translate3d(${mouth}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '191px',
                      left: '0',
                      opacity: `${teeth1}`,
                      width: 22,
                      height: 22,
                      backgroundColor: '#fafafa',
                      borderRadius: '0 0 2px 2px',
                      WebkitTransform: `translate3d(${teeth1}px, 0, 0)`,
                      transform: `translate3d(${teeth1}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '191px',
                      left: '0',
                      opacity: `${teeth2}`,
                      width: 22,
                      height: 22,
                      backgroundColor: '#fafafa',
                      borderRadius: '0 0 2px 2px',
                      WebkitTransform: `translate3d(${teeth2}px, 0, 0)`,
                      transform: `translate3d(${teeth2}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '200px',
                      left: '-300px',
                      opacity: `${shirt}`,
                      width: '1000px',
                      height: '1000px',
                      zIndex: '-1',
                      backgroundImage: `url(${shirtImg})`,
                      WebkitTransform: `translate3d(${shirt}px, 0, 0)`,
                      transform: `translate3d(${shirt}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '540px',
                      left: '-209px',
                      opacity: `${armLeft}`,
                      width: '240px',
                      height: '298px',
                      zIndex: '1',
                      backgroundImage: `url(${armLeftImg})`,
                      WebkitTransform: `translate3d(${armLeft}px, 0, 0)`,
                      transform: `translate3d(${armLeft}px, 0, 0)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '530px',
                      left: '350px',
                      opacity: `${armRight}`,
                      width: '240px',
                      height: '298px',
                      zIndex: '1',
                      backgroundImage: `url(${armRightImg})`,
                      WebkitTransform: `translate3d(${armRight}px, 0, 0)`,
                      transform: `translate3d(${armRight}px, 0, 0)`,
                    }}
                  />
                </div>
              );
            }
          }
        </Animate>
      </div>
    );
  }
}

export default App;
