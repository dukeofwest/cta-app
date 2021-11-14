import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() show: boolean = false;

  @Listen("modal")
  modalToggleListener({ detail }: CustomEvent<boolean>) {
    if(detail != null) {
      this.show = detail;
    } else {
      // handle update
    };
  }

  render() {
    return (

      <main>
      <div class="container">
        <div class="row">
          <div class="row header-row">
            <app-header></app-header>
          </div>
          <div class="col-50">
            <app-description></app-description>
          </div>
          <div class="col-50">
            <app-image></app-image>
          </div>
        </div>
      </div>
      <app-modal buttons={["cancel", "update"]} isopen={this.show}></app-modal>
    </main>
    );
  }
}