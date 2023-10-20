import { Component, State, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-navbar',
  styleUrl: 'app-navbar.css',
  shadow: true,
})
export class AppNavbar {
  @Prop() navLinks: Array<any>;
  @Prop() logoUrl: string;
  @Prop() siteTitle: string;

  @State() isMenuOpen: Boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return (
      <nav class="bg-gray-900 shadow-lg">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
              <img src={this.logoUrl} alt={this.siteTitle} class="h-8 w-8" />
              <a href="/" class="ml-2 text-white text-lg font-semibold">
                {this.siteTitle}
              </a>
            </div>
            <div class="hidden md:flex space-x-4">
              {this.navLinks.map((link) => (
                <a
                  href={link.url}
                  class="text-gray-300 hover:text-white transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div class="md:hidden">
              <button
                class="text-white hover:text-gray-300 focus:outline-none"
                onClick={() => this.toggleMenu()}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {this.isMenuOpen && (
          <div class="md:hidden bg-gray-800">
            <div class="container mx-auto py-2">
              {this.navLinks.map((link) => (
                <a
                  href={link.url}
                  class="block text-gray-300 hover:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
}
