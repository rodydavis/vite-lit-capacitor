import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StatusBar, Style } from "@capacitor/status-bar";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    main {
      --bg-color: #f0f0f0;
      --fg-color: #000;
      --app-bar-color: navy;
      --app-bar-on-color: white;
      display: flex;
      flex-direction: column;
      width: 100%;
      /* Settings for the notch */
      background-color: var(--app-bar-color);
      padding-top: var(--inset-top);
      height: calc(100% - var(--inset-top));
    }
    header {
      background-color: var(--app-bar-color);
      color: var(--app-bar-on-color);
      padding: 1rem;
      padding-left: var(--inset-left);
      padding-right: var(--inset-right);
    }
    .title {
      padding-left: 1rem;
    }
    section {
      padding: 1rem;
      background-color: var(--bg-color);
      color: var(--fg-color);
      flex: 1;
      /* Settings for the notch */
      padding-bottom: var(--inset-bottom);
      padding-left: var(--inset-left);
      padding-right: var(--inset-right);
    }
    @media (prefers-color-scheme: dark) {
      section {
        color: var(--bg-color);
        background-color: var(--fg-color);
      }
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = "World";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <main>
        <header><span class="title"> Hello, ${this.name}! </span></header>
        <section>
          <button @click=${this._onClick} part="button">
            Click Count: ${this.count}
          </button>
          <slot></slot>
        </section>
      </main>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return "foo";
  }

  firstUpdated() {
    StatusBar.setOverlaysWebView({ overlay: true });

    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };

    setStatusBarStyleDark();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
