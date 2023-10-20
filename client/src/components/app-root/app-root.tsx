import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        {/* <header>
          <h1>Winters Website</h1>
        </header> */}
        <app-navbar logoUrl={'../../assets/icon/projector.png'} siteTitle='FlixFinder' navLinks={[{ name:'test', url:'/profile'},{ name:'test', url:'/profile'},{ name:'test', url:'/profile'}]}></app-navbar>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="custom-clock" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
