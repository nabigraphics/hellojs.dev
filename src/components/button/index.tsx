import React, {
  Component,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  CSSProperties
} from "react";
import classNames from "classnames/bind";
import ThemeType from "structures/Theme";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface DefaultButtonProps {
  children?: ReactNode;
  theme?: ThemeType;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  style?: CSSProperties;
}

type NativeButtonProps = DefaultButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorButtonProps = DefaultButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = NativeButtonProps & AnchorButtonProps;

class Button extends Component<ButtonProps> {
  public static defaultProps: ButtonProps = {
    theme: ThemeType.Light,
    disabled: false,
    rounded: false
  };

  renderButton = () => {
    const {
      className,
      children,
      style,
      theme,
      disabled,
      rounded,
      href,
      target,
      onClick,
      ...props
    } = this.props;

    if (href !== undefined) {
      const anchorClass = cx(
        "button",
        { href },
        className,
        theme,
        { rounded },
        {
          disabled
        }
      );
      return (
        <a
          href={href}
          style={style}
          {...props}
          target={target}
          className={anchorClass}
        >
          {children}
        </a>
      );
    }
    const buttonClass = cx(
      "button",
      className,
      theme,
      { rounded },
      { disabled }
    );
    return (
      <button onClick={onClick} style={style} className={buttonClass}>
        {children}
      </button>
    );
  };

  render() {
    return this.renderButton();
  }
}

export default Button;
