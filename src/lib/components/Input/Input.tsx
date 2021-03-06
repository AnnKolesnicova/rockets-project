import React from 'react';
import cx from 'classnames';
import SearchIcon from '../../icons/search.svg';
import styles from './styles.module.css';

type InputProps = {
  handleChange: Function;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, handleChange, placeholder}) => (
  <div className={styles.inputContainer}>
    <img src={SearchIcon} className={styles.searchIcon} />
    <input
      type="text"
      onChange={e => handleChange(e)}
      className={cx(className, styles.input)}
      placeholder={placeholder}
    />
  </div>
)

export default Input;
