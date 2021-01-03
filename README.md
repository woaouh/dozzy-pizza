[![Maintainability](https://api.codeclimate.com/v1/badges/aa38b62a19fcae117eb7/maintainability)](https://codeclimate.com/github/woaouh/dozzy-pizza/maintainability) [![ESLint](https://github.com/woaouh/dozzy-pizza/workflows/ESLint/badge.svg)](https://github.com/woaouh/dozzy-pizza/actions)

# Dozzy-Pizza — the web application that sells pizza 🍕

*To run the project locally:*
```
$ make install
$ make start
```

## Project implementation

This web application as a practical project has been implemented by me.

The application has two pages: home page with pizza and cart page with added items in it.

### Header

In the header is the cart button where we can see the counter of items in the cart and total price.

### Home page

Pizza is fetched from DB and showed on the home page to an user. Filters can be clicked and pizza will be filtered by the active filter. There is the sort dropdown next to the filters. Pizza will be appropriately sorted by click on any particular sort option.

Every Pizza has options to choose between different sizes and dough types. There can be inactive sizes and dough types if pizza does not have this particular option. Pizza can be added by the click on the "Add" button and a counter will be showed in the button.

### Cart page

If there is no added pizza in the cart an image with an empty cart and a message will be showed to the user.

If pizza was added to the cart we will see the pizza item in it.

We can empty the cart by the click on the "Empty cart" button and all items will be removed.

Every pizza item in the cart has options to add one more pizza or remove one or remove all this particulart items from the cart. 

## Links

* [Live project](https://dazzling-mahavira-effd40.netlify.app)
