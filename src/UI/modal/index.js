import React from 'react';
import RModal from 'react-modal';
import theme from '../../styles/theme';
import { IoClose } from 'react-icons/io5';

const Modal = ({ visible, setVisible, label, children }) => {
    const open = () => {
        setVisible(true);
    }

    const close = () => {
        setVisible(false);
    }

    return (
        <RModal
            isOpen={visible}
            onRequestClose={close}
            contentLabel={label}
            style={{
                content: {
                    position: 'relative',
                    backgroundColor: theme.background,
                    borderRadius: 5,
                    overflow: 'hidden',
                    width: 'fit-content',
                    height: 'fit-content',
                    margin: 'auto',
                    border: 'none',
                    marginTop: '15%',
                },
                overlay: {
                    backgroundColor: '#000000CC',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            {children}
            <IoClose
                onClick={close}
                color={theme.white}
                size={20}
                style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 10,
                    right: 10,
                }}
            />
        </RModal>
    );
}

export default Modal;