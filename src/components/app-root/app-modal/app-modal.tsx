import { Component, h, getAssetPath, Prop, Event, EventEmitter, Watch, State, } from '@stencil/core';

@Component({
  tag: 'app-modal',
  styleUrl: 'app-modal.css',
  shadow: true,
  assetsDirs: ['src/assets/icon']
})
export class AppModal {
  // Props
  @Prop() closeIcon = 'close-x-icon.svg';
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() header: string;
  @Prop() appearance: string;
  @Prop() isopen: boolean = true;
  @Prop() buttons: string[] | string = [];

  //State for our buttons array
  @State() _buttons: Array<any>;

  //Watch for data
  @Watch('buttons')
  objectDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._buttons = [newValue];
    } else {
      this._buttons = newValue;
    }
  }

  // Before the components loaded, we then convert the buttons string to an array
  componentWillLoad() {
    this.objectDataWatcher(this.buttons);
  }

  // Events
  @Event({ eventName: 'modal' })
  private modal: EventEmitter<boolean | null>;

  // Functions
  private handleCancel = () => {
    this.modal.emit(false);
  };

  private handleAction = () => {
    this.modal.emit(null);
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel}>
          <div class="modal">
            <div class="header">
              <h2>Contact</h2>
              <div class="close" onClick={this.handleCancel}>
                <img src={getAssetPath(`../assets/icon/${this.closeIcon}`)} alt="close icon" />
              </div>
            </div>

            <div class="body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}