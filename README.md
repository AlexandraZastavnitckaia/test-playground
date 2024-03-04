Hi to everyone who reads this README. 

In this repository you can find autotests fro bol.com website. 
I used Playwright and Typescript for the tests. 
The command  `npm run e2e-test` runs all the tests in Chrome browser and provides a report in `playwright-report` folder

The test are based on the given requirement: 

## Requirements:

- On the homepage I can search for a product via the search bar
- I can navigate to my shopping cart via the homepage
- When I search for a product I can add the product to my shopping cart
- When I log in with the wrong credentials, I see an error message
- Via the dropdown menu I can quickly navigate to the category `Zwanger, Baby & Peuter > Babykamer & Slapen > Babykamermeubels`
- In the category books I can apply a filter so that I only see Dutch e-books
- On the homepage, all footer links have an 'href' attribute filled with the correct link


## Test cases I automated based on the requirements:

This is the minimum set of test cases to cover the given requirements. We can always increase the number of test cases with boreder cases and classes of equivalence. 

1. "Search product via the searchbar:"
   - Go to bol.com page
   - Enter product name into the searchbar
   - Click on "Search" icon
   - Verify that Search results contain the product name
  
2. "Navigate to the shopping cart:"
   - Go to bol.com page
   - Click on the shopping cart icon
   - Verify you are redirected to the Shopping cart page
  
3. "Add product to the shopping cart:"
   - Go to bol.com page
   - Enter product name into the searchbar
   - Click on "Search" icon
   - Add the first product on the Search results to the shopping cart
   - Verify you are redirected to the Shopping cart page
   - Verify that the product is present in the Basket
  
4. "Find Dutch ebooks in the Books category using filter:"
   - Go to bol.com page
   - Navigate to the "Categorieen -> Boeken -> Boeken -> Alle boeken"
   - Check Filter checkboxes for "Taal" - "Nederlands" and for "Boek, ebook of luisterboek?" - "Ebook"
   - Verify that the Serach results show "Nederlandse Ebooks"
  
5. "Navigate to Babykamermeubels category:"
   - Go to bol.com page
   - Navigate to the " Categorieen -> Zwanger, baby & peuter -> Babykamer & Slapen -> Babykamermeubels"
   - Verify that the Serach results show "Babykamermeubels"
  
6. "Login with invalid email:"
   - Go to bol.com page
   - Click "Inloggen" link
   - On login page enter incomplete email (for ex. "test@test") + valid password
   - Submit the login form
   - Verify the error message is shown "E-mailadres is niet correct"
  
7. "Login with empty password:"
   - Go to bol.com page
   - Click "Inloggen" link
   - On login page enter a valid email (for ex. "test@test.com") + empty password field
   - Submit the login form
   - Verify the error message is shown "Wachtwoord is verplicht"
  
8. "Log in with unmatching email + password combination:"
   - Go to bol.com page
   - Click "Inloggen" link
   - On login page enter unmatching email + password combination ( random email and password)
   - Submit the login form
   - Verify the error message is shown "De combinatie van e-mailadres en wachtwoord is niet geldig."
  
9. "All footer links have an 'href' attribute:"
    - Go to bol.com page
    - Check the structure of all Footer links
    - Verify all the links have "href" attribute
  
10. "Check all footer links have a correct content:"
    - Go to bol.com page
    - Check every link's name on the UI matches the link's text in the DOM
   
   
