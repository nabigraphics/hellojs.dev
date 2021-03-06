import React, {
  useRef,
  useState,
  useEffect,
  CSSProperties,
  FunctionComponent
} from "react";
import { useTransition, animated } from "react-spring/web.cjs";
import classNames from "classnames/bind";
import RequestAnimeFrame from "raf";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface TextLoopProps {
  queue: string[];
  interval?: number;
  className?: string;
  style?: CSSProperties;
  prefix?: string;
  suffix?: string;
}

const TextLoop: FunctionComponent<TextLoopProps> = ({
  className,
  queue,
  interval,
  style,
  suffix,
  prefix
}) => {
  // state
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const bind = useRef(null);
  const currentRaf = useRef(null);

  useEffect(() => {
    if (queue.length > 1) {
      // set current tick of Raf
      const start = performance.now();
      currentRaf.current = RequestAnimeFrame(() => tick(start));
    }
    return () => {
      // unmount cancel to tick
      RequestAnimeFrame.cancel(currentRaf.current);
    };
  }, [index]);

  const tick = start => {
    const currTime = performance.now() - start;
    if (currTime > interval) {
      nextQueue();
    } else {
      currentRaf.current = RequestAnimeFrame(() => tick(start));
    }
  };

  const nextQueue = () => {
    const nextIndex: number = (index + 1) % queue.length;
    setIndex(nextIndex);
  };

  const update = (item, action) => {
    // current item slot
    const currentItem = queue[index];
    if (currentItem && currentItem === item && action === "enter") {
      // setSize into width, height for container style
      const width = bind.current.offsetWidth;
      const height = bind.current.offsetHeight;
      setSize({ width, height });
    }
  };

  // react-spring transitions
  const transitions = useTransition(queue[index], item => item, {
    native: true,
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0%,0)"
    },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
    onFrame: update
  });
  return (
    <div className={cx(className, "container")} style={style}>
      {prefix && prefix}
      <div className={cx("animation")} style={size}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            ref={bind}
            key={key}
            className={cx("item")}
            style={props}
          >
            {item}
          </animated.div>
        ))}
      </div>
      {suffix && suffix}
    </div>
  );
};

TextLoop.defaultProps = {
  queue: [],
  interval: 1000
};

export default TextLoop;
