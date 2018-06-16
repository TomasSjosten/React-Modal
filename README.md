# React-Modal
A simple modal for React

##Simple usage with default styles
`closeText` and `close`-callback is required

```
<Modal
  closeText='Close'
  close={this.closeModal}>
  <YouComponents />
</Modal>
```


##Override default styles
You can override the default styles by passing following props
- backgroundStyle
- containerStyle
- closeButtonStyle

```
<Modal
  close={this.closeModal}
  closeText='Close'
  backgroundStyle={YourStyle}
  containerStyle={YourStyle}
  closeButtonStyle={YourStyle}
>
  <YouComponents />
</Modal>
  
```
