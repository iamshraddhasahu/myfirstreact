### how to start project-
npm start
example-How i run it in vs code ( C:\Users\DELL\myfirstreact> npm start)

### A brief explanation of how lazy loading and Redux were used.
 ## lazy loading-
   ## lazy() function -lazy function is render the component when user click on the perticular nevigate route like (/product or /card)
 i have imported lazy and Suspence from react api in app.js for the component ProductList and Cart.
 then  i used lazy() function with  arrow function importing the module  path  of the  ProdctList and Cart.
 here i used import funtion because when user click on the perticular route at that time only dynamically load the module, so it will reduce the loading time and speed will be fast But lazy funcion will not load the component according to preference so for this i used Suspence .so suspence hold the component until all the component bt loading function will load.
i used <Suspense fallback={<div>Loading...</div>}> where i show message "Loading..." in div until lazy loading of the product and card compnent are being fetched.
While these components are being fetched, a "Loading..." message is displayed. Once the components are loaded, they will replace this fallback content.

### how redux used in the project-
src\myfirstreact\redux\cardslice.js


import createslice function from @reduxjs/toolkit libraby for managing state of the card action.
it defines the initial state of the cart and four actions (addItem, removeItem, increaseQuantity, decreaseQuantity) that modify the cart's state.
items is an array to hold items added to the cart. item have properties like id, price, quantity.
totalAmount is  the total price of all items in the card.
cardslice obeject hold inital state ,action type, and four reduce rmethod

1st reducer- additem- if an item is already there in the card ,it will increase the quantity or else itwill add in the card. total amount will be added.

 2nd reducer -removeItem-first we have to Finds the item whome you want to remove by its id then update totalAmount by subtracting the price of the item (multiplied by its quantity) and last removes the item  using filter.

3rd reducer -increaseQuantity-Increases the quantity of an item in the cart by 1.
                              Updates the totalAmount.
4th reducer-decreaseQuantity-Decreases the quantity of an item in the cart by 1.
                             If the quantity reaches 1 and this action is called, the item is removed from the cart.
                              Updates the totalAmount. 


The slice's reducer is exported to be used in the Redux store to handle state changes.













