import React from "react"
import cn from "classnames"

import Layout from "~/components/layout"
import LunchData from "~/content/lunch.json"

import styles from "~/pages/lunch.module.scss"

const Option = ({ option }) => {
  return (
    <li key={option.name}>
      <h4>
        {option.name} <span className={styles.foodListTag}>{option.type}</span>
      </h4>
      <p className={styles.foodListAddress}>{option.address}</p>
      <span className={styles.foodListCostLabel}>
        Cost: <span className={styles.foodListCost}>{option.cost}</span>
      </span>
      <span className={styles.foodListWalktimeLabel}>
        Walk time:{" "}
        <span className={styles.foodListWalktime}>{option.walktime} mins</span>
      </span>
      <a
        className="btn btn-outline-primary btn-sm mr-3"
        href={option.directions}
      >
        Directions
      </a>
      <a className="btn btn-outline-primary btn-sm" href={option.website}>
        Website
      </a>
    </li>
  )
}

const LunchOptions = () => {
  const [selectedTag, setSelectedTag] = React.useState("All")
  const tags = []
  const tagList = []

  LunchData.forEach(option => {
    if (!tags.includes(option.type)) {
      tags.push(option.type)
    }
  })

  tags.forEach(tag => {
    tagList.push(
      <button
        key={tag}
        className={cn(
          "btn",
          "btn-outline-secondary",
          "mr-2",
          "mb-2",
          styles.foodListTag,
          {
            [styles.selected]: selectedTag === tag,
          }
        )}
        onClick={() => {
          setSelectedTag(tag)
        }}
      >
        {tag}
      </button>
    )
  })

  return (
    <Layout>
      <h1>Nearby lunch options</h1>

      <p>
        Lunch at the conference is <strong>not</strong> catered (just morning
        and afternoon tea) so we're giving you an hour and a half to get some
        lunch. Here are some nearby suggestions, with everything from takeaway
        pizza by the slice, right up to fine dining, all within about ten
        minutes walk of the venue.
      </p>

      <h6>Cost key:</h6>
      <ul>
        <li>
          <span className={styles.foodListCost}>$</span> = Main is roughly $5 to
          $15
        </li>
        <li>
          <span className={styles.foodListCost}>$$</span> = Main is roughly $15
          to $30
        </li>
        <li>
          <span className={styles.foodListCost}>$$$</span> = Main is on average
          $30+
        </li>
      </ul>

      <h6>Filter by tag:</h6>
      <p>
        <button
          className={cn(
            "btn",
            "btn-outline-secondary",
            "mr-2",
            "mb-2",
            styles.foodListTag,
            {
              [styles.selected]: selectedTag === "All",
            }
          )}
          onClick={() => {
            setSelectedTag("All")
          }}
        >
          All
        </button>
        {tagList}
      </p>

      <hr />

      <ul className={styles.foodList}>
        {LunchData.filter(option => {
          if (selectedTag === "All") {
            return true
          }
          return option.type === selectedTag
        })
          .sort((a, b) => a.walktime > b.walktime)
          .map(option => (
            <Option option={option} key={option.name} />
          ))}
      </ul>
    </Layout>
  )
}
export default LunchOptions
