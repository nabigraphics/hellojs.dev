import { useState } from "react";
import { useGesture } from "react-with-gesture";
// import { animated, useSpring } from "react-spring";
import { useSpring, animated } from "react-spring/web.cjs";
import React from "react";
import classNames from "classnames/bind";
import styles from "./mochi.module.scss";

const cx = classNames.bind(styles);

export default () => {
  const [action, onToggle] = useState();
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: 1,
      tension: 475,
      friction: 10
    },
    onRest: ({ xy }) => {
      if (xy[0] === 0 && xy[1] === 0) {
        onToggle("");
      }
    }
  }));
  const bind = useGesture(({ down, delta, distance, xy }) => {
    if (down) {
      onToggle("down");
    } else {
      onToggle("up");
    }

    const range: number = distance > 300 ? 300 : distance;
    // const x = range * direction[0];
    // const y = range * direction[1];
    // const range: number = 100;
    // const x = Math.abs(delta[0]) >= range ? range : delta[0];
    // const y = Math.abs(delta[1]) >= range ? range : delta[1];

    set({
      xy: down ? delta : [0, 0]
    });
  });

  return (
    <animated.div
      {...bind()}
      className={cx("mochi", { [action]: action })}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
        cursor: action === "down" ? "grabbing" : "grab"
      }}
    />
  );
};
