import React, {PureComponent} from 'react'
import {MODAL_STYLE} from './modalStyle'

export default class Modal extends PureComponent {
    constructor(props) {
        super(props);

        this.closeIfEscKey = this.closeIfEscKey.bind(this);
    }

    componentDidMount() {
        this.modal.addEventListener('click', (event) => {
            if ('close-modal' === event.target.getAttribute('data-name')) {
                this.props.close();
            }
        });
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', this.closeIfEscKey);
    }

    closeIfEscKey(event) {
        if (27 === event.which) {
            this.props.close();
        }
    }

    componentWillUnmount() {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', this.closeIfEscKey);
    }

    render() {
        const {children, closeText, close} = this.props;
        const {backgroundStyle, containerStyle, closeButtonStyle} = this.props;

        // Override default and add styles from props if any
        const background = {...MODAL_STYLE.background, ...backgroundStyle};
        const container = {...MODAL_STYLE.container, ...containerStyle};
        const closeButton = {...MODAL_STYLE.close_button, ...closeButtonStyle};

        return (
            <div id='modal' ref={m => this.modal = m}>
                <div
                    style={background}
                    id='close-modal'
                    data-name='close-modal' />
                <div
                    id='modal-container'
                    style={container}>
                    <span
                        onClick={close}
                        style={closeButton}
                        className='close-modal-button'>{closeText}</span>
                    {children}
                </div>
            </div>
        )
    }
}
