![banner](https://i.imgur.com/nTATrbB.png)

## **Live site:**
 [My Crafty S*!&](https://mycraftybleep.herokuapp.com/)

## **Technologies Used:**
* ReactJS
* React Router
* React Hooks
* React Bootstrap
* PHP
* JSX
* HTML
* CSS Grid

## **User Stories**
* User should be able to add, edit, and delete fabrics from a fabric library
* User should be able to filter fabrics by tag and by main color
* User should be able to add, edit, and delete random craft items from random craft library
* User should be able to see random craft sorted by box
* User should be able to search for a random craft item to find out what box it's in
* User should be able to keep track of whether or not they own a stright, circular, or doublepoint needle of each size

## **Site Functionality:**

### *Nav Bar:*
Navbar is a React Bootstrap nav bar/React Router mixed together, with a logo and links for home, fabric, random crafts, and needles.

### *Fabric Page*
The Fabric Page loads with all fabrics visible.  The fabric is sorted using an SQL Case statement in the php backend.
![SQLcase statement](https://i.imgur.com/i9jJ3uN.png)  

A button in the upper-right corner of the fabric page opens a modal to add new fabric to the library.  The fabric's main color is selected by drop down using an HTML selected attribute.
![select attribute](https://i.imgur.com/Od7wPWI.png)

A filter box at the top of the fabric page allows the user to filter the fabric by tag name by entering a tag name into the input field, or by color by selecting a color from the dropdown menu. A clear button allows the user to clear any applied filters.  The fabric can also be filtered by clicking on any individual tag.

Clicking on the pencil icon brings up the edit form in a modal that has the picture of the fabric as the background of the modal.  This was achieved by grabbing the background image in a useStyle function and then using that grabbed data as the style for the modal.  
![useStyle function](https://i.imgur.com/5bRLa8x.png)
![useStyle modal](https://i.imgur.com/KeaKwdT.png)

Delete on this page (and on all pages) confirms befre actually deleting, using an alert box and an if statement.
![alert command](https://i.imgur.com/kt2PNz0.png)

### *Random Page*
The random page is loaded with Random Box 1 as default, and shows a table of the items in the selected box.  The unselected boxes are faded out.  User can switch between boxes by clicking on each box, and whichever box is selected, the other two will be faded out.  This was achieved by a conditional style statement on each box that's triggered by the setBox function, which is run when the user chooses a box.

![setbox](https://i.imgur.com/U0oQFkn.png)
![box change](https://i.imgur.com/M5s01g6.png)

A button at the top of the random page opens a modal to add new random item to the library.  The item's box number is selected by drop down using an HTML selected attribute. Clicking on the pencil icon brings up the edit form in a modal.

A search box at the top of the random page lets the user search for a random item and find out what box the item is in.

### *Needle Page*
The Needles Page opens with cards for each needle size, with a table in each one of which type of needles the user has in that size.  The checkmarks are represented as balls of yarn, using a conditional check of the true/false value of each type of needle.  An edit button at the bottom of the card opens a modal with a form containing checkmarks for each type of needle.  When a box is checked, a ball of yarn appears.  This was achieved by hiding the default checkmark and creating a new checkbox over it, with a background image of the yarn ball.

![checkmark code](https://i.imgur.com/bNq5baa.png)

### *Still to Accomplish:*
* Add fat quarters to Fabric Page
* Add fuzzy search to Random Page
* Add image upload to Fabric Page

