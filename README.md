# To start the application

1. In the project directory, firstly install all of the dependencies:

    - `npm install`

2. After installing them, you will have to direct yourself to the server folder:

    - `cd .\server\`

    And then start it with:

    - `node .\server.js`

3. After starting the server, run the React App:

    - `npm start`

## Info about the application

### There are 4 users who are hardcoded:

3 of them share the same password \"_123456_\":

1. peter@mail.com

2. george@mail.com

3. ivan@mail.com

The 4th one is:

-   email: theWitcher@mail.com
-   Password: lookAtMyHorseMyHorseIsAmazing

> New Users can be created via the registration form

---

### Adding new items

New Items can be added trough the \"**Add Item**\" button.  
It will send you to the \"**Add Product**\" form, where you have to fill all of the inputs.
Note that you have to be logged in, otherwise you will be redirected to the Authentication page.

> ##### Note:
>
> For now images should be selected with _Shift + Click_, and if you forgot to add some, or if you want to remove some, you will have to sellect them again.  
>  _When this is fixed, this Note will be removed._

### Editin / Deleting

Editing and Deleting are only accesible if you are existing user, and if you have uploaded products.
To Edit/Delete an existing product go to the _/myaccount_ page via the dropdown button, and select an item. Now instead of _Like_ and _Buy now_ buttons, the Owner will see _Edit_ and _Delete item_. Deleting is straightforward clicking and agreeing, followed by redirect to the _/myaccount_ page. Editing is almost like adding new item, but the Form is already filled. The case with the images stays the same.
