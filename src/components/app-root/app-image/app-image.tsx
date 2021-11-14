import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: true,
})
export class AppImage{
  render() {
    return (
      <div class="image-header-desktop" aria-label="image-header-desktop">
          <img class="image-header-desktop" src="/assets/icon/images/man-on-mountain.jpg"></img>
      </div>
    );
  }
}