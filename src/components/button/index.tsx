import React, {
  Component,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
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
}

type NativeButtonProps = DefaultButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorButtonProps = DefaultButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = NativeButtonProps & AnchorButtonProps;

class Button extends Component<ButtonProps> {
  public static defaultProps: ButtonProps = {
    theme: ThemeType.Light,
    disabled: false
  };

  renderButton = () => {
    const {
      className,
      children,
      theme,
      disabled,
      href,
      target,
      onClick
    } = this.props;

    if (href !== undefined) {
      const anchorClass = cx("button", { href }, className, theme, {
        disabled
      });
      return (
        <a href={href} target={target} className={anchorClass}>
          {children}
        </a>
      );
    }
    const buttonClass = cx("button", className, theme, { disabled });
    return (
      <button onClick={onClick} className={buttonClass}>
        {children}
      </button>
    );
  };

  render() {
    return this.renderButton();
  }
}

export default Button;
