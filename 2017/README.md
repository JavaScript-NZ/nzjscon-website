# nz.js(con); conference website

To develop locally, install the dependencies as per
[the docs](https://jekyllrb.com/docs/installation/) then run
`bundle install`. To run the dev server locally, run
`bundle exec jekyll serve`. Note the Google maps API key won't work in the local environment.

To edit the styling, make changes in `css/main.scss`. Bootstrap variables can be overriden in `_sass/custom.scss` - refer
to the [full list of available values](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss).

To edit the sections that show up on the main page, edit the files in `_sections`.

To add a sponsor, add their logo in `img/sponsors/` and add them to the file `_data/sponsors.json`.

To add a news post, add a new markdown file in `posts` in the format `yyyy-mm-dd-post-title.md`.

To deploy to [staging](https://jenofdoom.github.io/nzjscon-website-staging/): `git push staging master`

Note, staging _is_ publicly accessible.

To deploy to [production](http://conference.javascript.org.nz/): `git push origin master`
