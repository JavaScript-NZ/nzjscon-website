# nzjscon-website

1.  **Start the dev server.**

    Clone this repo. Navigate into its directory and start it up.

    ```shell
    cd nzjscon-website/
    npm install
    npm start
    ```

2.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    
    The site is built with Gatsby. [See their documentation](https://www.gatsbyjs.org/docs/).

3.  **Commit and deploy your changes**

    The live site is the built assets in the `public` folder, deployed as a 
    subtree to the `gh-pages` branch.
    
    ```shell
    npm run build
    git add . && git commit -m "Update site" && git push origin master
    git subtree push --prefix public origin gh-pages
    ```
