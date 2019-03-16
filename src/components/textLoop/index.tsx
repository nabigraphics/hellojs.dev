import React, { Component, CSSProperties } from "react";
import { Transition, animated, config } from "react-spring/renderprops";
import classNames from "classnames/bind";
import RequestAnimeFrame from "utils/requestAnimeFrame";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface TextLoopProps {
  queue: string[];
  interval?: number;
  className?: string;
  style?: CSSProperties;
}

interface TextLoopState {
  index: number;
  width: number;
  height: number;
}

type TextLoopTypes = TextLoopProps & TextLoopState;

class TextLoop extends Component<TextLoopTypes> {
  public static defaultProps: TextLoopProps = {
    queue: [],
    interval: 1000
  };

  private state: TextLoopState = {
    index: 0,
    width: 0,
    height: 0
  };

  componentDidMount() {
    const { interval, queue } = this.props;
    if (queue.length > 1) {
      const start = performance.now();
      RequestAnimeFrame(() => this.tick(start, interval));
    }
  }

  tick = (start, interval) => {
    const currTime = performance.now() - start;
    if (currTime >= interval) {
      this.nextQueue();
      RequestAnimeFrame(() => this.tick(performance.now(), interval));
    } else {
      RequestAnimeFrame(() => this.tick(start, interval));
    }
  };

  nextQueue = () => {
    const { queue } = this.props;
    const index: number = (this.state.index + 1) % queue.length;
    this.setState({ index });
  };

  updateContainer = (item, action, style) => {
    const { queue } = this.props;
    const { index } = this.state;
    // current item slot
    const currentItem = queue[index];
    if (currentItem && currentItem === item && action === "enter") {
      // update width, height state for container style
      const { width, height } = style;
      this.setState({ width, height });
    }
  };

  render() {
    const { className, queue, style } = this.props;
    const { index, width, height } = this.state;

    if (!queue.length) return null;

    return (
      <div
        className={cx(className, "container")}
        style={{ ...style, width, height }}
      >
        <Transition
          native
          items={queue[index]}
          update={item => item}
          from={{
            opacity: 0,
            transform: "translate3d(0,100%,0)"
          }}
          enter={{
            opacity: 1,
            transform: "translate3d(0,0%,0)",
            width: "auto",
            height: "auto"
          }}
          leave={{
            opacity: 0,
            transform: "translate3d(0,-50%,0)"
          }}
          config={config.stiff}
          onFrame={this.updateContainer}
        >
          {item => props => (
            <animated.div
              onLoad={() => console.log("loaded!")}
              className={cx("item")}
              style={props}
            >
              {item}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}

export default TextLoop;
