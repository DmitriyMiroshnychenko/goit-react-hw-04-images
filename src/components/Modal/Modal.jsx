import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export function Modal({ onClose, largeImageURL, description }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleImageClick(event) {
    event.stopPropagation();
  }

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div>
        <img
          className={styles.ModalImage}
          src={largeImageURL}
          alt={description}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
