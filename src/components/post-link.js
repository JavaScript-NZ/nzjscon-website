import React from "react"
import { Link } from "gatsby"

import postSlug from "~/utils/post-slug"
import humanDate from "~/utils/human-date"

const PostLink = ({ post }) => (
  <div>
    <Link to={postSlug(post.frontmatter.title, post.frontmatter.date)}>
      {post.frontmatter.title} ({humanDate(post.frontmatter.date)})
    </Link>
    <p>{post.excerpt}</p>
  </div>
)
export default PostLink
