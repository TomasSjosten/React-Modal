export const MODAL_STYLE = {
    background: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '900',
        background: 'rgba(58, 58, 58, 0.7)',
    },
    container: {
        width:' calc(95% - 20px)',
        maxWidth:' 600px',
        position:' fixed',
        maxHeight:' 90%',
        overflowY:' scroll',
        background:' white',
        left:' 50%',
        top:' 50%',
        transform:' translate(-50%, -50%)',
        zIndex:' 950',
        padding:' 10px',
    },
    close_button: {
        cursor: 'pointer',
        position: 'absolute',
        right: '5px',
        top: '5px',
        color: 'rgb(105, 105, 105)',
    }
}
