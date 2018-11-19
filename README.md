# TechBuy
A react site for visitors to find the best deals on tech products. It currently uses Best Buy's API. Contributions from others are welcome :)


To dev, you must get an API Key from Best Buy API. Sign up with your work/professional email and you should receive one. Create a folder apiCredentials inside src folder and add featured.js to the folder. Directory should look like this: 

> src/apiCredentials/featured.js 


In featured.js, export a constant: 

export const apiKey = "";   <-- your api key goes there


TODO: 
- Pull deals and sales from sites other than bestbuy
