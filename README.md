# Tiny Material

A tiny bunch of elements to easily create Material Design interfaces.


It's still in development.
More information soon...

## Javascript API

Some functions are added to the global Javascript element: `window`.

**`window.tinymaterial`**

This is only just the global object. Do not override it if you want to keep the Javascript functionalities of the library.


**`window.tinymaterial.updateRippleEffectHandler()`**

Reapplies the Ripple Effect event handler on all default elements.


**`window.tinymaterial.rippleEffectEvent(event)`**

You can use it as the handler for a jQuery event. It's advised to use the `mousedown` event combined with the namespace `tinymaterialripple` to avoid any bug.

For example:

```javascript
$('.element').on('mousedown.tinymaterialripple', window.tinymaterial.rippleEffectEvent);
```

**`window.tinymaterial.rippleEffect(event, element)`**

Adds the ripple effect on an element. The event must be the jQuery event and it's required as it contains event coordinates.


**`window.tinymaterial.terminateRipples(element)`**

Terminates the ripple animation on an element. It can be useful when you make an element disappear. Because if you don't call this function, if you show this element again quickly, the ripple animation will start again from the beginning until the ripple itself is removed.

