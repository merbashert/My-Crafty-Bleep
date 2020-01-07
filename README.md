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
* CSS

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

A filter box at the top of the fabric box allows the user to filter the fabric by tag name by entering a tag name into the input field, or by color by selecting a color from the dropdown menu. A clear button allows the user to clear any applied filters.  The fabric can also be filtered by clicking on any individual tag.

Clicking on the pencil icon brings up the edit form in a modal that has the picture of the fabric as the background of the modal.  This was achieved by grabbing the background image in a useStyle function and then using that grabbed data as the style for the modal.  
![useStyle function](https://i.imgur.com/5bRLa8x.png)
![useStyle modal](https://i.imgur.com/KeaKwdT.png)

### *Random Page*
### *Needle Page*



### *Workflow*


### *Still to Accomplish:*
I wanted to add the ability to add a beer from the random beer generator to the favorite beer list, but I was worried about breaking the functionality.
