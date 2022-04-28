import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-hovercards',
  styleUrl: 'grpsix-hovercards.css',
  shadow: true,
})
export class GrpsixHovercards {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}