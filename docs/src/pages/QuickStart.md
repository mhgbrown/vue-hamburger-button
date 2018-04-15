# Quick Start

## Install (without npm)

Clone the Git repository of this library and link it.

```bash
git clone https://github.com/mhgbrown/vue-hamburger-button.git
cd vue-hamburger-button
npm install
npm run build
npm link
```

In your client project root folder:
```bash
npm link vue-hamburger-button
```

## Use the library

```javascript
import Vue from 'vue'
import * as VueHamburgerButton from 'vue-hamburger-button'

Vue.use(VueHamburgerButton);
```

### No Conflict

All components will be installed with no prefix by default, you can add any prefix
to them to avoid conflicts with other libs if needed.

For example:

```javascript
Vue.use(VueHamburgerButton, { prefix: 'abc' });
```

Results in:

* Components such as `<hamburger-button>` becomes `<abc-hamburger-button>`
