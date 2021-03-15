# Changelog

All notable changes to this project will be documented in this file.

## [0.0.4]

### Added

- OrderBy pipe (but after addition it works not correct, orederby works only by name and amount and it doesn't work by price, and I cannot find th reason)

### Modified

- Add pipes to: cart-list.component, cart-item.component,
  product-list.component, product-item.component
- Product service return observable

## [0.0.3]

### Added

- ClickFonts directive
- Constants service
- Generator service
- LocalStorage service
- ConfigOptions service

### Modified

- CartService
- FirstComponent: added services

## [0.0.2]

### Added

- Component CartItemComponent
- Header with ViewChild
- Module CartModule
- Highlight directive
- Buttons to add, remove items to cart, increase and decrease count of items in cart

### Modified

- CartListComponent: added MaterialUI
- ProductListComponent: added MaterialUI

## [0.0.1]

### Added

- New project (ng new).
- Created component FirstComponent
- Component ProductComponent
- Component CartListComponent
- Service ProductService
- Service CartService
