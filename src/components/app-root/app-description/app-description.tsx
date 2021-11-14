import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'app-description',
  styleUrl: 'app-description.css',
  shadow: true,
})
export class AppDescription{
  constructor() {
    this.openModal = this.openModal.bind(this);
  }

  @Event({eventName: "modal"})
  modal: EventEmitter<boolean>;

  openModal() {
    this.modal.emit(true);
  }

  render() {
    return (
        <div class="body-container">
        <h1>A wonderful serenity has taken possession</h1>
        <p class="sub-header">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet moments.
        </p>
        <div class="open-modal">
          <app-button id="open-modal" onClick={this.openModal} text="Open Modal" appearance="primary"></app-button>
        </div>
       </div>
    );
  }

}