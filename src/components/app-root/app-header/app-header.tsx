import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader{
  render() {
    return (
        <p class="header-text">CTA - Main Conversion</p>
    );
  }
}