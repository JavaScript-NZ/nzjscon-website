import React from "react"

import Layout from "~/components/layout"
import ScheduleData from "~/content/schedule.json"

import styles from "~/pages/schedule.module.scss"

const ScheduleItem = ({ item }) => {
  const [abstractShown, setAbstractShown] = React.useState(false)

  if (!item.title) {
    return (
      <td>
        <h5>{item}</h5>
      </td>
    )
  }
  return (
    <td>
      <h5>
        {item.type === "keynote" && <>Keynote: </>}
        {item.title}
      </h5>
      {item.name && <span className="talkSpeaker">{item.name}</span>}
      {item.length && <p className="talkLength">{item.length} mins</p>}

      {item.abstract && (
        <div className={styles.talkAbstract}>
          <button
            className={abstractShown ? styles.hidden : "btn btn-secondary"}
            aria-controls="{item.title}"
            aria-expanded="false"
            onClick={() => setAbstractShown(true)}
          >
            Show description
          </button>
          <div className={!abstractShown ? styles.hidden : ""}>
            <p>{item.abstract}</p>
            <button
              className="btn btn-secondary"
              aria-controls="{item.title}"
              aria-expanded="true"
              onClick={() => setAbstractShown(false)}
            >
              Hide description
            </button>
          </div>
        </div>
      )}

      {item.video && (
        <a className={styles.talkVideoLink} href="{item.video}">
          Watch video
        </a>
      )}
    </td>
  )
}

const ScheduleRow = ({ timeslot, timeslotData }) => {
  if (
    timeslotData["Track 1"] === timeslotData["Track 2"] &&
    typeof timeslotData["Track 1"] === "string"
  ) {
    // identical items, must be e.g. a break
    return (
      <tr>
        <th>{timeslot}</th>
        <td colSpan="2">
          <h5>{timeslotData["Track 1"]}</h5>
        </td>
      </tr>
    )
  } else if (timeslotData["Track 1"] && timeslotData["Track 2"]) {
    // data for both tracks
    return (
      <tr>
        <th>{timeslot}</th>
        <ScheduleItem item={timeslotData["Track 1"]} />
        <ScheduleItem item={timeslotData["Track 2"]} />
      </tr>
    )
  } else if (timeslotData["Track 1"]) {
    // data only for track 1
    return (
      <tr>
        <th>{timeslot}</th>
        <ScheduleItem item={timeslotData["Track 1"]} />
        <td className={styles.empty}></td>
      </tr>
    )
  } else if (timeslotData["Track 2"]) {
    // data only for track 2
    return (
      <tr>
        <th>{timeslot}</th>
        <td className={styles.empty}></td>
        <ScheduleItem item={timeslotData["Track 2"]} />
      </tr>
    )
  }
}

const ScheduleTable = () => {
  let schedule = []

  for (const day in ScheduleData) {
    let row = []

    for (const timeslot in ScheduleData[day]) {
      row.push(
        <ScheduleRow
          timeslot={timeslot}
          timeslotData={ScheduleData[day][timeslot]}
        />
      )
    }
    schedule.push(
      <>
        <h3 id={day} className={styles.scheduleDay}>
          {day}
        </h3>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th></th>
              <th>Track 1</th>
              <th>Track 2</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </>
    )
  }

  return (
    <Layout>
      <h1>Schedule</h1>

      <p>
        <a href="#Monday">Monday</a> | <a href="#Tuesday">Tuesday</a>
      </p>

      {schedule}
    </Layout>
  )
}
export default ScheduleTable
