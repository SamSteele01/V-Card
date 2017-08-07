console.log("talking");

fetch("https://api.github.com/users/SamSteele01")
  .then(
    function(response) {
      // error checling
      if (response.status !== 200) {
        console.log('looks like there was a problem. Status Code: ' + response.status);
        return
      }
      response.json().then(function(data) {
        console.log(data.name);

        let login = data.login
        let name = data.name;
        let url = data.url;
        let email = data.email;
        let company = data.company;
        let website = data.blog;
        let avatar = data.avatar_url
        console.log(name);

        let title = "The Basics";
        let story = "The Story";
        let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        let yourName = `
        <div class="your-name">
          <h1>${name}</h1>
          </div>`

        let theBasics = `
            <div class="the-basics">
               <h2>${title}</h2>
               <p>Name: ${name}</p>
               <p>Github URL <a href=${url}>${login}</a></p>
               <p>Email: ${email}</p>
               <p>Company: ${company}</p>
               <p>Website: ${website}</p>
             </div>
           `

        let theStory =`
            <div class="the-story">
              <h2>${story}</h2>
              <p>${lorem}</p>
            </div>`

        let image =`
            <div class="image">
              <img src="${avatar}" alt="">
            </div>`

        let bodyContent =`
            <header>
              ${yourName}
            </header>
            <main>
              ${theBasics}
              ${theStory}
              ${image}
            </main>`

        document.body.innerHTML = bodyContent;
        // let header = document.createElement("header");
        // document.body.appendChild(header);
        // header.innerHTML = yourName;
        // let main = document.createElement("main");
        // document.body.appendChild(main);
        // let div = document.createElement("div");
        // main.appendChild(div);
        // div.innerHTML = theBasics;
        // let div2 = document.createElement("div");
        // main.appendChild(div2);
        // div2.innerHTML = theStory;
        // let div3 = document.createElement("div");
        // main.appendChild(div3);
        // let img = document.createElement("img");
        // div3.appendChild(img);
        // img.setAttribute("src", avatar);
     })
   }
 )
