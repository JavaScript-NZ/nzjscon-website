import React from "react"
import { Link } from "gatsby"

import postSlug from "~/utils/post-slug"
import humanDate from "~/utils/human-date"

const PostLink = ({ post }) => (
  <div>
    <h3>
      <Link to={postSlug(post.frontmatter.title, post.frontmatter.date)}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <p className="text-muted">{humanDate(post.frontmatter.date)}</p>
    <p>
      {post.excerpt.replace("…", "...")}{" "}
      <Link to={postSlug(post.frontmatter.title, post.frontmatter.date)}>
        read more
      </Link>
    </p>
  </div>
)
export default PostLink
